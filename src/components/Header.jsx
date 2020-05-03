import React from 'react';
import {ReactComponent as ShoppingCart} from '../assets/icons/shopping-cart.svg';
import {ReactComponent as FavoriteItem} from '../assets/icons/favorite.svg'
import logo from '../assets/images/logo.png';
import {Link} from 'react-router-dom';
import './Header.css';
import {connect} from 'react-redux';
import {signOutUser} from '../redux/actions/user';

function Header(props) {

    const {user, logout, numberOfProducts, numberOfFavorites} = props;

    return(
        <header className="border-bottom mb-3">
            <div className="header container-fluid container-min-max-width d-flex justify-content-between align-items-center px-5">
                <Link to='/'><img src={logo} alt='logo' /></Link>
                <div className="d-flex">
                    {
                        user
                            ? <div>
                                <p>Salut, {user.displayName}</p>
                                <button onClick={() => logout()}>Delogare</button>
                                </div>
                            : <Link to='/login'>Logare</Link>
                    }
                    <Link to='/favorites'><FavoriteItem className="ml-1"/></Link>
                    <Link to='/favorites' className="mr-1">{numberOfFavorites}</Link>
                    <ShoppingCart />
                    <Link to='/cart' className="ml-1">{numberOfProducts}</Link>
                </div>
            </div>
        </header>
    );
}

function mapStateToProps(state) {
    
    return {
        numberOfProducts: state.cart.products.length,
        user: state.user.data,
        numberOfFavorites: state.favorites.favorites.length
    }   
}

function mapDispatchToProps(dispatch) {
    return {
        logout: () => dispatch(signOutUser())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);