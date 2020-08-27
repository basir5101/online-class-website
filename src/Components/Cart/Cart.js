import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const cart = props.cart
    
    // const totalCost = cart.reduce((total, course) => total + course.price, 0)
    let totalCost = 0;
    for (let i = 0; i < cart.length; i++) {
        const course = cart[i];
        const coursePrice = course.price;
             totalCost = totalCost + coursePrice 
    }
    console.log(cart)
    return (
        <div>
            <table class="table table-dark table-striped table-bordered">
                <thead className = 'bg-info'>
                    <tr>
                    <th scope="col">Name</th>
                    <th scope="col">price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cart.map(cr => <tr>
                            <td>{cr.name}</td>
                            <td>${cr.price}</td>
                            </tr> )
                    }
                    <tr className = 'bg-warning'>
                        <td>Total Cost</td>
                        <td>${totalCost}</td>
                    </tr>                  
                </tbody>
            </table> 
            <button className = 'btn btn-success'>Make Payment</button>    
        </div>
        
    );
};

export default Cart;