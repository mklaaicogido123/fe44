import React, { Component } from "react";
import { connect } from "react-redux"; //Thư viện kết nối react Component và redux store
import DanhSachSanPhamRedux from "./DanhSachSanPhamRedux";
class GioHangRedux extends Component {
  renderGioHang = () => {
    let gioHang = (
      <tr>
        <td></td>
      </tr>
    );
  };
  render() {
    return (
      <div>
        <h3>Giỏ hàng</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Mã SP</th>
              <th>Hình ảnh</th>
              <th>Giá bán</th>
              <th>Số lượng</th>
              <th>Thành tiền</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{this.renderGioHang()}</tbody>
        </table>
      </div>
    );
  }
}

//Hàm có nhiệm vụ biến đổi state của redux trở thành props của component
const mapStateToProps = (state) => {
  //state ứng rới rootReducer
  return {
    gioHang: state.BTGioHangReducer.stateGioHang,
  };
};

export default connect(mapStateToProps)(DanhSachSanPhamRedux);
