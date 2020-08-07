import React, { Component } from "react";
import { connect } from "react-redux";

class DiemThuong extends Component {
  render() {
    return (
      <div className="text-center">
        <span
          className=" bg-warning"
          style={{
            fontSize: 40,
            borderRadius: "10px",
            border: "5px solid black",
          }}
        >
          Tiền thưởng:
          <span className="text-success">{this.props.diemThuong}</span>{" "}
        </span>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    diemThuong: state.BaiTapGameBauCuaReducer.diemThuong,
  };
};

export default connect(mapStateToProps)(DiemThuong);
