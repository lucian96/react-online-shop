import React, { Component } from 'react';
import {connect} from 'react-redux';
import Layout from '../components/Layout';
import products from '../utils/products.json';
import {addToCart} from '../redux/actions/cart';
import './Product.css';

class Product extends Component {
    constructor(props){
        super(props);
        this.state = {
            product: {}
        }
    }
    componentDidMount(){
        const {match} = this.props;
        const productIdUrl = match.params.productId;
        //console.log(productId);
        const categoryValues = Object.values(products);

        let currentProduct;
        categoryValues.forEach((category) => {
            const findResult = category.items.find((item) => {
                return Number(productIdUrl) === item.id
            })
            if (findResult !== undefined){
                currentProduct = findResult;
            }
        })
        this.setState({product: currentProduct});

    }
    render() {
        console.log(this.state);
        const {product} = this.state;
        //console.log(this.props);
        return (
            <Layout>
                <div className="product-page container-fluid container-min-max-width">
                    <h1 className="my-5 h2">{product.name}</h1>
                    <div className="product-info d-flex">
                        <div className="image-wrapper d-flex mr-5">
                            <img src={product.image} alt={product.name}></img>
                        </div>
                        <div className="product-details">
                            <p className="h3 text-danger">{product.price} {product.currency}</p>
                            <button 
                                className="btn btn-dark mb-4 font-weight-bold"
                                onClick={() => this.props.addToCart({
                                    product: {
                                        id: product.id,
                                        name: product.name,
                                        price: product.price,
                                        currency: product.currency,
                                        image: product.image
                                    }
                                 })}>
                                Adaugă în coş
                            </button>
                            <p><span className="font-weight-bold">Mărime</span>: {product.size}</p>
                            <p><span className="font-weight-bold">Culoare</span>: {product.colour}</p>
                            <p><span className="font-weight-bold">Material</span>: {product.material}</p>
                            <p><span className="font-weight-bold">Brand</span>: {product.brand}</p>
                            <p className="font-weight-bold mb-1">Descriere:</p>
                            <p>{product.description}</p>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}

function mapDispatchToProps(dispatch){
    return {
        addToCart: (payload) => dispatch(addToCart(payload))
    }
}

export default connect(null, mapDispatchToProps)(Product);
