import React, { Component } from "react";
import BTHeader from "./BTHeader";
import Carousel from "./Carousel";
import Laptop from "./Laptop";
import Mobile from "./Mobile";
import Promotion from "./Promotion";
import EXRenderWithMap from "../../RenderWithMap/EXRenderWithMap";


export default class BaiTapLayout extends Component {
  render() {
    return (
      <div>
        <BTHeader></BTHeader>
        <Carousel></Carousel>
        <Laptop></Laptop>
        <EXRenderWithMap></EXRenderWithMap>
        <Promotion></Promotion>
      </div>
    );
  }
}
