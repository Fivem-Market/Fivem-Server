function CreateResaleZone(data)
    data.options = {
        {
            label = "Vendre l'énergie",
            event = "op-upw:client:ResaleEnergy",
            canInteract = function()
                return OnDuty()
            end,
            blackoutGlobal = true,
        },
    }

    return CreateZone("UPW", "Resale", data)
end

AddEventHandler("op-upw:client:ResaleEnergy", function()
    local progress, elapsed = exports["op-utils"]:Progressbar("op-upw:progressbar:resale", "Vous vendez de l'énergie", Config.Upw.Resale.Duration, false,
                                                               true,
                                                               {
        disableMovement = true,
        disableCarMovement = true,
        disableMouse = false,
        disableCombat = true,
    }, {animDict = "anim@mp_radio@garage@low", anim = "action_a"}, {}, {})

    if not progress then
        exports["op-hud"]:DrawNotification("Il y a eu une erreur", "error")
        return
    end

    local res = QBCore.Functions.TriggerRpc("op-upw:server:ResaleEnergy")
    local success, message = table.unpack(res)

    if success then
        exports["op-hud"]:DrawNotification(message, "success")
        TriggerEvent("op-upw:client:ResaleEnergy")
    else
        exports["op-hud"]:DrawNotification(message, "error")
    end
end)
