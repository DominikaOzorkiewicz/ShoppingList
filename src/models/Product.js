import {v4 as uuid} from 'uuid';

export class Product {
    id = uuid();
    name = '';
    quantity = '';
    unit = '';
    bought = false;


    constructor(name, quantity, unit) {
        this.name = name;
        this.quantity = quantity;
        this.unit = unit;
    }
}




