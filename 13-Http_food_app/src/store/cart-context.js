import React from "react";

const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: (item) => {}, //methods here for better completion only
    removeItem: (id) => {},
    clearCart: () => {}
});

export default CartContext;