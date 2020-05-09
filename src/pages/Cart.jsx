import React from 'react';
import Layout from '../components/Layout/Layout';
import {connect} from 'react-redux';
import {removeFromCart} from '../redux/cart/cartActions';
import {Link} from 'react-router-dom';
import {ReactComponent as Clear} from '../assets/icons/clear.svg';
import './Cart.css';

function Cart(props) {

    const {cartProducts, removeFromCartInjected} = props;

    const totalSum = (products) => {
        return products.reduce((acc, product) => {
            return acc + product.quantity * product.price;
        }, 0)
    }

    return (
            <Layout>
                <div className="container-fluid container-min-max-width d-flex flex-column justify-content-center align-items-center">
                    {
                        cartProducts.length
                        ? <div className="w-100">
                            <div className="d-flex justify-content-between text-center h4 text-bold">
                            <p className="w-25">Produs</p>
                            <p className="w-25">Pret</p>
                            <p className="w-25">Cantitate</p>
                            <p className="w-25">Total</p>
                         </div>
                         {
                          cartProducts.map(cartProduct => {
                                return <div className="d-flex flex-row justify-content-between align-items-center text-center" key={cartProduct.id}>
                                            <div className="d-flex flex-column justify-content-center align-items-center w-25">
                                                <img className="cart-image" src={cartProduct.image} alt={cartProduct.name}></img>
                                                <p className="">{cartProduct.name}</p>
                                            </div>
                                            <p className="w-25">{cartProduct.price} {cartProduct.currency}</p>
                                            <p className="w-25">{cartProduct.quantity}</p>
                                            <div className="w-25 d-flex justify-content-center">
                                                <p>{cartProduct.price*cartProduct.quantity} {cartProduct.currency}</p>
                                                <div onClick={() => removeFromCartInjected({product:cartProduct})}>
                                                    <Clear />
                                                </div>
                                            </div>
                                    </div>
                            })
                          }
                            <div className="d-flex justify-content-end border-top">
                                <div className="w-25 d-flex align-items-center justify-content-center">
                                    <p className="my-4 text-center font-weight-bold">Total de plată: </p>
                                </div>
                                <div className="w-25">
                                    <p className="my-4 text-center">
                                        { totalSum(cartProducts) } { cartProducts[0].currency }
                                    </p>
                                </div>
                            </div>
                            </div>
                        : <div className="d-flex flex-column align-items-center">
                            <p className="h3">Nu ai produse în coș!</p>
                            <Link to="/"><button className="btn btn-outline-dark">Inapoi la home</button></Link>
                         </div>
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
