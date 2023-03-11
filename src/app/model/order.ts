import { Product } from "./product";

export class Order {
    fullName: string;
    amount: number;
    products: Product[];

    constructor() {
        this.fullName = '';
        this.amount = 0;
        this.products = [];
    }
}