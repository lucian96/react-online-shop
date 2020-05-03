import React, { Component } from 'react';
import './BaseListSidebar.css';
class BaseListSidebar extends Component {

    constructor(props){
        super(props);
        this.state = {};
    }

    handleFilterInput(event){
        this.props.filteredList(event.target.value);
    }

    render() {
        return (
                <div className="col-12 col-md-3">
                    <p>Filtrează după preţ:</p>
                    <div className="filters-container">
                        <div className="filter mr-2">
                            <input className="" type="radio" id="filter1" name="price" value="100" onClick={(event) => this.handleFilterInput(event)}/>
                            <label htmlFor="filter1">  &lt; 100 LEI</label>
                        </div>
                        <div className="filter mr-2">
                            <input className="" type="radio" id="filter2" name="price" value="100-200" onClick={(event) => this.handleFilterInput(event)}/>
                            <label htmlFor="filter2">100 - 200 LEI</label>
                        </div>
                        <div className="filter mr-2">
                            <input className="" type="radio" id="filter3" name="price" value="200" onClick={(event) => this.handleFilterInput(event)}/>
                            <label htmlFor="filter3"> > 200 LEI</label>
                        </div>
                        <div className="filter mr-2">
                            <input className="" type="radio" id="filter4" name="price" value="all" onClick={(event) => this.handleFilterInput(event)}/>
                            <label htmlFor="filter1">TOATE</label>
                        </div>                            
                    </div>
                </div>
        )
    }
}

export default BaseListSidebar;



