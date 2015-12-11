import React from "react";

export default React.createClass({
  render: function() {
    return (
      <tr><th colSpan="2">{this.props.category}</th></tr>
    );
  }
});