import React, { Component } from 'react';
import logo from './logo.svg';
import './index.css';

export default class UpdateProductForm extends Component {
    constructor(props, context) {
        super(props, context);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        const initialstate = {
            image_name: '',
            product_name: '',
            product_price: '',
            product_description: '',
        };
        this.state = initialstate
    }

    componentDidMount() {
        fetch(`/product/` + this.props.id, {
            method: "get",
        })
            .then(results => {
                return results.json();
            }).then(data => {
                let response = data.map((product) => {
                    const initialstate = {
                        image_name: product.image_name || '',
                        product_name: product.product_name || '',
                        product_price: product.product_price || '',
                        product_description: product.product_description || '',
                    };
                    this.setState(initialstate);
                });
            })
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        const data = {
            image_name: this.state.image_name,
            product_name: this.state.product_name,
            product_price: this.state.product_price,
            product_description: this.state.product_description,
        };

        fetch(this.props.action + this.props.id, {
            method: this.props.method,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
    }

    render() {

        return (
            <div className="UpdateProductForm">
                <form
                    id="main-login"
                    action={this.props.action}
                    method={this.props.method}
                    onSubmit={this.handleSubmit}>
                    <h2>Update Item</h2>
                    <table>
                        <tr>
                            <td><span class="text">Name:</span></td>
                            <td><input type="text" name="product_name" value={this.state.product_name} onChange={this.handleChange} /> </td>
                        </tr>
                        <tr>
                            <td><span class="text">Price:</span></td>
                            <td><input type="text" name="product_price" value={this.state.product_price} onChange={this.handleChange} /> </td>
                        </tr>
                        <tr>
                            <td><span class="text">Image:</span></td>
                            <td><input type="text" name="image_name" value={this.state.image_name} onChange={this.handleChange} /> </td>
                        </tr>
                        <tr>
                            <td><span class="text">Description:</span></td>
                            <td><input type="text" name="product_description" value={this.state.product_description} onChange={this.handleChange} /> </td>
                        </tr>
                        <tr>
                            <td>
                                <button>Submit</button>
                            </td>
                        </tr>
                    </table>
                </form>
            </div>
        );
    }

}

UpdateProductForm.defaultProps = {
    action: '/product/',
    method: 'put'
};