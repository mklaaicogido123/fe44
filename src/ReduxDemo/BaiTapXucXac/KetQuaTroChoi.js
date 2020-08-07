import React, { Component } from "react";
import { connect } from "react-redux";

class KetQuaTroChoi extends Component {
  render() {
    return (
      <div className="container text-center display-4">
        <div>
          bạn chọn : <span className="text-danger">{this.props.banChon}</span>
        </div>
        <div>
          số bàn thắng :{" "}
          <span className="text-success">{this.props.soBanThang}</span>
        </div>
        <div>
          tổng số bàn chơi :{" "}
          <span className="text-warning">{this.props.soBanChoi}</span>
        </div>
        <button
          // onClick={() =>
          //   setInterval(() => {
          //     this.props.dispatch({
          //       type: "RANDOM_XI_NGAU",
          //     });
          //   })
          // }
          // className="btn btn-success display-4"
          // style={{ fontSize: 30 }}
          onClick={() => {
            var number = 0;
            let randomXiNgau = setInterval(() => {
              number++;
              this.props.dispatch({
                type: "RANDOM_XI_NGAU",
              });
              if (number > 5) {
                clearInterval(randomXiNgau);
                this.props.dispatch({
                  type: "TINH_DIEM",
                });
              }
            }, 1000);
          }}
        >
          Play
        </button>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  {
    return {
      banChon: state.BaiTapXucXacReducer.banChon,
      soBanThang: state.BaiTapXucXacReducer.soBanThang,
      soBanChoi: state.BaiTapXucXacReducer.soBanChoi,
    };
  }
};
export default connect(mapStateToProps)(KetQuaTroChoi);
