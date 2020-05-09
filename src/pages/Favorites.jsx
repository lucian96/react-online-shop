import React from 'react'
import Layout from '../components/Layout';
import FavoriteItem from '../components/FavoriteItem';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

function Favorites(props) {
    const { favoriteItems } = props;
    return (
        <Layout>
            <div className="container-fluid container-min-max-width">
                <div className="category-page col-12 col-md-9">
                    <div className="row">
                {
                    favoriteItems.map((item, index) => {
                        return(
                            favoriteItems.length   
                            ? <FavoriteItem
                                id={item.id}
                                name={item.name} 
                                price={item.price}
                                currency={item.currency}
                                image={item.image}
                                key={index}
                            />
                            : <div className="d-flex flex-column align-items-center">
                            <p className="h3">Nu ai produse în coș!</p>
                            <Link to="/"><button className="btn btn-outline-dark">Inapoi la home</button></Link>
                            </div>
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
