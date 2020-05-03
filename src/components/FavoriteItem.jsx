import React from 'react';
import {connect} from 'react-redux';
import {addToCart} from '../redux/actions/cart';
import {addToFavorites, removeFromFavorites} from '../redux/actions/favorites';
import {ReactComponent as Clear} from '../assets/icons/clear.svg';
import './CategoryItem.css';

function FavoriteItem(props) {

        const {id, name, price, currency, image, addToCartInjected, removeFromFavorites} = props; 

        
        return (
            
            <div className="product-item d-flex flex-column align-items-center justify-content-center col-12 col-md-4 mb-3">
                <div className="div-image">
                    <img src={image} alt={name} className="image"></img> 
                    <Clear  className="svg"
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
                </div>
                <p>{name}</p>
                <p>{price} {currency}</p>      
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
export default connect(mapStateToProps, mapDispatchToProps)(FavoriteItem);
            
            