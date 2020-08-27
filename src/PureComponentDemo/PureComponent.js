import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

export default class PureComponent extends Component {
  state = {
    number: 1,
    user: { id: 1, name: "teo" },
  };
  render() {
    return (
      <div>
        <h1>{this.state.number}</h1>
        <button
          className="btn btn-success"
          onClick={() => {
            this.setState({ number: this.state.number + 1 });
          }}
        >
          +
        </button>

        <h1>{this.state.user.name}</h1>
        <button
          className="btn btn-success"
          onClick={() => {
            let newUser = this.state.user;
            newUser.name = "nguyen van a";
            this.setState({ user: { ...newUser } });
          }}
        >
          +
        </button>

        <ChildComponent user={this.state.user}></ChildComponent>
      </div>
    );
  }
}
