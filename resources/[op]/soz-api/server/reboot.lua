exports("AddRebootMessage", function(minutes)
    local url = GetConvar("op_api_endpoint", "https://op.zerator.com") .. "/discord/send-reboot-message"
    local authorization = GetAuthorizationHeader(GetConvar("op_api_username", "admin"), GetConvar("op_api_password", "admin"))

    PerformHttpRequest(url, function(status, text)
        if status ~= 201 then
            exports["op-monitor"]:Log("ERROR", "error when adding reboot message, status: " .. status .. ", body: " .. tostring(text), {})
        end
    end, "POST", json.encode({minutes = minutes}), {
        ["Authorization"] = authorization,
        ["Content-Type"] = "application/json",
    })
end)

exports("RemoveRebootMessage", function()
    local url = GetConvar("op_api_endpoint", "https://op.zerator.com") .. "/discord/delete-reboot-message"
    local authorization = GetAuthorizationHeader(GetConvar("op_api_username", "admin"), GetConvar("op_api_password", "admin"))

    PerformHttpRequest(url, function(status, text)
        if status ~= 201 then
            exports["op-monitor"]:Log("ERROR", "error when removing reboot message, status: " .. status .. ", body: " .. tostring(text), {})
        end
    end, "POST", json.encode({}), {["Authorization"] = authorization, ["Content-Type"] = "application/json"})
end)
