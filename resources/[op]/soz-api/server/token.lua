QBCore.Functions.CreateCallback("op-api:server:GetJwtToken", function(source, cb)
    local steam = QBCore.Functions.GetopIdentifier(source)
    local url = GetConvar("op_api_endpoint", "https://op.zerator.com") .. "/accounts/create-token/" .. steam
    local authorization = GetAuthorizationHeader(GetConvar("op_api_username", "admin"), GetConvar("op_api_password", "admin"))

    PerformHttpRequest(url, function(status, text)
        if status ~= 200 then
            cb(null)
        else
            cb(text)
        end
    end, "GET", "", {["Authorization"] = authorization})
end)
