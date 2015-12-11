import React from "react";

export default React.createClass({
  render: function() {
  	let name = this.props.product.name;
  	if (!this.props.product.stocked) {
  		name = 	<span style={{color: 'red'}}>
                {this.props.product.name}
            	</span>;
  	}

    return (
      <tr>
        <td>{name}</td>
        <td>{this.props.product.price}</td>
    	</tr>
    );
  }
});