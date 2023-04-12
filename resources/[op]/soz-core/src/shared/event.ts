export enum ServerEvent {
    ADMIN_RESET_SKIN = 'op-core:server:admin:reset-skin',
    ADMIN_RESET_HALLOWEEN = 'op-core:server:admin:reset-halloween',
    ADMIN_SET_AIO = 'op-core:server:admin:set-aio',
    ADMIN_SET_METADATA = 'op-core:server:admin:set-metadata',
    ADMIN_SET_STAMINA = 'op-core:server:admin:set-stamina',
    ADMIN_SET_STRENGTH = 'op-core:server:admin:set-strength',
    ADMIN_SET_STRESS_LEVEL = 'op-core:server:admin:set-stress-level',
    ADMIN_SET_INJURIES_COUNT = 'op-core:server:admin:set-injuries-count',
    ADMIN_SET_REPUTATION = 'op-core:server:admin:set-reputation',
    ADMIN_VEHICLE_SEE_CAR_PRICE = 'op-core:server:admin:vehicle:see-car-price',
    ADMIN_VEHICLE_CHANGE_CAR_PRICE = 'op-core:server:admin:vehicle:change-car-price',
    ADMIN_VEHICLE_SPAWN = 'op-core:server:admin:vehicle:spawn',
    ADMIN_VEHICLE_DELETE = 'op-core:server:admin:vehicle:delete',

    BAUN_CRAFT = 'op-core:server:job:baun:craft',
    BAUN_RESELL = 'op-core:server:job:baun:resell',

    BENNYS_ESTIMATE_VEHICLE = 'op-core:server:job:bennys:estimate-vehicle',
    BENNYS_SELL_VEHICLE = 'op-core:server:job:bennys:sell-vehicle',
    BENNYS_SET_SPECIAL_VEHICLES = 'op-core:server:bennys:set-special-vehicles',
    BENNYS_REPAIR_VEHICLE_ENGINE = 'op-core:server:job:bennys:repair-vehicle-engine',
    BENNYS_REPAIR_VEHICLE_BODY = 'op-core:server:job:bennys:repair-vehicle-body',
    BENNYS_REPAIR_VEHICLE_TANK = 'op-core:server:job:bennys:repair-vehicle-tank',
    BENNYS_REPAIR_VEHICLE_WHEEL = 'op-core:server:job:bennys:repair-vehicle-wheel',
    BENNYS_WASH_VEHICLE = 'op-core:server:job:bennys:wash-vehicle',
    BENNYS_FLATBED_ATTACH_VEHICLE = 'op-core:server:job:bennys:flatbed:attach-vehicle',

    CRIMI_CONFIRM_REMOTE_WORKSHOP = 'op-core:server:job:crimi:confirm-remote-workshop',

    DRIVING_SCHOOL_PLAYER_PAY = 'op-core:server:driving-school:player-pay',
    DRIVING_SCHOOL_UPDATE_LICENSE = 'op-core:server:driving-school:update-license',
    DRIVING_SCHOOL_UPDATE_VEHICLE_LIMIT = 'op-core:server:driving-school:update-vehicle-limit',

    FIVEM_PLAYER_CONNECTING = 'playerConnecting',

    FOOD_CRAFT = 'op-core:server:job:food:craft',
    FOOD_ORDER_MEALS = 'op-core:server:job:food:order-meals',
    FOOD_RETRIEVE_ORDER = 'op-core:server:job:food:retrieve-order',
    FOOD_RETRIEVE_STATE = 'op-core:server:job:food:retrieve-state',
    FOOD_EASTER_HARVEST = 'op-core:server:job:food:easter-harvest',

    FFS_CRAFT = 'op-core:server:job:ffs:craft',
    FFS_HARVEST = 'op-core:server:job:ffs:harvest',
    FFS_RESTOCK = 'op-core:server:job:ffs:restock',
    FFS_TRANSFORM = 'op-core:server:job:ffs:transform',

    STONK_RESELL = 'op-core:server:job:stonk:resell',
    STONK_COLLECT = 'op-core:server:job:stonk:collect',
    STONK_FILL_IN = 'op-core:server:job:stonk:fill-in',
    STONK_DELIVERY_TAKE = 'op-core:server:job:stonk:delivery-take',
    STONK_DELIVERY_END = 'op-core:server:job:stonk:delivery-end',

    JOBS_PLACE_PROPS = 'job:server:placeProps',

    LSMC_BLOOD_FILL_FLASK = 'op-core:server:job:lsmc:blood-fill-flask',
    LSMC_BLOOD_ANALYZE = 'op-core:server:job:lsmc:blood-analyze',
    LSMC_BUY_ITEM = 'op-core:server:job:lsmc:buy-item',
    LSMC_HEAL = 'op-core:server:job:lsmc:heal',
    LSMC_PEE_ANALYZE = 'op-core:server:job:lsmc:pee-analyze',
    LSMC_HEALTH_CHECK = 'op-core:server:job:lsmc:health-check',
    LSMC_SET_HEALTH_BOOK = 'op-core:server:job:lsmc:set-health-book',
    MISSIVE_CREATE_ITEM = 'op-core:server:missive:create-item',
    MISSIVE_DELETE_ITEM = 'op-core:server:missive:delete-item',
    MISSIVE_COMPLETE = 'op-core:server:missive:complete',

    LSMC_SET_PATIENT_OUTFIT = 'op-core:server:job:lsmc:set-patient-outfit',

    OIL_REFILL_ESSENCE_STATION = 'op-core:server:oil:refill-essence-station',
    OIL_REFILL_KEROSENE_STATION = 'op-core:server:oil:refill-kerosene-station',
    OIL_SET_STATION_PRICE = 'op-core:server:oil:set-station-price',
    OIL_DECREMENT_STATION = 'op-core:server:oil:decrement',

    PLAYER_INCREASE_STRESS = 'op-core:server:player:increase-stress',
    PLAYER_INCREASE_STRENGTH = 'op-core:server:player:increase-strength',
    PLAYER_SET_CURRENT_DISEASE = 'op-core:server:server:set-current-disease',
    PLAYER_INCREASE_RUN_TIME = 'op-core:server:player:health:increase-run-time',
    PLAYER_DO_YOGA = 'op-core:server:player:do-yoga',
    PLAYER_SET_CURRENT_WALKSTYLE = 'op-core:server:player:set-current-walkstyle',
    PLAYER_UPDATE_HAT_VEHICLE = 'op-core:server:player:update-hat-vehicle',

    PLAYER_NUTRITION_LOOP = 'op-core:server:player:nutrition:loop',
    PLAYER_NUTRITION_CHECK = 'op-core:server:player:nutrition:check',
    PLAYER_SHOW_HEALTH_BOOK = 'op-core:server:player:health:request-health-book',
    PLAYER_HEALTH_SET_EXERCISE_COMPLETED = 'op-core:server:player:health:set-exercise-completed',
    PLAYER_HEALTH_GYM_SUBSCRIBE = 'op-core:server:player:health:gym-subscribe',

    PLAYER_APPEARANCE_SET_JOB_OUTFIT = 'op-core:server:appearance:set-job-outfit',
    PLAYER_APPEARANCE_REMOVE_JOB_OUTFIT = 'op-core:server:appearance:remove-job-outfit',
    PLAYER_APPEARANCE_SET_TEMP_OUTFIT = 'op-core:server:appearance:set-temp-outfit',
    PLAYER_APPEARANCE_REMOVE_TEMP_OUTFIT = 'op-core:server:appearance:remove-temp-outfit',

    PLAYER_ZIP = 'op-core:server:player:zip',
    PLAYER_UNZIP = 'op-core:server:player:unzip',

    PROGRESS_FINISH = 'op-core:server:progress:finish',

    STORAGE_REMOVE_ITEM = 'op-core:server:storage:remove-item',
    SHOP_MASK_BUY = 'op-core:server:shop:mask:buy',
    SHOP_BOSS_BUY = 'op-core:server:shop:boss:buy',
    SHOP_EASTER_BUY = 'op-core:server:shop:easter:buy',

    AFK_KICK = 'op-core:server:afk:kick',

    // not core
    ADMIN_ADD_VEHICLE = 'admin:vehicle:addVehicle',
    ADMIN_CHANGE_PLAYER = 'admin:server:ChangePlayer',
    ADMIN_GIVE_LICENCE = 'admin:gamemaster:giveLicence',
    ADMIN_GIVE_MONEY = 'admin:gamemaster:giveMoney',
    ADMIN_GOD_MODE = 'admin:gamemaster:godmode',
    ADMIN_TELEPORT_TO_PLAYER = 'admin:server:goto',
    ADMIN_TELEPORT_PLAYER_TO_ME = 'admin:server:bring',
    ADMIN_FREEZE = 'admin:server:freeze',
    ADMIN_KILL = 'admin:server:kill',
    ADMIN_REVIVE = 'admin:server:revive',
    ADMIN_SET_JOB = 'admin:jobs:setjob',
    ADMIN_SPECTATE = 'admin:server:spectate',
    ADMIN_UNCUFF = 'admin:gamemaster:unCuff',
    ADMIN_UNFREEZE = 'admin:server:unfreeze',
    ADMIN_CREATE_CHARACTER = 'op-core:server:admin:create-character',
    ADMIN_SWITCH_CHARACTER = 'op-core:server:admin:switch-character',

    BANKING_TRANSFER_MONEY = 'banking:server:TransferMoney',
    CHARACTER_SET_JOB_CLOTHES = 'op-character:server:SetPlayerJobClothes',
    QBCORE_CALL_COMMAND = 'QBCore:CallCommand',
    QBCORE_TOGGLE_DUTY = 'QBCore:ToggleDuty',
    QBCORE_SET_DUTY = 'QBCore:Server:SetDuty',
    QBCORE_SET_METADATA = 'QBCore:Server:SetMetaData',

    IDENTITY_HIDE_AROUND = 'op-identity:server:hide-around',

    LSMC_CLEAR_DISEASE = 'lsmc:maladie:ClearDisease',
    LSMC_SET_CURRENT_DISEASE = 'lsmc:maladie:server:SetCurrentDisease',
    LSMC_REVIVE = 'op-core:lsmc:server:revive',
    LSMC_FREE_BED = 'op-core:lsmc:server:free-bed',
    LSMC_ON_DEATH = 'op-core:lsmc:server:on-death',
    LSMC_ON_DEATH2 = 'op-core:lsmc:server:on-death2',
    LSMC_SET_DEATH_REASON = 'op-core:lsmc:server:set-death-reason',

    METRICS_UPDATE = 'op-core:server:metrics:update',

    REPOSITORY_REFRESH_DATA = 'op-core:server:repository:refresh-data',

    VEHICLE_USE_REPAIR_KIT = 'op-core:server:vehicle:use-repair-kit',
    VEHICLE_USE_CLEANING_KIT = 'op-core:server:vehicle:use-cleaning-kit',
    VEHICLE_USE_WHEEL_KIT = 'op-core:server:vehicle:use-wheel-kit',
    VEHICLE_FORCE_OPEN = 'op-core:server:vehicle:force-open',
    VEHICLE_SET_OPEN = 'op-core:server:vehicle:set-open',
    VEHICLE_SET_CLOSEST = 'op-core:server:vehicle:set-closest',
    VEHICLE_SWAP = 'op-core:server:vehicle:swaped',
    VEHICLE_DELETED = 'op-core:server:vehicle:deleted',
    VEHICLE_GARAGE_STORE = 'op-core:server:vehicle:garage:store',
    VEHICLE_GARAGE_RETRIEVE = 'op-core:server:vehicle:garage:retrieve',
    VEHICLE_GARAGE_RENAME = 'op-core:server:vehicle:garage:rename',
    VEHICLE_SET_DEAD = 'op-core:server:vehicle:set-dead',
    VEHICLE_WASH = 'op-core:server:vehicle:wash',
    VEHICLE_FUEL_START = 'op-core:server:vehicle:fuel:start',
    VEHICLE_OPEN_KEYS = 'op-core:server:vehicle:open-keys',
    VEHICLE_GIVE_KEY = 'op-core:server:vehicle:give-key',
    VEHICLE_ROUTE_EJECTION = 'op-core:server:vehicle:route-ejection',
    VEHICLE_TAKE_OWNER = 'op-core:server:vehicle:take-owner',
    VEHICLE_SET_TRUNK_STATE = 'op-core:client:vehicle:set-trunk-state',

    VOIP_IS_MUTED = 'voip:server:player:isMuted',
    VOIP_MUTE = 'voip:server:player:mute',

    HALLOWEEN2022_HUNT = 'halloween2022:server:hunt',
    LSMC_HALLOWEEN_LOOT_PLAYER = 'lsmc:halloween:lootPlayer',
    VEHICLE_FREE_JOB_SPAWN = 'op-core:server:vehicle:free-job-spawn',

    INVENTORY_USE_ITEM = 'inventory:server:UseItemSlot',
    INVENTORY_SET_ITEM_SHORTCUT = 'op-core:server:inventory:set-item-usage',

    WEAPON_SHOOTING = 'op-core:server:weapon:shooting',

    VANDALISM_END = 'op-core:server:vandalism:end',
    VANDALISM_UNLOCK = 'op-core:server:vandalism:unlock',

    MDR_SHOW_TICKET = 'op-core:server:mdr:show-ticket',

    RACKET = 'op-core:server:racket',

    HEIST_ADD_ITEM = 'op-core:server:heist:add-item',
    HEIST_JEWELRY_UNLOCK = 'op-core:server:heist:unlock',
    HEIST_JEWELRY_ALARM_STOP = 'op-core:server:heist:alarm-stop',
    HEIST_JEWELRY_START_ROBBERY = 'op-core:server:heist:start-robbery',
    HEIST_PLAY_ANIM = 'op-core:server:heist:play-anim',
    HEIST_PLAY_ANIM_INIT = 'op-core:server:heist:init',
    HEIST_RETRIEVE_ITEM = 'op-core:server:heist:retrieve',
    HEIST_RETRIEVE_JEWEL = 'op-core:server:heist:jewelry-retrieve-jewel',
    HEIST_JEWELRY_STOP_ROBBERY = 'op-core:server:heist:jewelry-stop-robbery',

    SOUND_GLOBAL_INIT = 'op-core:server:sound:init',

    POLICE_TAKE_DOWN = 'op-core:server:takedown',

    HELICO_ADD_LIGHT = 'op-core:server:police:add-light',
    HELICO_REMOVE_LIGHT = 'op-core:server:police:del-light',
    HELICO_UPDATE_LIGHT = 'op-core:server:police:update-light',

    HUB_TELEPORT_ENTER = 'op-core:server:hub:teleport:enter',
    HUB_TELEPORT_EXIT = 'op-core:server:hub:teleport:exit',
    HUB_WASH = 'op-core:server:hub:wash',
    HUB_SHOP_BUY = 'op-core:server:hub:shop-buy',
    HUB_EXIT = 'op-core:server:hub:exit',
    HUB_RESELL = 'op-core:server:hub:resell',

    CRIMI_HOOD = 'op-core:server:crimi:hood',
    CRIMI_UNHOOD = 'op-core:server:crimi:unhood',
}

