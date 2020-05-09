import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {addToCart} from '../redux/actions/cart';
import {addToFavorites, removeFromFavorites} from '../redux/actions/favorites';
import {ReactComponent as FavoriteItem} from '../assets/icons/favorite.svg';
import {ReactComponent as FavoriteItemFilled} from '../assets/icons/favorite-filled.svg';
import './CategoryItem.css';

function CategoryItem(props) {
        
        const {id, name, price, currency, image, added, addToCartInjected, addToFavorite, removeFromFavorites} = props;

        return (
            
            <div className="product-item d-flex flex-column align-items-center justify-content-center col-12 col-md-4 mb-3">
                <Link to={`/product/${id}`} className="d-flex flex-column align-items-center">
                    <div className="div-image">
                        <img src={image} alt={name} className="image"></img> 
                        {
                            added === true
                            ? <FavoriteItemFilled className="svg"
                            onClick={
                                () => {
                                    removeFromFavorites({
                                        favorite: {
                                            id,
                                            name,
                                            price,
                                            currency,
                                            image,
                                        }
                                    })
                                }}/>
                            : <FavoriteItem className="svg"
                            onClick={
                                () => {
                                    addToFavorite({
                                        favorite: {
                                            id,
                                            name,
                                            price,
                                            currency,
                                            image,
                                        }
                                    })
                                }}/>
                    }
                    </div>
                    <p>{name}</p>
                    <p>{price} {currency}</p>
                </Link>  
                   
                <input  type="submit" 
                        onClick={() => {
                            addToCartInjected({
                                product: {
                                    id,
                                    name,
                                    price,
                                    currency,
                                    image
                                }
                            })                                        
                        }} 
                        className="btn btn-outline-dark" 
                        value="Adaugă în coş">
                </input>
                
            </div>
        )

    }    
            
function mapDispatchToProps(dispatch){
    return {
        addToCartInjected: (payload) => dispatch(addToCart(payload)),
        addToFavorite: (payload) => dispatch(addToFavorites(payload)),
        removeFromFavorites: (payload) => dispatch(removeFromFavorites(payload))
    }
}
function mapStateToProps(state){
    return {
        favorites: state.favorites.favorites
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem);
            
            