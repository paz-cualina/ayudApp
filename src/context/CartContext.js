import { createContext } from "react";

export const CartContext = createContext([]);

export function sumQuantity(quantity) {
    return 100 * quantity.first + 200 * quantity.second + 300 * quantity.third;
}

export function getTotalQuantity(quantity) {
    return quantity.first + quantity.second + quantity.third;
}

export function setQuantity(first, second, third) {
    return {
        first: first,
        second: second,
        third: third
    };
}