import '../public/stylesheets/style.scss';

var React = require('react');

class CreateItem extends React.Component {
    render() {
        return < div >
            <p>Create Product</p>
            <table>
                <tr border="1">
                    <td>Name</td>
                    <td> <input ref="product_name"></input></td>
                </tr>
                <tr border="1">
                    <td>Price</td>
                    <td> <input ref="product_price"></input></td>
                </tr>
                <tr border="1">
                    <td>Image</td>
                    <td> <input ref="image_name"></input></td>
                </tr>


            </table>
        </div >;
    }
}


class App extends React.Component {
    render() {
        const listItems = this.props.products.map((d) =>

            <tr>
                <td border="1">
                    <img src={d.image_name}></img>
                </td>
                <td>
                    {d.product_name}
                </td>
                <td>
                    {d.product_price}
                </td>
            </tr>
        );
        return <div>
            <table>
                <tr>
                    <td>IMAGE</td>
                    <td>NAME</td>
                    <td>PRICE</td>
                </tr>
                {listItems}
            </table>
            <CreateItem />
        </div>;
    }
}

module.exports = App;