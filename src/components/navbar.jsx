import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <>
        <div className="navbar">
          <i className="fa-solid fa-bag-shopping"></i>
          <span> Shopping List🖍📋</span>
        </div>
        <span className="navbar-count">TOTAL: {this.props.totalCount} 개</span>
      </>
    );
  }
}

export default Navbar;
