import React, { Component } from "react";

import { connect } from "react-redux";
import { LayDanhSachPhimAction } from "../redux/actions/QuanLyPhimAction";

class DanhSachPhim extends Component {
  //   state = {
  //     danhSachPhim: [],
  //   };
  renderDanhSachPhim = () => {
    console.log("danh sach phim :", this.props.danhSachPhim);
    return this.props.danhSachPhim.map((phim, index) => {
      return (
        <div className="col-2 my-4">
          <div class="card text-left">
            <img
              className="card-img-top"
              src={phim.hinhAnh}
              style={{ width: "100%" }}
              alt={phim.hinhAnh}
            />

            <div class="card-body bg-danger">
              <h4 class="card-title ">{phim.tenPhim}</h4>
              {/* <p class="card-text">Body</p> */}
            </div>
          </div>
        </div>
      );
    });
  };

  /* //Đây là lifeCycle dùng để gọi ajax */
  componentDidMount() {
    // axios({
    //   url:
    //     "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
    //   method: "GET",
    // })
    //   .then((result) => {
    //     console.log("dataPhim", result.data);
    //     this.setState({
    //       danhSachPhim: result.data,
    //     });
    //   })
    //   .catch((error) => {
    //     console.log(error.response.data);
    //   });
    this.props.dispatch(LayDanhSachPhimAction());
  }
  render() {
    return (
      <div>
        <h3 className="text-danger text-center display-4">Danh sách phim</h3>
        <div className="row">{this.renderDanhSachPhim()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  danhSachPhim: state.QuanLiPhimReducer.danhSachPhim,
});
export default connect(mapStateToProps)(DanhSachPhim);
