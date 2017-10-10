import { InventoryEquippedItems } from './inventory-equipped-items';
import { Item } from './item';
export class Inventory {
    owner: string;
    allItems : [Item];
    equippedItems : InventoryEquippedItems;

    constructor(owner: string){
        this.owner = owner;
    }
}