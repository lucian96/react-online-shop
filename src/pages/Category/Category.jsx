import React from 'react';
import Layout from '../../components/Layout/Layout';
import CategoryList from '../../components/Category/CategoryList';
import BaseListSidebar from '../../components/BaseListSidebar/BaseListSidebar';
import products from '../../utils/products.json';
import './Category.css';

class Category extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            category: {},
            categoryAux: {}
        }
    }

    componentDidMount(){

        const {match} = this.props;
        const categoryName = match.params.categoryName;

        this.setState({category: products[categoryName]});
        this.setState({categoryAux: products[categoryName]});
    }

    filteredList(filterPrice){

        if (filterPrice === '100') {
            const items = {items: this.state.categoryAux.items.filter((item) => item.price <= filterPrice)};
            this.setState({category: items})
        }
        if (filterPrice === '100-200') {
            const items = {items: this.state.categoryAux.items.filter((item) => item.price >= 100 && item.price <= 200)}
            this.setState({category: items})
        }
        if (filterPrice === '200') {
            const items = {items: this.state.categoryAux.items.filter((item) => item.price >= 200)}
            this.setState({category: items})
        }
        if (filterPrice === 'all') {
            const items = {items: this.state.categoryAux.items.filter((item) => item.price > 0)}
            this.setState({category: items})
        }

        
    }

    render() {
        return (
            <Layout>
                <div className="container-fluid container-min-max-width">
                    <h2>{this.state.category.name}</h2>
                    <div className="row">
                        <BaseListSidebar filteredList={(filterPrice) => this.filteredList(filterPrice)}/>
                        
                            {
                                this.state.category.items
                                ? <CategoryList items={this.state.category.items}/>
                                : null
                            }
                    </div>
                </div>
            </Layout>
        )
    }
}

export default Category;
