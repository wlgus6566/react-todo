import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <>
        <div className="navbar">
          <i className="fa-solid fa-bag-shopping"></i>
          <span> Shopping List๐๐</span>
        </div>
        <span className="navbar-count">TOTAL: {this.props.totalCount} ๊ฐ</span>
      </>
    );
  }
}

export default Navbar;
