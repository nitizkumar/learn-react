import React from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

export default React.createClass({
	getInitialState: function() {
		return {
            filterText: '',
            inStockOnly: false
      };
	},

    handleUserInput: function(filterText, inStockOnly) {
        this.setState({
            filterText: filterText,
            inStockOnly: inStockOnly
        });
    },

    render: function() {
        return (
            <div>
                <SearchBar 
	                filterText={this.state.filterText} 
	                inStockOnly={this.state.inStockOnly} 
                    onUserInput={this.handleUserInput} />

                <ProductTable 
                	products={this.props.products}
                	filterText={this.state.filterText} 
	                inStockOnly={this.state.inStockOnly} />
            </div>
        );
    }
});