import React from 'react';

const Cart = (props) => {
    const cart = props.cart
    
    // const totalCost = cart.reduce((total, course) => total + course.price, 0)
    let totalCost = 0;
    for (let i = 0; i < cart.length; i++) {
        const course = cart[i];
        const coursePrice = course.price;
             totalCost = totalCost + coursePrice 
    }
    return (
        <div>
            <h4>Order summery</h4> 
            <p>Total Cost: {totalCost}</p>        
        </div>
    );
};

export default Cart;