export enum ClientEvent {
    ADMIN_OPEN_MENU = 'op-core:client:admin:openMenu',

    BASE_ENTERED_VEHICLE = 'baseevents:enteredVehicle',
    BASE_LEFT_VEHICLE = 'baseevents:leftVehicle',

    BENNYS_OPEN_CLOAKROOM = 'op-core:client:job:bennys:open-cloakroom',

    CHARACTER_REQUEST_CHARACTER_WIZARD = 'op-character:client:RequestCharacterWizard',

    PHONE_APP_NEWS_CREATE_BROADCAST = 'phone:app:news:createNewsBroadcast',
    CORE_CLOSE_MENU = 'op-core:client:menu:close',

    ADMIN_NOCLIP_ENABLED = 'op-core:client:admin:noclip:enabled',
    ADMIN_NOCLIP_DISABLED = 'op-core:client:admin:noclip:disabled',

    AUDIO_PLAY = 'op-core:client:audio:play',
    AUDIO_STOP = 'op-core:client:audio:stop',
    CRIMI_USE_CLOAKROOM = 'op-core:client:crimi:use-cloakroom',
    CRIMI_REMOVE_CLOTH = 'op-core:client:crimi:remove-cloth',
    CRIMI_ASK_REMOTE_WORKSHOP = 'op-core:client:crimi:ask-remote-workshop',
    CRIMI_ADD_REMOTE_WORKSHOP = 'op-core:client:crimi:add-remote-workshop',
    CRIMI_REMOVE_REMOTE_WORKSHOP = 'op-core:client:crimi:remove-remote-workshop',

