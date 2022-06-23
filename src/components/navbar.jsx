import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <>
        <div className="navbar">
          <i className="navbar-logo fas fa-leaf"></i>
          <span>TODAY'S CHECK LIST🖍📋</span>
        </div>
        <span className="navbar-count">TOTAL: {this.props.totalCount} 개</span>
      </>
    );
  }
}

export default Navbar;
