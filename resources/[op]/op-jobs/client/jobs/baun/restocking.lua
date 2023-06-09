RegisterNetEvent("op-jobs:client:baun:restock", function(data)
    QBCore.Functions.TriggerCallback("op-jobs:server:baun:can-restock", function(canRestock)
        if canRestock then
            restock(data)
        end
    end, data.item)
end)

function restock(data)
    local action_message = "Vous commencez à restocker."
    local stopped_message = "Vous avez arrêté de restocker."
    local finished_message = "Vous avez terminé de restocker."
    QBCore.Functions.Progressbar("restock", action_message, BaunConfig.Durations.Restocking, false, true,
                                 {
        disableMovement = true,
        disableCarMovement = true,
        disableMouse = false,
        disableCombat = true,
    }, {animDict = "rcmextreme3", anim = "idle", flags = 1}, {}, {}, function()
        QBCore.Functions.TriggerCallback("op-jobs:server:baun:restock", function(success, reason)
            if success then
                TriggerEvent("op-jobs:client:baun:restock", data)
            else
                if reason == "missing_ingredient" then
                    exports["op-hud"]:DrawNotification(finished_message)
                else
                    exports["op-hud"]:DrawNotification(string.format("Une erreur est survenue: %s.", reason), "error")
                end
            end
        end, data.storage, data.item)
    end, function()
        exports["op-hud"]:DrawNotification(stopped_message)
    end)
end