    DRIVING_SCHOOL_START_EXAM = 'op-core:client:driving-school:start-exam',
    DRIVING_SCHOOL_SETUP_EXAM = 'op-core:client:driving-school:spawn-veh',

    FFS_ENTER_CLOTHING_SHOP = 'op-core:client:job:ffs:enter-clothing-shop',
    FFS_EXIT_CLOTHING_SHOP = 'op-core:client:job:ffs:exit-clothing-shop',

    FOOD_UPDATE_ORDER = 'op-core:client:food:update-order',

    HOUSING_OPEN_UPGRADES_MENU = 'op-core:client:housing:open-upgrades-menu',

    IDENTITY_HIDE = 'op-identity:client:hide',
    ITEM_USE = 'op-core:client:item:use',

    PLAYER_ON_DEATH = 'ems:client:onDeath',

    JOBS_FFS_OPEN_SOCIETY_MENU = 'op-jobs:client:ffs:OpenSocietyMenu',
    JOBS_BAUN_OPEN_SOCIETY_MENU = 'op-jobs:client:baun:OpenSocietyMenu',
    JOBS_FOOD_OPEN_SOCIETY_MENU = 'jobs:client:food:OpenSocietyMenu',
    JOBS_STONK_OPEN_SOCIETY_MENU = 'stonk:client:OpenSocietyMenu',
    JOBS_MDR_OPEN_SOCIETY_MENU = 'op-jobs:client:mdr:OpenSocietyMenu',
    JOBS_CHECK_CLOAKROOM_STORAGE = 'op-jobs:client:check-cloakroom-storage',
    JOB_OPEN_MENU = 'op-core:client:job:open-menu',
    JOB_DUTY_CHANGE = 'QBCore:Client:SetDuty',
    JOB_OPEN_CLOAKROOM = 'op-core:client:job::OpenCloakroomMenu',

