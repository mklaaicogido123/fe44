import React, { Component, Fragment } from "react";
import TableNguoiDung from "./TableNguoiDung";
import { connect } from "react-redux";
import { themNguoiDungAction } from "../redux/actions/QuanLyNguoiDung";

import _ from "lodash";

class Form_Validation extends Component {
  state = {
    values: {
      taiKhoan: "",
      matKhau: "",
      hoTen: "",
      soDt: "",
      email: "",
      maLoaiNguoiDung: "KhachHang",
    },
    errors: {
      taiKhoan: "",
      matKhau: "",
      hoTen: "",
      soDt: "",
      email: "",
    },
  };

  handleChange = (event) => {
    let { name, value, type } = event.target;

    var newValues = {
      ...this.state.values,
      [name]: value,
    };

    var newErrors = {
      ...this.state.errors,
      [name]: value.trim() === "" ? `${name} không được bỏ trống` : "",
    };

    if (type === "email") {
      let regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!regexEmail.test(value)) {
        newErrors[name] = name + " không hợp lệ !";
      }
    }

    var newState = {
      values: newValues,
      errors: newErrors,
    };

    //set state sau khi xử lý lỗi\
    this.setState(newState, () => {
      console.log(this.state);
    });
  };

  handleSubmit = (event) => {
    //Ngăn sự kiện submit lại trang
    event.preventDefault();
    //Kiểm tra ngăn submit khi còn lỗi
    let valid = true;

    for (let key in this.state.value) {
      if (this.state.values[key] === "") {
        valid = false;
        break;
      }
    }

    for (let key in this.state.errors) {
      if (this.state.errors[key] !== "") {
        valid = false;
      }
    }

    if (!valid) {
      alert("Dữ liệu không hợp lệ !");
      return;
    }
    //Đưa dữ liệu lên reducer
    // let action = {
    //   type: "them_nguoi_dung",
    //   nguoiDung: this.state.values,
    // };
    // this.props.dispatch(action);
    this.props.dispatch(themNguoiDungAction(this.state.values));
    alert("Submit thành công");
  };

  // //Hàm này được chạy khi props hoặc state đổi và chạy trước khi render
  // componentWillReceiveProps(newProps, newState) {
  //   let { nguoiDungEdit } = newProps;
  //   //Trước render => gán state.values= nguoiDungEdit
  //   this.setState({
  //     values: nguoiDungEdit,
  //   });
  // }

  static getDerivedStateFromProps(newProps, currentState) {
    let { nguoiDungEdit } = newProps;
    if (!_.isEqual(nguoiDungEdit, currentState.values)) {
      let newState = { ...currentState, values: nguoiDungEdit };
      console.log("getDerivedStateFromProps");
      return newState;
    }
    return null;
  }
  render() {
    let {
      taiKhoan,
      matKhau,
      email,
      hoTen,
      soDt,
      maLoaiNguoiDung,
    } = this.state.values;

    return (
      <Fragment>
        <form onSubmit={this.handleSubmit} className="container-fluid">
          <div className="card text-left">
            <div className="card-header bg-dark text-light">
              <h3>Form đăng ký</h3>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-6">
                  <div className="form-group">
                    <p>Tài khoản</p>
                    <input
                      value={taiKhoan}
                      className="form-control"
                      name="taiKhoan"
                      onChange={this.handleChange}
                    />
                    <p className="text-danger">{this.state.errors.taiKhoan}</p>
                  </div>
                  <div className="form-group">
                    <p>Mật khẩu</p>
                    <input
                      value={matKhau}
                      className="form-control"
                      name="matKhau"
                      onChange={this.handleChange}
                    />
                    <p className="text-danger">{this.state.errors.matKhau}</p>
                  </div>
                  <div className="form-group">
                    <p>Email</p>
                    <input
                      value={email}
                      type="email"
                      className="form-control"
                      name="email"
                      onChange={this.handleChange}
                    />
                    <p className="text-danger">{this.state.errors.email}</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-group">
                    <p>Họ tên</p>
                    <input
                      value={hoTen}
                      className="form-control"
                      name="hoTen"
                      onChange={this.handleChange}
                    />
                    <p className="text-danger">{this.state.errors.hoTen}</p>
                  </div>
                  <div className="form-group">
                    <p>Số điện thoại</p>
                    <input
                      value={soDt}
                      className="form-control"
                      name="soDt"
                      onChange={this.handleChange}
                    />
                    <p className="text-danger">{this.state.errors.soDt}</p>
                  </div>
                  <div className="form-group">
                    <p>Mã loại người dùng</p>
                    <select
                      value={maLoaiNguoiDung}
                      className="form-control"
                      name="maLoaiNguoiDung"
                      onChange={this.handleChange}
                    >
                      <option value="KhachHang">Khách hàng</option>
                      <option value="QuanTri">Quản trị</option>
                    </select>
                  </div>
                </div>
                <div className="row">
                  <div className="text-right col-12">
                    <button className=" m-4 btn btn-success">Đăng ký</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
        <TableNguoiDung></TableNguoiDung>
      </Fragment>
    );
  }
  componentDidUpdate(prevProps, currentState) {
    if (!_.isEqual(prevProps.nguoiDungEdit, this.props.nguoiDungEdit)) {
    }
  }
}

const mapStateToProps = (state) => {
  return {
    nguoiDungEdit: state.BaiTapQuanLyNguoiDungReducer.nguoiDungEdit,
  };
};
export default connect(mapStateToProps)(Form_Validation);
