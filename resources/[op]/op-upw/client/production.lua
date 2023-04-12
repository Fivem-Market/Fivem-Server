function CreateEnergyZone(identifier, data)
    data.options = {
        {
            label = "Collecter l'énergie",
            event = "op-upw:client:HarvestLoop",
            identifier = identifier,
            harvest = "energy",
            canInteract = function()
                return OnDuty()
            end,
        },
        {
            label = "Taux de pollution",
            action = function()
                local pollution = QBCore.Functions.TriggerRpc("op-upw:server:GetPollutionPercent", true)
                exports["op-hud"]:DrawNotification("Niveau de pollution : " .. pollution, "info")
            end,
            canInteract = function()
                return OnDuty()
            end,
        },
    }

    return CreateZone(identifier, "energy", data)
end

function CreateWasteZone(identifier, data)
    data.options = {
        {
            label = "Collecter les déchets",
            event = "op-upw:client:HarvestLoop",
            identifier = identifier,
            harvest = "waste",
            canInteract = function()
                return OnDuty("garbage")
            end,
        },
    }

    data.onPlayerInOut = function(isIn)
        if isIn and (OnDuty("garbage") or OnDuty("upw")) then
            local waste = QBCore.Functions.TriggerRpc("op-upw:server:GetWaste", identifier, "waste")
            SendNUIMessage({action = "show", health = Config.FieldHealthStates[waste]})
        else
            SendNUIMessage({action = "hide"})
        end
    end

    return CreateZone(identifier, "waste", data)
end

--
-- FARM
--
local function HarvestPrecheck(identifier, harvest)
    local result = QBCore.Functions.TriggerRpc("op-upw:server:PrecheckHarvest", identifier, harvest)

    -- success, reason
    return result[1], result[2]
end

local function Harvest(identifier, harvest)
    local message = "Vous collectez..."
    if harvest == "inverter-in" or harvest == "terminal-in" then
        message = "Vous déposez..."
    end

    local success, elapsed = exports["op-utils"]:Progressbar("op-upw:progressbar:harvest", message, Config.Harvest.Duration, false, true,
                                                              {
        disableMovement = true,
        disableCarMovement = true,
        disableMouse = false,
        disableCombat = true,
    }, {animDict = "anim@mp_radio@garage@low", anim = "action_a"}, {}, {})

    if success then
        local result = QBCore.Functions.TriggerRpc("op-upw:server:Harvest", identifier, harvest)
        local harvested, message = table.unpack(result)

        if harvested then
            exports["op-hud"]:DrawNotification(message, "success")
        else
            exports["op-hud"]:DrawNotification("Il y a eu une erreur : " .. message, "error")
        end

        return harvested
    end
end

local function HarvestLoop(data)
    local isOk, reason = HarvestPrecheck(data.identifier, data.harvest)

    if isOk then
        local harvested = Harvest(data.identifier, data.harvest)
        if data.harvest == "waste" then
            local waste = QBCore.Functions.TriggerRpc("op-upw:server:GetWaste", data.identifier, data.harvest)

            SendNUIMessage({action = "show", health = Config.FieldHealthStates[waste]})
        end

        if harvested then
            HarvestLoop(data)
        end
    else
        exports["op-hud"]:DrawNotification(reason, "error")
    end
end
AddEventHandler("op-upw:client:HarvestLoop", HarvestLoop)