    LSMC_DISEASE_APPLY_CURRENT_EFFECT = 'lsmc:maladie:client:ApplyCurrentDiseaseEffect',
    LSMC_DISEASE_APPLY_CONDITIONS = 'lsmc:maladie:client:ApplyConditions',
    LSMC_HALLOWEEN_HORRIFIC_LOLLIPOP = 'lsmc:halloween:client:horror-lollipop',
    LSMC_REVIVE = 'op-core:lsmc:client:revive',
    LSMC_CALL = 'op-core:lsmc:client:call',
    LSMC_REAMINATE = 'op-core:lsmc:reanimate',
    LSMC_APPLY_PATIENT_CLOTHING = 'op-core:client:lsmc:applyPatientClothing',
    LSMC_REMOVE_PATIENT_CLOTHING = 'op-core:client:lsmc:removePatientClothing',
    LSMC_APPLY_OUTFIT = 'op-core:client:lsmc:ApplyDutyClothing',

    MISSIVE_SHOW_ITEM = 'op-core:client:missive:show-item',
    NUI_SHOW_PANEL = 'op-core:client:nui:show-panel',

    NUI_HIDE_PANEL = 'op-core:client:nui:hide-panel',

    OBJECT_CREATE = 'op-core:client:object:create',
    OBJECT_DELETE = 'op-core:client:object:delete',

