import React, { Component } from "react";
import { connect } from "react-redux";

class DanhSachCuoc extends Component {
  renderDanhSachCuoc = () => {
    return this.props.danhSachCuoc.map((quanCuoc, index) => {
      return (
        <div className="col-4 text-center mt-5" key={index}>
          <img style={{ width: 150 }} src={quanCuoc.hinhAnh}></img>
          <br></br>
          <br></br>
          <span
            className="p-3 pl-5 pr-5 bg-warning mt-2 "
            style={{ borderRadius: "5%", fontSize: 25 }}
          >
            Cược:<span className="text-success">{quanCuoc.diemCuoc}</span>
          </span>
        </div>
      );
    });
  };
  render() {
    return (
      <div className="row text-left mt-5">
        {this.renderDanhSachCuoc()}
        {/* <div className="col-4 text-center mt-5">
          <img style={{ width: 150 }} src="./gameBauCua/bau.png"></img>
          <br></br>
          <br></br>
          <span
            className="p-3 pl-5 pr-5 bg-warning mt-2 "
            style={{ borderRadius: "5%", fontSize: 25 }}
          >
            Cược:<span className="text-success">0</span>
          </span>
        </div>
        <div className="col-4 text-center mt-5">
          <img style={{ width: 150 }} src="./gameBauCua/bau.png"></img>
          <br></br>
          <br></br>
          <span
            className="p-3 pl-5 pr-5 bg-warning mt-2 "
            style={{ borderRadius: "5%", fontSize: 25 }}
          >
            Cược:<span className="text-success">0</span>
          </span>
        </div>
        <div className="col-4 text-center mt-5">
          <img style={{ width: 150 }} src="./gameBauCua/bau.png"></img>
          <br></br>
          <br></br>
          <span
            className="p-3 pl-5 pr-5 bg-warning mt-2 "
            style={{ borderRadius: "5%", fontSize: 25 }}
          >
            Cược:<span className="text-success">0</span>
          </span>
        </div>
        <div className="col-4 text-center mt-5">
          <img style={{ width: 150 }} src="./gameBauCua/bau.png"></img>
          <br></br>
          <br></br>
          <span
            className="p-3 pl-5 pr-5 bg-warning mt-2 "
            style={{ borderRadius: "5%", fontSize: 25 }}
          >
            Cược:<span className="text-success">0</span>
          </span>
        </div>
        <div className="col-4 text-center mt-5">
          <img style={{ width: 150 }} src="./gameBauCua/bau.png"></img>
          <br></br>
          <br></br>
          <span
            className="p-3 pl-5 pr-5 bg-warning mt-2 "
            style={{ borderRadius: "5%", fontSize: 25 }}
          >
            Cược:<span className="text-success">0</span>
          </span>
        </div>
        <div className="col-4 text-center mt-5">
          <img style={{ width: 150 }} src="./gameBauCua/bau.png"></img>
          <br></br>
          <br></br>
          <span
            className="p-3 pl-5 pr-5 bg-warning mt-2 "
            style={{ borderRadius: "5%", fontSize: 25 }}
          >
            Cược:<span className="text-success">0</span>
          </span>
        </div> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    danhSachCuoc: state.BaiTapGameBauCuaReducer.danhSachCuoc,
  };
};

export default connect(mapStateToProps)(DanhSachCuoc);
