QBCore = exports["qb-core"]:GetCoreObject()

RegisterNetEvent("QBCore:Client:OnPlayerLoaded", function()
    local token = QBCore.Functions.TriggerRpc("op-api:server:GetJwtToken")

    LocalPlayer.state.opJWTToken = token
end)