    OIL_REFILL_ESSENCE_STATION = 'op-core:client:oil:refill-essence-station',
    OIL_REFILL_KEROSENE_STATION = 'op-core:client:oil:refill-kerosene-station',
    OIL_UPDATE_STATION_PRICE = 'op-core:client:oil:update-station-price',

    STONK_DELIVER_LOCATION = 'stonk:client:DeliverLocation',
    STONK_APPLY_OUTFIT = 'op-core:client:stonk:ApplyDutyClothing',

    // Temp event which should be internally used by a service when only op core
    CHARACTER_SET_TEMPORARY_CLOTH = 'op-character:Client:ApplyTemporaryClothSet',

    PLAYER_HEALTH_DO_PUSH_UP = 'op-core:client:player:health:push-up',
    PLAYER_HEALTH_DO_YOGA = 'op-core:client:player:health:yoga',
    PLAYER_HEALTH_DO_SIT_UP = 'op-core:client:player:health:sit-up',
    PLAYER_HEALTH_DO_FREE_WEIGHT = 'op-core:client:player:health:free-weight',
    PLAYER_REQUEST_HEALTH_BOOK = 'op-core:client:player:health:request-health-book',
    PLAYER_UPDATE = 'op-core:client:player:update',
    PLAYER_UPDATE_WALK_STYLE = 'op-core:client:player:update-walk-style',
    PLAYER_REFRESH_WALK_STYLE = 'op-core:client:player:refresh-walk-style',
    PLAYER_SET_JOB_OUTFIT = 'op-core:client:player:set-job-outfit',

    PROGRESS_START = 'op-core:client:progress:start',

    REPOSITORY_SYNC_DATA = 'op-core:client:repository:sync-data',

