RegisterNetEvent("op-identity:server:request-data", function(target, scope, action, clientData)
    local data = {type = "display", scope = scope, action = action, source = source}

    for k, v in pairs(clientData) do
        data[k] = v
    end

    TriggerClientEvent("op-identity:client:display-ui", target, data)
end)

RegisterNetEvent("op-identity:server:hide-around", function(players)
    if type(players) == "table" and #players > 0 then
        for _, player in ipairs(players) do
            TriggerClientEvent("op-identity:client:hide", player, source)
        end
    end
end)
