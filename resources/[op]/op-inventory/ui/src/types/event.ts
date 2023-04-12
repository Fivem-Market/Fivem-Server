import { opInventoryModel } from './inventory';

export type NuiEventPlayerInventory = {
    action: string;
    playerMoney?: number;
    playerInventory?: opInventoryModel
    targetInventory?: opInventoryModel
    playerShortcuts?: any
    keys?: any;
}
