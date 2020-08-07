import React, { Component } from "react";
import { connect } from "react-redux";
import BanTapXucXac from "./BaiTapXucXac.module.css";

class BanCuoc extends Component {
  render() {
    return (
      <div className="container">
        <h3 className="display-4 text-center">BÀI TẬP GAME XÚC XẮC</h3>
        <div className="row text-center">
          <div className="col-4">
            <button
              onClick={() =>
                this.props.dispatch({
                  type: "DAT_CUOC_XUC_XAC",
                  banChon: "Tài",
                })
              }
              className="bg-danger display-4 p-5 text-light"
            >
              TÀI{" "}
            </button>
          </div>
          <div className="col-4">
            <div className="d-flex justify-content-center">
              {this.props.mangXucXac.map((XucXac, index) => (
                <img key={index} src={XucXac.hinhAnh} width={50} height={50} />
              ))}
              {/* <img src="./gameXucXac/1.png" width={50} height={50} />
              <img src="./gameXucXac/2.png" width={50} height={50} />
              <img src="./gameXucXac/3.png" width={50} height={50} /> */}
            </div>
          </div>
          <div className="col-4">
            <button
              onClick={() =>
                this.props.dispatch({
                  type: "DAT_CUOC_XUC_XAC",
                  banChon: "Xỉu",
                })
              }
              className="bg-dark display-4 p-5 text-light"
            >
              XỈU{" "}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  {
    return {
      mangXucXac: state.BaiTapXucXacReducer.mangXucXac,
    };
  }
};
export default connect(mapStateToProps)(BanCuoc);
