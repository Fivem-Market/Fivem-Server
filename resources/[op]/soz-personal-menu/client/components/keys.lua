function KeysEntry(menu)
    menu:AddButton({
        label = "Gestion des clés",
        value = nil,
        select = function()
            menu:Close()
            TriggerServerEvent("op-core:server:vehicle:open-keys")
        end,
    })
end
