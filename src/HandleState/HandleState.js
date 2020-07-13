import React, { Component } from "react";

export default class HandleState extends Component {
  // State thuộc tính
  state = {
    isLogin: false,
  };

  //Tạo ra 2 thuộc tính là
  // isLogin nếu =true thì Hello Hào
  // isLogin = false thì hiển thị nút đăng nhập
  ////////////
  // isLogin=false;
  userName = "Phong";
  renderContent = () => {
    if (this.state.isLogin) {
      return <h1>Hello {this.userName}</h1>;
    }
    return (
      <button
        onClick={() => {
          this.login();
        }}
      >
        Đăng nhập
      </button>
    );
  };
  login = () => {
    // this.state.isLogin=true;

    const newState = {
      isLogin: true,
    };
    this.setState(newState,()=> console.log(this.state.isLogin));
  };
  render() {
    return (
      <div>
        {/* {this.isLogin ? <h1>Hello {this.userName}</h1> :<button>Đăng nhập</button> }       */}
        {this.renderContent()}
      </div>
    );
  }
}
