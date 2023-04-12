RegisterNUICallback("welcome-hide", function(data, cb)
    SendNUIMessage({action = "hide"})
    SetNuiFocus(false, false)
    cb("ok")
end)

RegisterNetEvent("op-utils:welcome-show", function()
    SendNUIMessage({action = "show"})
    SetNuiFocus(true, true)
end)

RegisterNetEvent("op-utils:health-book", function()
    SendNUIMessage({action = "show-health"})
    SetNuiFocus(true, true)
end)

RegisterNetEvent("op-utils:lsmc-calender-2023", function()
    SendNUIMessage({action = "show-lsmc-calendar-2023"})
    SetNuiFocus(true, true)
end)