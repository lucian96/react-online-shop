import {ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES} from './favoritesConstants';

const initialState = {
    favorites: []
}

export function favoritesReducer(state=initialState, action){
    switch (action.type) {
        case ADD_TO_FAVORITES:
            let prodAdded = false;
            const updateFavorites = state.favorites.map((favorite) => {
                if (favorite.id === action.payload.favorite.id){
                    prodAdded = true;
                    return {
                        ...favorite,
                        added: true
                    }
                } else {
                    return favorite

                }
            })
            if(!prodAdded) {
                return {
                    ...state,
                    favorites: [
                        ...state.favorites,
                        {
                            ...action.payload.favorite,
                            added: true
                        }
                    ]
                }
            } else{
                
                return {
                    ...state,
                    favorites: updateFavorites
                }
            }
            
        case REMOVE_FROM_FAVORITES:            
            const removeFavorites = state.favorites.filter(favorite => {
                return favorite.id !== action.payload.favorite.id
            })
            return {
                ...state,
                favorites: removeFavorites,
                
            }
            
        default:
            return state;
    }
}
