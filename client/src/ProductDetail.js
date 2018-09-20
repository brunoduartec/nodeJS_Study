import React, { Component } from 'react';
import "./App.css";
import UpdateProductForm from './UpdateProductForm';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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
                        <TableRow>
                            <TableCell>
                                <img src={product.image_name} height="42" width="42" />
                            </TableCell>
                            <TableCell>
                                {product.product_name}
                            </TableCell>
                            <TableCell>
                                {product.product_price}
                            </TableCell>
                        </TableRow>
                    )
                })
                this.setState({ response: response });
            })
    }

    render() {
        return (
            <Paper>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>IMAGE</TableCell>
                            <TableCell>NAME</TableCell>
                            <TableCell>PRICE</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.response}
                    </TableBody>
                    <UpdateProductForm
                        id={this.props.match.params.id}
                        image_name={this.state.product.image_name}
                    />
                </Table>
            </Paper>
        );
    }
}