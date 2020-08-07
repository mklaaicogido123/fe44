import React, { Component } from "react";
import { connect } from "react-redux";

class TableNguoiDung extends Component {
  render() {
    return (
      <div>
        <div classname="container">
          <div classname="card text-white bg-white">
            <br></br>
            <div className="card-header text-center text-danger h1">
              Danh sách người dùng
            </div>
            <div className="card-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>Tài khoản</th>
                    <th>Mật khẩu</th>
                    <th>Họ tên</th>
                    <th>Email</th>
                    <th>Số điện thoại</th>
                    <th>Loại người dùng</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.mangNguoiDung.map((nguoiDung, index) => {
                    return (
                      <tr key={index}>
                        <td>{nguoiDung.taiKhoan}</td>
                        <td>{nguoiDung.matKhau}</td>
                        <td>{nguoiDung.hoTen}</td>
                        <td>{nguoiDung.email}</td>
                        <td>{nguoiDung.soDt}</td>
                        <td>{nguoiDung.maLoaiNguoiDung}</td>
                        <td>
                          <button
                            className=" btn btn-primary"
                            onClick={() => {
                              this.props.dispatch({
                                type: "chinh_sua",
                                nguoiDungChinhSua: nguoiDung,
                              });
                            }}
                          >
                            Chỉnh sửa
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  {
    return {
      mangNguoiDung: state.BaiTapQuanLyNguoiDungReducer.mangNguoiDung,
    };
  }
};
export default connect(mapStateToProps)(TableNguoiDung);
