import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    let i = 1;
    let total = 0;
    for (const product of cart) {
        total = total + product.price
    }
    return (
        <div className='bg-accent h-full'>
            <div className='sticky top-0'>
                <h2 className='text-2xl font-bold py-3 text-center'>Cart</h2>
                < p className='text-lg font-bold py-3 text-center' > Selected Items {cart.length}</p >
                <div className='mx-2'>
                    <div className="overflow-x-auto">
                        <table className="table table-zebra w-full">

                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Price</th>

                                </tr>
                            </thead>
                            <tbody>
                                {cart.map(cart =>
                                    <tr>
                                        <th>{i++}</th>
                                        <td>{cart.title}</td>

                                        <td>${cart.price}</td>
                                    </tr>)}

                                <tr>
                                    <th></th>
                                    <td>Total</td>

                                    <td>${total}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div >
        </div>

    );
};

export default Cart;