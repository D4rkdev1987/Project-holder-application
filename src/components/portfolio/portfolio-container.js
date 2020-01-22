import React, { Component } from 'react'
import axios from 'axios';

import PortfolioItem from './portfolio-item';

export default class PortfolioContainer extends Component {
    constructor() {
        super();
        
        this.state = {  //initial state here
            pageTitle: "Welcome to my portfolio", //pageTitle is a key
            isLoading: false, 
            data: []    
        };

        this.handleFilter = this.handleFilter.bind(this); //if there is an event,  you must bind your custom function
    }

    handleFilter(filter) {   //to filter the data
        if (filter === "CLEAR_FILTERS") {
            this.getPortfolioItems()
        } else
        {
            this.getPortfolioItems(filter);
        }
    }

    getPortfolioItems(filter = null) {
        axios.get('https://benjaminnicklaus.devcamp.space/portfolio/portfolio_items')
          .then(response => {
              if(filter) {
                this.setState({
                    data: response.data.portfolio_items.filter(item => {
                        return item.category === filter;
                    })    
                });

              } else {
                this.setState({
                    data: response.data.portfolio_items
                });
                }
            })
          .catch(error => {
            console.log(error);
          });
      }

    

    portfolioItems() {
        return this.state.data.map(item => {   // to call it
            return <PortfolioItem key={item.id} item={item} />
            
        })
    }   

    componentDidMount() {
        this.getPortfolioItems();
    }

    render() {
        if (this.state.isLoading) {
            return <div>Loading....</div>;
        }

      return ( 
        <div className="homepage-wrapper">  
            <div className="filter-links">
                <button className="btn" onClick={() => this.handleFilter('eCommerce')}>Python.....</button>
                <button className="btn" onClick={() => this.handleFilter('Scheduling')}>.....and React</button>
                <button className="btn" onClick={() => this.handleFilter('Enterprise')}>.....and Javascript</button>
                <button className="btn" onClick={() => this.handleFilter('CLEAR_FILTERS')}>ALL</button>
            </div>   

            <div className="portfolio-items-wrapper">           
                {this.portfolioItems()}
            </div>        
        </div>     
      );
  }
}