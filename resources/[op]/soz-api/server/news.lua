RegisterNetEvent("op-api:server:AddFlashNews", function(news)
    local url = GetConvar("op_api_endpoint", "https://op.zerator.com") .. "/news/add-flash"
    local authorization = GetAuthorizationHeader(GetConvar("op_api_username", "admin"), GetConvar("op_api_password", "admin"))

    PerformHttpRequest(url, function(status, text)
        if status ~= 201 then
            exports["op-monitor"]:Log("ERROR", "error when adding flash news, status: " .. status .. ", body: " .. tostring(text), {})
        end
    end, "POST", json.encode(news), {["Authorization"] = authorization, ["Content-Type"] = "application/json"})
end)
