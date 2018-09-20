import React, { Component } from 'react';
import "./index.css";

import { Link } from 'react-router-dom'

import CreateProductForm from './CreateProductForm';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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
                        <TableRow onclick="window.location='#';">
                            <TableCell>
                                <img src={product.image_name} height="42" width="42" />
                            </TableCell>
                            <TableCell>
                                {product.product_name}
                            </TableCell>
                            <TableCell>
                                {product.product_price}
                            </TableCell>
                            <TableCell>
                                <Link to={`/detail/${product._id}`}>detail</Link>
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
                </Table>
                <CreateProductForm />
            </Paper>
        );
    }
}