    VEHICLE_CHECK_CONDITION = 'op-core:client:vehicle:check-condition',
    VEHICLE_CLOSE_TRUNK = 'op-core:client:vehicle:close-trunk',
    VEHICLE_DEALERSHIP_AUCTION_UPDATE = 'op-core:client:vehicle:dealership:auction:update',
    VEHICLE_DELETE = 'op-core:client:vehicle:delete',
    VEHICLE_FUEL_START = 'op-core:client:vehicle:fuel:start',
    VEHICLE_FUEL_STOP = 'op-core:client:vehicle:fuel:stop',
    VEHICLE_GET_CLOSEST = 'op-core:client:vehicle:get-closest',
    VEHICLE_SYNC_CONDITION = 'op-core:client:vehicle:sync-condition',
    VEHICLE_UPDATE_DIRT_LEVEL = 'op-core:client:vehicle:update-dirt-level',
    VEHICLE_GARAGE_HOUSE_OPEN_MENU = 'op-core:client:vehicle:garage:house:open-menu',
    VEHICLE_GARAGE_HOUSE_SHOW_PARKING = 'op-core:client:vehicle:garage:house:show-parking',
    VEHICLE_ROUTE_EJECTION = 'op-core:client:vehicle:route-ejection',
    VEHICLE_SET_TRUNK_STATE = 'op-core:client:vehicle:set-trunk-state',
    VEHICLE_RADAR_FLASHED = 'op-core:client:vehicle:radar:flashed',
    VEHICLE_RADAR_TRIGGER = 'op-core:client:radar:trigger',

    RADAR_TOGGLE_BLIP = 'op-core:client:radar:toggle-blip',

    ZEVENT_TOGGLE_TSHIRT = 'op-core:client:zevent:toggle-tshirt',

    WEAPON_USE_WEAPON = 'op-core:client:weapon:use-weapon',
    WEAPON_USE_AMMO = 'op-core:client:weapon:use-ammo',
    WEAPON_OPEN_GUNSMITH = 'op-core:client:weapon:open-gunsmith',
    WEAPON_EXPLOSION = 'op-core:client:weapon:explosion',

    MDR_USE_TICKET = 'op-core:client:mdr:use-ticket',
    HEIST_GUARD = 'op-core:client:heist:guard',
    HEIST_PLAY_ANIM = 'op-core:client:heist:play-anim',

    INJURY_DEATH = 'op-core:client:injury:death',

    TAKE_DOWN = 'op-core:client:player:animation:takedown',
    TAKE_DOWN_TARGET = 'op-core:client:player:animation:takedown-target',

    POLICE_OPEN_CLOAKROOM = 'op-core:client:police:OpenCloakroomMenu',
    POLICE_APPLY_OUTFIT = 'op-core:client:police:ApplyDutyClothing',
    POLICE_SET_PRISONER_CLOTHES = 'op-core:client:police:SetPrisonerClothes',
    POLICE_SETUP_ARMOR = 'op-core:client:police:setup-armor',
    POLICE_MOBILE_RADAR = 'op-core:client:police:mobile-radar',
    POLICE_BREATHANALYZER_TARGET = 'op-core:client:police:breathanalyzer-target',

    HELICO_ADD_LIGHT = 'op-core:client:police:add-light',
    HELICO_REMOVE_LIGHT = 'op-core:client:police:del-light',

    TALENT_TREE_DISABLE_CRIMI = 'op-core:client:talent:disable-crimi',
    TALENT_NEW_CRIMI = 'op-core:client:talent:new-crimi',

    PLAYER_TELEPORT = 'op-core:client:player:teleport',

    HUB_ENTER = 'op-core:client:hub:enter',
    HUB_REMOVE_STATUS = 'op-core:client:hub:remove-status',

    CRIMI_HOOD = 'op-core:server:crimi:hood',

    EASTER_EAR_TOGGLE = 'op-core:server:easter:toogle-ear',
}

export enum GameEvent {
    CEventNetworkPedDamage = 'CEventNetworkPedDamage',
    CEventNetworkVehicleUndrivable = 'CEventNetworkVehicleUndrivable',
    CEventVehicleCollision = 'CEventVehicleCollision',
    CEventExplosionHeard = 'CEventExplosionHeard',
    CEventGunShot = 'CEventGunShot',
}

