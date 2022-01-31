import { Content } from "./content-interface";

export class ContentList {
    private _items: Content[];

    constructor() {
        this._items = [];
    }

    get items(): Content[] {
        return this._items;
    }

    addItem(item: Content) {
        this._items[this._items.length] = item;
    }

    numOfItems() {
        return this._items.length;
    }

    printAt(index: number){
        return this._items[index];
    }
}