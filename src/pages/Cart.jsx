import React from 'react';
import Layout from '../components/Layout';
import {connect} from 'react-redux';
import {removeFromCart} from '../redux/actions/cart';

function Cart(props) {

    const {cartProducts, removeFromCartInjected} = props;

    return (
            <Layout>
                <div className="container-fluid container-min-max-width">
                    {
                        cartProducts.map((cartProduct) => {
                            return (
                                <div className="d-flex">
                                    <p className="w-50">{cartProduct.name}</p>
                                    <p className="w-50">{cartProduct.price} {cartProduct.currency}</p>
                                    <p className="w-50">{cartProduct.quantity}</p>
                                    <button onClick={() => removeFromCartInjected({product:cartProduct})}>X</button>
                                </div>
                            )
                        })
                    }
                </div>
            </Layout>
    );
}

function mapDispatchToProps(dispatch){
    return {
        removeFromCartInjected: (payload) => dispatch(removeFromCart(payload)),
        
    }
}

function mapStateToProps(state){
    return {
        cartProducts: state.cart.products
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
