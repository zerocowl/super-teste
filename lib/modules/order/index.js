import { Morning, Night } from '../index'
export default class Order {
    constructor(input) {
        this._input = input.split(',')
    }

    process() {
        this._timeOfDay = this._input[0].toLowerCase()
        this._type = Order.getDishType(this._timeOfDay)
        this._dishes = this._type.options

        let order = {
            error: false,
            entree: { name: null, quantity: 0 },
            side: { name: null, quantity: 0 },
            drink: { name: null, quantity: 0 },
            dessert: { name: null, quantity: 0 }
        };

        if (this._input.length > 0 && this._dishes) {
            this._input.shift();

            for (let i = 0; i < this._input.length; i++) {
                const dishType = this._input[i].trim();

                if (dishType == "1") {
                    if (order.entree.quantity > 0) {
                        order.error = true;
                        break;
                    } else {
                        order.entree.name = this._dishes[dishType - 1].name;
                        order.entree.quantity++;
                    }
                } else if (dishType == "2") {
                    if (order.side.quantity > 0) {
                        if (this._timeOfDay == "night") {
                            order.side.quantity++;
                        } else {
                            order.error = true;
                            break;
                        }
                    } else {
                        order.side.name = this._dishes[dishType - 1].name;
                        order.side.quantity++;
                    }
                } else if (dishType == "3") {
                    if (order.drink.quantity > 0) {
                        if (this._timeOfDay == "morning") {
                            order.drink.quantity++;
                        } else {
                            order.error = true;
                            break;
                        }
                    } else {
                        order.drink.name = this._dishes[dishType - 1].name;
                        order.drink.quantity++;
                    }
                } else if (dishType == "4") {
                    if (this._timeOfDay == "morning" || order.dessert.quantity > 0) {
                        order.error = true;
                        break;
                    } else {
                        order.dessert.name = this._dishes[dishType - 1].name;
                        order.dessert.quantity++;
                    }
                } else {
                    order.error = true;
                    break;
                }
            }
        } else {
            order.error = true;
        }

        return Order.formatOrder(order);
    }

    static getDishType(dish) {
        return dish === 'morning' ?
            new Morning : dish === 'night' ? new Night : null;
    }
    static formatOrder(order) {
        let output = "";

        output = order.entree.quantity > 0 ? `${order.entree.name}, ` : output;

        if (order.side.quantity > 0) {
            if (order.side.quantity > 1) {
                output += `${order.side.name}(x${order.side.quantity}), `;
            } else {
                output += `${order.side.name}, `
            }
        }

        if (order.drink.quantity > 0) {
            if (order.drink.quantity > 1) {
                output += `${order.drink.name}(x${order.drink.quantity}), `;
            } else {
                output += `${order.drink.name}, `
            }
        }

        output = order.dessert.quantity > 0 ? output + order.dessert.name : output;

        if (order.error) {
            output += "error";
        }

        if (output.charAt(output.length - 2) == ',') {
            output = output.substr(0, output.length - 2);
        }

        return output;
    }
}
