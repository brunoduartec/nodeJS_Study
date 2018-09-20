import React, { Component } from 'react';
import "./index.css";

import { Link } from 'react-router-dom'

export default class ProductList extends Component {
    constructor() {
        super();
        this.state = {
            response: [],
        };
    }

    componentDidMount() {
        fetch(`/products`)
            .then(results => {
                return results.json();
            }).then(data => {
                let response = data.map((product) => {
                    return (
                        <tr onclick="window.location='#';">
                            <td>
                                <img src={product.image_name} height="42" width="42" />
                            </td>
                            <td>
                                {product.product_name}
                            </td>
                            <td>
                                {product.product_price}
                            </td>
                            <td>
                                <Link to={`/detail/${product._id}`}>detail</Link>
                            </td>
                        </tr>
                    )
                })
                this.setState({ response: response });
            })
    }

    render() {
        return (
            <table>
                <tr>
                    <td>IMAGE</td>
                    <td>NAME</td>
                    <td>PRICE</td>
                </tr>
                {this.state.response}
            </table>
        );
    }
}