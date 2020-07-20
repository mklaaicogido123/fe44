import React, { Component } from "react";

export default class ModalGH extends Component {
  renderGioHang = () => {
    let { gioHang } = this.props;
    return gioHang.map((SanPhamGH, index) => {
      return (
        <tr key={index}>
          <td>{SanPhamGH.maSP}</td>
          <td>{SanPhamGH.tenSP}</td>
          <td>
            <img width="100" height="100" src={SanPhamGH.hinhAnh}></img>
          </td>
          <td>{SanPhamGH.gia}</td>
          <td>{SanPhamGH.soLuong}</td>
          <td>{SanPhamGH.gia}</td>
          <td>
            <button className="btn btn-danger">Delete</button>
          </td>
        </tr>
      );
    });
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
        </table>
      </div>
    );
  }
}
