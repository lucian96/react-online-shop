import React from 'react'
import Layout from '../components/Layout';
import FavoriteItem from '../components/FavoriteItem';
import {connect} from 'react-redux';

function Favorites(props) {
    const { favoriteItems } = props;
    return (
        <Layout>
            <div className="container-fluid container-min-max-width">
                <div className="category-page col-12 col-md-9">
                    <div className="row">
                {
                    favoriteItems.map((item) => {
                        return(
                                
                            <FavoriteItem
                                id={item.id}
                                name={item.name} 
                                price={item.price}
                                currency={item.currency}
                                image={item.image}
                            />
                        )
                    })
                }
                    </div>
                </div>
            </div>

        </Layout>
    )
}

function mapStateToProps(state){
    return {
        favoriteItems: state.favorites.favorites
    }
}

export default connect(mapStateToProps)(Favorites);