export enum NuiEvent {
    AdminAutoPilot = 'op-core:client:admin:autopilot',
    AdminChangePlayer = 'op-core:client:admin:change-player',
    AdminCopyCoords = 'op-core:client:admin:copy-coords',
    AdminCreateZone = 'op-core:client:admin:create-zone',
    AdminGetJobs = 'op-core:client:admin:get-jobs',
    AdminGetPlayers = 'op-core:client:admin:get-players',
    AdminGetVehicles = 'op-core:client:admin:get-vehicles',
    AdminGiveLicence = 'op-core:client:admin:give-licence',
    AdminGiveMoney = 'op-core:client:admin:give-money',
    AdminGiveMarkedMoney = 'op-core:client:admin:give-marked-money',
    AdminMenuPlayerHandleDiseaseOption = 'op-core:client:admin:handle-disease-option',
    AdminMenuPlayerHandleEffectsOption = 'op-core:client:admin:handle-effects-option',
    AdminMenuPlayerHandleHealthOption = 'op-core:client:admin:handle-health-option',
    AdminMenuPlayerHandleMovementOption = 'op-core:client:admin:handle-movement-option',
    AdminMenuPlayerHandleResetSkin = 'op-core:client:admin:handle-reset-skin',
    AdminMenuPlayerHandleSearchPlayer = 'op-core:client:admin:handle-search-player',
    AdminMenuPlayerHandleSetAttribute = 'op-core:client:admin:handle-set-attribute',
    AdminMenuPlayerHandleTeleportOption = 'op-core:client:admin:handle-teleport-option',
    AdminMenuPlayerHandleVocalOption = 'op-core:client:admin:handle-vocal-option',
    AdminMenuPlayerHandleResetHalloween = 'op-core:client:admin:handle-reset-halloween',
    AdminMenuPlayerHandleOpenGunSmith = 'op-core:client:admin:handle-open-gunsmith',
    AdminMenuPlayerHandleInjuriesUpdate = 'op-core:client:admin:handle-injuries-update',
    AdminMenuPlayerHandleSetReputation = 'op-core:client:admin:set-reputation',
    AdminResetHealthData = 'op-core:client:admin:reset-health-data',
    AdminSetGodMode = 'op-core:client:admin:set-god-mode',
    AdminSetJob = 'op-core:client:admin:set-job',
    AdminMenuPlayerSpectate = 'op-core:client:admin:spectate',
    AdminSetVisible = 'op-core:client:admin:set-visible',
    AdminTeleportToWaypoint = 'op-core:client:admin:teleport-to-waypoint',
    AdminToggleDisplayOwners = 'op-core:client:admin:toggle-display-owners',
    AdminToggleDisplayPlayerNames = 'op-core:client:admin:toggle-display-player-names',
    AdminToggleDisplayPlayersOnMap = 'op-core:client:admin:toggle-display-players-on-map',
    AdminToggleDuty = 'op-core:client:admin:set-job-duty',
    AdminToggleNoStall = 'op-core:client:admin:set-no-stall',
    AdminToggleMoneyCase = 'op-core:client:admin:toggle-disable-money-case',
    AdminToggleNoClip = 'op-core:client:admin:toggle-noclip',
    AdminToggleShowCoordinates = 'op-core:client:admin:toggle-show-coordinates',
    AdminUpdateState = 'op-core:client:admin:update-state',
    AdminMenuGameMasterUncuff = 'op-core:client:admin:game-master:uncuff',
    AdminMenuVehicleSpawn = 'op-core:client:admin:vehicle:spawn',
    AdminMenuVehicleSeeCarPrice = 'op-core:client:admin:vehicle:see-car-price',
    AdminMenuVehicleChangeCarPrice = 'op-core:client:admin:vehicle:change-car-price',
    AdminMenuVehicleRepair = 'op-core:client:admin:vehicle:repair',
    AdminMenuVehicleClean = 'op-core:client:admin:vehicle:clean',
    AdminMenuVehicleRefill = 'op-core:client:admin:vehicle:refill',
    AdminMenuVehicleSave = 'op-core:client:admin:vehicle:save',
    AdminMenuVehicleSetFBIConfig = 'op-core:client:admin:vehicle:set-fbi-config',
    AdminMenuVehicleDelete = 'op-core:client:admin:vehicle:delete',
    AdminMenuSkinChangeAppearance = 'op-core:client:admin:skin:change-appearance',
    AdminMenuSkinChangeComponent = 'op-core:client:admin:skin:change-component',
    AdminMenuSkinChangeProp = 'op-core:client:admin:skin:change-prop',
    AdminMenuSkinCopy = 'op-core:client:admin:skin:copy',
    AdminMenuSkinLookAtDrawable = 'op-core:client:admin:skin:look-at-drawable',
    AdminMenuSkinSave = 'op-core:client:admin:skin:save',
    AdminMenuGameMasterCreateNewCharacter = 'op-core:client:admin:game-master:create-new-character',
    AdminMenuGameMasterSwitchCharacter = 'op-core:client:admin:game-master:switch-character',
    AdminSetAdminGPS = 'op-core:client:admin:gps',
    BaunDisplayBlip = 'op-core:client:job:baun:display-blip',
    CraftingDoCraft = 'op-core:nui:crafting:do-craft',
    CraftingDoSalvage = 'op-core:nui:crafting:do-salvage',
    CraftingCancel = 'op-core:nui:crafting:cancel',
    StonkDisplayBlip = 'op-core:client:job:stonk:display-blip',

