import React, { Component } from "react";
import { connect } from "react-redux";

export default class SanPhamRedux extends Component {
  render() {
    let { sanPham } = this.props;
    return (
      <div className="card text-left">
        <img
          className="card-img-top"
          src={sanPham.hinhAnh}
          alt={sanPham.hinhAnh}
          height={350}
        />
        <div className="card-body">
          <h4 className="card-title">{sanPham.tenSP}</h4>
          <p className="card-text">{sanPham.giaBan.toLocaleString()}</p>
          <button
            className="btn btn-success"
            onClick={() => {
              this.props.themGioHang(sanPham);
            }}
          >
            Thêm sản phẩm
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    themGioHang: (sanPhamClick) => {
      let spGH = {
        maSP: sanPhamClick.maSP,
        tenSP: sanPhamClick.tenSP,
        gia: sanPhamClick.gia,
        soLuong: 1,
        hinhAnh: sanPhamClick.hinhAnh,
      };
      let action = {
        type: "THEM_GIO_HANG",
        spGH: spGH,
      };
      dispatch(action);
    },
  };
};

export default connect(mapDispatchToProps)(SanPhamRedux);
