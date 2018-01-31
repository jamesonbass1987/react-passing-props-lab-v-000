import React, { Component } from 'react';

import FruitBasket from './FruitBasket';

class App extends Component {

    constructor(props){
        super(props);

        this.state = {
            filters: [],
            fruit: [],
            currentFilter: null
        }

        this.fetchFilters = this.fetchFilters.bind(this);
        this.handleFilterChange = this.handleFilterChange.bind(this);
    }

    componentWillMount() {
        this.fetchFilters();
        this.fetchFruit();
    }

    fetchFruit(){
        fetch('/api/fruit')
            .then(response => response.json())
            .then(items => this.setState({ fruit: items }));
    }


    fetchFilters = () => {
        fetch('/api/fruit_types')
            .then(response => response.json())
            .then(filters => this.setState( {filters: filters} ))
    }

    handleFilterChange = event => {
        console.log('new filter: ', event.target.value);
        this.setState({ currentFilter: event.target.value });
    }

    render(){
        return (
            <div>
                <FruitBasket 
                    handleFilterChange={this.handleFilterChange}
                    filters={this.state.filters}
                    fruit={this.state.fruit}
                    currentFilter = {this.state.currentFilter} />
            </div>
        )
    }

}

export default App;
