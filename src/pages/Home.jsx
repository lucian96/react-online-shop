import React from 'react';
import Layout from '../components/Layout';
import HomeCategory from '../components/HomeCategory';
import products from '../utils/products.json';


class Home extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            categories: []
        }
    }

    componentDidMount(){

        const categoryNameArray = Object.keys(products);
        this.setState({categories: categoryNameArray});

    }

    render(){

        return (
                <Layout>
                    
                    <div className="container-fluid container-min-max-width px-5 py-3">
                        <div className="row">
                            {
                                this.state.categories.map( (category, index) => {
                                    return <HomeCategory 
                                        image={products[category].image}
                                        description={products[category].description}
                                        route={category}
                                        name={products[category].name}
                                        key={index}
                                    />
                                })
                            }
                        </div>
                    </div>
                    
                </Layout>
        );
    }
}

export default Home;