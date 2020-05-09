import React from 'react';
import CategoryItem from './CategoryItem';
import {connect} from 'react-redux';


function CategoryList(props) {

    const {favorites} = props;

    return (
        <div className="category-page col-12 col-md-9">
            <div className="row">
                {
                    props.items.map((item, index) => {
                        return (
                                <CategoryItem
                                    id={item.id}
                                    name={item.name} 
                                    price={item.price}
                                    currency={item.currency}
                                    image={item.image}
                                    added={
                                        favorites.some(favorite => {
                                            if(item.id === favorite.id){
                                                return favorite.added
                                            }
                                            else {
                                                return null;
                                            }
                                        })
                                    }
                                    key={index}
                                />
                        )
                    })
                }
            </div>
        </div>
    )
}

function mapStateToProps(state){
    return {
        favorites: state.favorites.favorites
    }
}

export default connect(mapStateToProps)(CategoryList);
