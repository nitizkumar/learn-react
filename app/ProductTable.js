import React from "react";
import ProductRow from "./ProductRow"
import ProductCategoryRow from "./ProductCategoryRow"

export default React.createClass({
	render: function() {
      var rows = [];
      var lastCategory = null;
      var self = this;
      self.props.products.forEach(function(product) {
          if (product.name.indexOf(self.props.filterText) === -1 || (!product.stocked && self.props.inStockOnly)) {
            return;
          }
          if (product.category !== lastCategory) {
              rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
          }
          rows.push(<ProductRow product={product} key={product.name} />);
          lastCategory = product.category;
      });
      return (
          <table>
              <thead>
                  <tr>
                      <th>Name</th>
                      <th>Price</th>
                  </tr>
              </thead>
              <tbody>{rows}</tbody>
          </table>
      );
  }
});