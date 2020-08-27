import React, { Component, PureComponent } from "react";

export default class ChildComponent extends PureComponent {
  render() {
    console.log(1);
    return (
      <div>
        <h1>{this.props.user.name}</h1>

        <nav class="bg-dark nav justify-content-center">
          <a class="nav-link active" href="#">
            Active link
          </a>
          <a class="nav-link" href="#">
            Link
          </a>
          <a class="nav-link disabled" href="#">
            Disabled link
          </a>
        </nav>
      </div>
    );
  }
}
