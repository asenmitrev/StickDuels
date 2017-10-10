export class Item {
    type : String;
    slot : ItemSlot;
    sexyness : number;
    swag : number;
    seriousElegance : number;
    primaryAttribute : ItemAttribute;
    attachments : {};
}

export enum ItemSlot {
    head = "head",
    vest = "vest",
    pants = "pants",
    face = "face",
    weapon = "weapon",
    boots = "boots"
}

export enum ItemAttribute {
    sexyness = "sexyness",
    swag = "swag",
    seriousElegance = "seriuousElegance"
}