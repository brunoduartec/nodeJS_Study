import React, { Component } from 'react';
import "./index.css";
import UpdateProductForm from './UpdateProductForm';

export default class ProductDetail extends Component {
    constructor() {
        super();
        this.state = {
            response: [],
            product: [],
        };
    }

    componentDidMount() {
        fetch(`/product/` + this.props.match.params.id)
            .then(results => {
                return results.json();
            }).then(data => {
                let response = data.map((product) => {
                    this.setState({ product: product });
                    return (
                        <tr>
                            <td>
                                <img src={product.image_name} height="42" width="42" />
                            </td>
                            <td>
                                {product.product_name}
                            </td>
                            <td>
                                {product.product_price}
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
                <UpdateProductForm
                    id={this.props.match.params.id}
                    image_name={this.state.product.image_name}
                />
            </table>
        );
    }
}