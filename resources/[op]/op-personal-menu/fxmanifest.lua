fx_version "cerulean"
games {"gta5"}
lua54 "yes"

description "op personal menu"

shared_scripts {"config.lua"}

client_scripts {
    "@menuv/menuv.lua",
    "@op-character/client/skin/create/default.lua",
    "client/main.lua",
    "client/components/*.lua",
}

dependencies {"qb-core", "op-hud", "menuv"}
