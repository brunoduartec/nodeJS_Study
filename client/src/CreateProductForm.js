import React, { Component } from 'react';
import logo from './logo.svg';
import './index.css';


const initialstate = {
    image_name: '',
    product_name: '',
    product_price: '',
    product_description: '',
};


export default class CreateProductForm extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = initialstate;
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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

        fetch(this.props.action, {
            method: this.props.method,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        this.setState({
            image_name: '',
            product_name: '',
            product_price: '',
            product_description: '',
        });
    }

    render() {
        return (
            <div className="CreateProductForm">
                <form
                    id="main-login"
                    action={this.props.action}
                    method={this.props.method}
                    onSubmit={this.handleSubmit}>
                    <h2>Create Item</h2>
                    <table>
                        <tr>
                            <td><span class="text">Name:</span></td>
                            <td><input type="text" name="product_name" onChange={this.handleChange} /></td>
                        </tr>
                        <tr>
                            <td><span class="text">Price:</span></td>
                            <td><input type="text" name="product_price" onChange={this.handleChange} /></td>
                        </tr>
                        <tr>
                            <td><span class="text">Image:</span></td>
                            <td><input type="text" name="image_name" onChange={this.handleChange} /></td>
                        </tr>
                        <tr>
                            <td><span class="text">Description:</span></td>
                            <td><input type="text" name="product_description" onChange={this.handleChange} /></td>
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

CreateProductForm.defaultProps = {
    action: '/products',
    method: 'post'
};