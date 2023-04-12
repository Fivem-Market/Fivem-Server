fx_version "cerulean"
games {"gta5"}
lua54 "yes"

shared_scripts {
    "config/*.lua",
    "config/datasource/*.json",
    "config/datasource/jewelry/female/*.json",
    "config/datasource/jewelry/male/*.json",
}

client_scripts {
    "@PolyZone/client.lua",
    "@PolyZone/BoxZone.lua",
    "@PolyZone/ComboZone.lua",
    "@menuv/menuv.lua",
    "@op-character/client/skin/clothing.lua",
    "@op-character/client/skin/menu/menu.lua",

    "client/main.lua",
    "client/shops/*.lua",
    "client/shops.lua",
}
server_scripts {"@oxmysql/lib/MySQL.lua", "server/main.lua"}

dependencies {"oxmysql", "qb-core", "qb-target", "op-hud", "op-locations", "menuv", "op-character"}
