export class OrderInfo {
    id : number;
    fullname : string;
    totalPrice : number;
    ccNum : string;

    constructor() {
        this.id = 1;
        this.fullname = '';
        this.totalPrice = 0;
        this.ccNum = '';
    }
}