    JobPlaceProps = 'op-core:client:job:place-props',

    LsmcPharmacyBuyItem = 'op-core:nui:job:lsmc:pharmacy:buy-item',

    BennysCancelOrder = 'op-core:client:job:bennys:cancel-order',
    BennysOrder = 'op-core:client:job:bennys:order',
    BennysGetOrders = 'op-core:client:job:bennys:get-orders',
    BennysUpgradeVehicle = 'op-core:nui:job:bennys:upgrade-vehicle',

    FfsDisplayBlip = 'op-core:client:job:ffs:display-blip',
    FoodDisplayBlip = 'op-core:client:job:food:display-blip',
    PlayerSetHealthBookField = 'op-core:client:player:health-book:set',
    InputSet = 'op-core:client:input:set',
    InputCancel = 'op-core:client:input:cancel',

    Loaded = 'op-core:nui:loaded',
    MenuClosed = 'menu_closed',
    JobBossShopBuyItem = 'op-core:nui:job:boss-shop:buy-item',
    OilAskStationPrice = 'op-core:nui:job:oil:ask-station-price',

    PanelClosed = 'op-core:nui:panel:closed',
    SetFocusInput = 'op-core:nui:set-focus-input',
    SetWardrobeOutfit = 'op-core:nui:set-wardrobe-outfit',

    ShopMaskBuy = 'op-core:client:shop:mask:buy',
    BossShopBuy = 'op-core:client:shop:boss:buy',
    ShopMaskPreview = 'op-core:client:shop:mask:preview',
    ShopMaskSelectCategory = 'op-core:client:shop:mask:select-category',

    TriggerServerEvent = 'op-core:nui:trigger-server-event',
    TriggerClientEvent = 'op-core:nui:trigger-client-event',

    VehicleAuctionBid = 'op-core:client:vehicle:auction:bid',

    VehicleCustomApply = 'op-core:nui:vehicle:custom:apply',
    VehicleCustomConfirmModification = 'op-core:nui:vehicle:custom:confirm-modification',

    VehicleDealershipShowVehicle = 'op-core:client:vehicle:dealership:show-vehicle',
    VehicleDealershipBuyVehicle = 'op-core:client:vehicle:dealership:buy-vehicle',

    VehicleSetEngine = 'op-core:nui:vehicle:set-engine',
    VehicleSetSpeedLimit = 'op-core:nui:vehicle:set-speed-limit',
    VehicleOpenLSCustom = 'op-core:nui:vehicle:open-ls-custom',
    VehicleSetDoorOpen = 'op-core:nui:vehicle:set-door-open',
    VehicleHandleRadio = 'op-core:nui:vehicle:handle-radio',

    VehicleGarageTakeOut = 'op-core:client:vehicle:garage:take-out',
    VehicleGarageSetName = 'op-core:client:vehicle:garage:set-name',
    VehicleGarageStore = 'op-core:client:vehicle:garage:store',
    VehicleGarageStoreTrailer = 'op-core:client:vehicle:garage:store-trailer',
    VehicleGarageShowPlaces = 'op-core:client:vehicle:garage:show-places',

    GunSmithRenameWeapon = 'op-core:client:job:gunsmith:rename-weapon',
    GunSmithPreviewTint = 'op-core:client:job:gunsmith:preview-tint',
    GunSmithPreviewAnimation = 'op-core:client:job:gunsmith:preview-animation',
    GunSmithPreviewAttachment = 'op-core:client:job:gunsmith:preview-attachment',
    GunSmithApplyConfiguration = 'op-core:client:job:gunsmith:apply-configuration',

    DrivingSchoolUpdateVehicleLimit = 'op-core:client:driving-school:update-vehicle-limit',
    DrivingSchoolCheckVehicleSlots = 'op-core:client:driving-school:check-vehicle-slots',

    HousingUpgradeApartment = 'op-core:client:housing:upgrade-apartment',

    ToggleRadar = 'op-core:client:radar:toggle',
    RedCall = 'op-core:client:police:red-call',

    IllegalShopBuyItem = 'op-core:client:hubshop:buy',

    TalentTreeBuy = 'op-core:client:talent-tree:buy',
    TalentTreeReset = 'op-core:client:talent-tree:reset',
    TalentSetCriminalMode = 'op-core:client:talent:set-criminal-mode',

    WardrobeElementSelect = 'op-core:client:wardrobe:element-select',
    WardrobeCustomSave = 'op-core:client:wardrobe:custom-save',

    EasterShopBuy = 'op-core:client:eatershop:buy',
}
