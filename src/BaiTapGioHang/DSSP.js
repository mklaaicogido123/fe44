import React, { Component } from "react";
import SP from "./SP";
export default class DSSP extends Component {
  renderListProduct = (list) => {
    return list.map((item, index) => {
      return (
        <div
          className="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-lg-4"
          key={index}
        >
          <SP mobile={item} themGioHang={this.props.themGioHang} />
        </div>
      );
    });
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          {this.renderListProduct(this.props.danhSachMobile)}
        </div>
      </div>
    );
  }
}
