export enum RpcServerEvent {
    ADMIN_GET_PLAYERS = 'op-core:admin:get-players',
    ADMIN_GET_CHARACTERS = 'op-core:admin:get-characters',
    ADMIN_GET_FULL_PLAYERS = 'op-core:admin:get-full-players',
    ADMIN_GET_VEHICLES = 'op-core:admin:get-vehicles',
    ADMIN_IS_ALLOWED = 'op-core:admin:is-allowed',
    ADMIN_GET_REPUTATION = 'op-core:admin:get-reputation',

    BENNYS_GET_ORDERS = 'op-core:server:job:bennys:get-orders',
    BENNYS_CANCEL_ORDER = 'op-core:server:job:bennys:cancel-order',
    BENNYS_ORDER_VEHICLE = 'op-core:server:job:bennys:order-vehicle',

    CRIMI_CAN_USE_CLOAKROOM = 'op-core:server:crimi:can-use-cloakroom',

    DRIVING_SCHOOL_SPAWN_VEHICLE = 'op-core:server:driving-school:spawn-vehicle',
    DRIVING_SCHOOL_CHECK_REMAINING_SLOTS = 'op-core:server:driving-school:check-vehicle-slots',

    INVENTORY_SEARCH = 'op-core:inventory:search',

    JOB_GET_JOBS = 'op-core:jobs:get-jobs',
    JOBS_USE_WORK_CLOTHES = 'op-core:server:job:use-work-clothes',

    OIL_GET_STATION = 'op-core:job:oil:get-station',
    OIL_GET_STATION_PRICES = 'op-core:job:oil:get-station-prices',

    PLAYER_GET_HEALTH_BOOK = 'op-core:player:get-health-book',
    PLAYER_GET_SERVER_STATE = 'op-core:player:get-server-state',
    PLAYER_GET_JWT_TOKEN = 'op-core:player:get-jwt-token',

    CRAFTING_GET_RECIPES = 'op-core:crafting:get-recipes',
    CRAFTING_DO_CRAFT = 'op-core:crafting:do-craft',
    CRAFTING_DO_SALVAGE = 'op-core:crafting:do-salvage',

    SHOP_MASK_GET_CATEGORIES = 'op-core:shop:mask:get-categories',
    SHOP_MASK_GET_ITEMS = 'op-core:shop:mask:get-items',

    STORY_HALLOWEEN_SCENARIO1 = 'op-story:server:halloween1',
    STORY_HALLOWEEN_SCENARIO2 = 'op-story:server:halloween2',
    STORY_HALLOWEEN_SCENARIO3 = 'op-story:server:halloween3',
    STORY_HALLOWEEN_SCENARIO4 = 'op-story:server:halloween4',

    REPOSITORY_GET_DATA = 'op-core:repository:get-data',

    VEHICLE_CUSTOM_GET_MODS = 'op-core:vehicle:custom:get-mods',
    VEHICLE_CUSTOM_SET_MODS = 'op-core:vehicle:custom:set-mods',
    VEHICLE_DEALERSHIP_AUCTION_BID = 'op-core:vehicle:dealership:auction:bid',
    VEHICLE_DEALERSHIP_GET_AUCTIONS = 'op-core:vehicle:dealership:get-auctions',
    VEHICLE_DEALERSHIP_GET_LIST = 'op-core:vehicle:dealership:get-list',
    VEHICLE_DEALERSHIP_GET_LIST_JOB = 'op-core:vehicle:dealership:get-list-job',
    VEHICLE_DEALERSHIP_BUY = 'op-core:vehicle:dealership:buy',
    VEHICLE_GARAGE_GET_VEHICLES = 'op-core:vehicle:garage:get-vehicles',
    VEHICLE_GARAGE_GET_FREE_PLACES = 'op-core:vehicle:garage:get-free-places',
    VEHICLE_GARAGE_GET_MAX_PLACES = 'op-core:vehicle:garage:get-max-places',
    VEHICLE_HAS_KEY = 'op-core:vehicle:has-key',

    VOIP_IS_MUTED = 'op-core:voip:is-muted',

    INVENTORY_GET_ITEM_BY_SHORTCUT = 'op-core:inventory:get-item-by-shortcut',

    WEAPON_USE_AMMO = 'op-core:server:weapon:useAmmo',
    WEAPON_SET_LABEL = 'op-core:server:weapon:setLabel',
    WEAPON_REPAIR = 'op-core:server:weapon:repair',
    WEAPON_SET_TINT = 'op-core:server:weapon:setTint',
    WEAPON_SET_ATTACHMENTS = 'op-core:server:weapon:setAttachments',

    RACKET_LAST_RACKET_TIME = 'op-core:server:racket:last-time',

    VANDALISM_END = 'op-core:server:vandalism:end',
    VANDALISM_LOAD = 'op-core:server:vandalism:load',
    VANDALISM_LOCK = 'op-core:server:vandalism:lock',

    HEIST_CHECK = 'op-core:server:heist:check',
    HEIST_JEWELRY_IS_ZONE_UNLOCK = 'op-core:server:heist:jewelry-check-unlock',
    HEIST_JEWELRY_CHECK_ROBBERY = 'op-core:server:heist:jewelry-check-robbery',
    HEIST_JEWELRY_START_ROBBERY = 'op-core:server:heist:jewelry-start-robbery',

    LSMC_CAN_REMOVE_ITT = 'op-core:server:lsmc:can-remove-itt',
    LSMC_CAN_SET_ITT = 'op-core:server:lsmc:can-set-itt',

    TALENT_TREE_UNLOCK = 'op-core:server:talent:unlock',
    TALENT_TREE_RESET = 'op-core:server:talent:reset',
    TALENT_TREE_CAN_CRIMI_BE_ENABLED = 'op-core:server:talent:can-crimi-be-enabled',

    HELICO_INIT_LIGHT = 'op-core:server:helico:init-spotlight',

    POLICE_ALCOOLLEVEL = 'op-core:server:police:alcool-level',
    HUB_EXIT_TIME = 'op-core:server:hub:exit-time',

    BIN_IS_NOT_LOCKED = 'op-core:server:bin:is-locked',
}

export enum RpcClientEvent {
    VEHICLE_GET_TYPE = 'op-core:rpc:client:vehicle:get-type',
    VEHICLE_SPAWN = 'op-core:rpc:client:vehicle:spawn',
    GET_LAST_VEHICLE_SPAWN = 'op-core:rpc:client:vehicle:get-last-spawn',
    DELETE_LAST_VEHICLE_SPAWN = 'op-core:rpc:client:vehicle:delete-last-spawn',
    VEHICLE_SPAWN_FROM_SERVER = 'op-core:rpc:client:vehicle:spawn-from-server',
    VEHICLE_DELETE = 'op-core:rpc:client:vehicle:delete',
}
