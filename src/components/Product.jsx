import React from "react";
import {useState} from 'react';

function Product(){

const [product, setProduct] = useState({
    name:  "",
    price: "",
    quantity:  0
});

    return(
        <div className="container">
        <h3 className="p-3 text-center">Products</h3>
        <table className="table table-striped table-bordered">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                </tr>
            </thead>
            <tbody>
                {
                    product && product.map(products =>
                        <tr>
                          <td>{products.name}</td>
                          <td>{products.price}</td>
                          <td>{products.quantity}</td>
                        </tr>

                    )
                }
            </tbody>

        </table>
        </div>
    );
}

export default Product;