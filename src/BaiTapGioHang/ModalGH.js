import React, { Component } from "react";

export default class ModalGH extends Component {
  renderGioHang = () => {
    let { gioHang } = this.props;
    let { xoaGioHang } = this.props;
    let { tangGiamSoLuong } = this.props;
    return gioHang.map((SanPhamGH, index) => {
      return (
        <tr key={index}>
          <td>{SanPhamGH.maSP}</td>
          <td>{SanPhamGH.tenSP}</td>
          <td>
            <img width="100" height="100" src={SanPhamGH.hinhAnh}></img>
          </td>
          <td>{SanPhamGH.gia}</td>
          <td>
            {SanPhamGH.soLuong}
            <button
              className="btn btn-primary "
              onClick={() => {
                this.props.tangGiamSoLuong(SanPhamGH.maSP, true);
              }}
            >
              +
            </button>
            <button
              className="btn btn-primary "
              onClick={() => {
                this.props.tangGiamSoLuong(SanPhamGH.maSP, false);
              }}
            >
              -
            </button>
          </td>
          <td>{SanPhamGH.gia * SanPhamGH.soLuong}</td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => {
                this.props.xoaGioHang(SanPhamGH.maSP);
              }}
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  };
  tinhTongTien = () => {
    return this.props.gioHang.reduce((tongTien, spGH, index) => {
      return (tongTien += spGH.soLuong * spGH.gia);
    }, 0);
  };
  render() {
    return (
      <div className="container">
        <h3>Giỏ hàng</h3>
        <table className="table">
          <thead>
            <th>Mã</th>
            <th>Tên Sản phẩm</th>
            <th>Hình ảnh</th>
            <th>Đơn giá</th>
            <th>Số lượng</th>
            <th>Thành tiền</th>
          </thead>
          <tbody>{this.renderGioHang()}</tbody>
          <tfoot>
            <tr>
              <td colSpan="5"></td>
              <td>Total</td>
              <td>{this.tinhTongTien().toLocaleString()}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}
