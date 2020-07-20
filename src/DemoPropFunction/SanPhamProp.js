import React, { Component } from "react";

export default class SanPhamProp extends Component {
  render() {
    let{mobile}=this.props;
    return (
      <div>
        <div className="" style={{ width: 300 }}>
          <img
            className="card-img-top"
            src={mobile.hinhAnh}
            alt="Card image"
            style={{ maxWidth: "100%", height: 250 }}
          />
        </div>
        <div className="card-body text-center">
          <h4 className="card-title text-center">{mobile.tenSP}</h4>
          <p className="card-text">{mobile.heDieuHanh}</p>
          <button
            className="btn btn-primary"
            onClick={() => this.props.detail(mobile)}
          >
            Detail
          </button>
        </div>
      </div>
    );
  }
}
