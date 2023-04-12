-- Event handler to reset logging
RegisterNetEvent("op-character:client:start")
AddEventHandler("op-character:client:start", StartGame)

---- Event handler to reset logging
RegisterNetEvent("op-character:client:create-new-character")
AddEventHandler("op-character:client:create-new-character", function(spawnId, firstname, lastname)
    local charInfo = {firstname = firstname, lastname = lastname}

    local character = CreateAndApplyDefaultCharacter(0)

    SpawnPlayer(spawnId)
    CharacterCreate(spawnId, charInfo, character)
end)

RegisterNetEvent("op-character:client:login-character")
AddEventHandler("op-character:client:login-character", function(player)
    LogExistingPlayer(player, false)

    local playerPed = PlayerPedId()

    SetPedConfigFlag(playerPed, 35, false)
    SetPedSuffersCriticalHits(playerPed, false)
end)
