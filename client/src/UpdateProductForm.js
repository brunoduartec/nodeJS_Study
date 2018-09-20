import React, { Component } from 'react';
import logo from './logo.svg';
import './index.css';

import Button from "@material-ui/core/Button";
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

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
        ValidatorForm.addValidationRule('isPriceValid', (value) => {
            if (value < 0) {
                return false;
            }
            return true;
        });
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
                <ValidatorForm
                    ref="form"
                    onSubmit={this.handleSubmit}
                >
                    <h2>Update Item</h2>
                    <table>
                        <tr>
                            <td><span class="text">Name:</span></td>
                            <td>
                                <TextValidator
                                    name="product_name"
                                    value={this.state.product_name}
                                    hintText="Name"
                                    floatingLabelText="Name"
                                    onChange={this.handleChange}
                                    errorMessages={['this field is required']}
                                    variant="filled"
                                    floatingLabelFixed
                                    validators={['required']}
                                />

                            </td>
                        </tr>
                        <tr>
                            <td><span class="text">Price:</span></td>
                            <td>
                                <TextValidator
                                    name="product_price"
                                    value={this.state.product_price}
                                    hintText="Price"
                                    floatingLabelText="Price"
                                    onChange={this.handleChange}
                                    errorMessages={['this field must be positive']}
                                    variant="filled"
                                    floatingLabelFixed
                                    validators={['isPriceValid']}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td><span class="text">Image:</span></td>
                            <td>

                                <TextValidator
                                    name="image_name"
                                    value={this.state.image_name}
                                    hintText="Image Name"
                                    floatingLabelText="Image Name"
                                    onChange={this.handleChange}
                                    errorMessages={['this field is required']}
                                    variant="filled"
                                    floatingLabelFixed
                                    validators={['required']}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td><span class="text">Description:</span></td>
                            <td>
                                <TextValidator
                                    name="product_description"
                                    value={this.state.product_description}
                                    hintText="Description"
                                    floatingLabelText="Description"
                                    onChange={this.handleChange}
                                    errorMessages={['this field is required']}
                                    variant="filled"
                                    floatingLabelFixed
                                    validators={['required']}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Button
                                    variant="contained" color="primary"
                                    raised
                                    type="submit"
                                    disabled={this.state.submitted}
                                >
                                    {
                                        (this.state.submitted && 'Your form is submitted!')
                                        || (!this.state.submitted && 'Submit')
                                    }
                                </Button>

                            </td>
                        </tr>
                    </table>
                </ValidatorForm>
            </div>
        );
    }

}

UpdateProductForm.defaultProps = {
    action: '/product/',
    method: 'put'
};