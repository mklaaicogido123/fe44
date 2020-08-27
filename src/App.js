import React, { PureComponent } from "react";
import logo from "./logo.svg";
import "./App.css";
import BaiTapLayout from "./Components/BaiTapLayout/BaiTapLayout";
import BTHeader from "./Components/BaiTapLayout/BTHeader";
import Carousel from "./Components/BaiTapLayout/Carousel";
import Mobile from "./Components/BaiTapLayout/Mobile";
import Laptop from "./Components/BaiTapLayout/Laptop";
import Promotion from "./Components/BaiTapLayout/Promotion";
import DataBinding from "./DataBinding/DataBinding";
import EventBinding from "./EventBinding/EventBinding";
import HandleState from "./HandleState/HandleState";
import ChonXe from "./HandleState/ChonXe";
import RenderWithMap from "./RenderWithMap/RenderWithMap";
import DemoProp from "./DemoProp/DemoProp";
import BT2ProductList from "./DemoProp/BT2ProductList";
import DemoPropFunction from "./DemoPropFunction/DemoPropFunction";
import BTGH from "./BaiTapGioHang/BTGH";
import BaiTapGiaHangRedux from "./ReduxDemo/BaiTapGioHangRedux/BaiTapGioHangRedux";
import BaiTapGameBauCua from "./ReduxDemo/BaiTapGameBauCua/BaiTapGameBauCua";
import BaiTapXucXac from "./ReduxDemo/BaiTapXucXac/BaiTapXucXac";
import Form_Validation from "./Form_Validation/Form_Validation";
import ReactLifeCycle from "./ReactLifecycle/ReactLifeCycle";
import PureComponentDemo from "./PureComponentDemo/PureComponent";
import DanhSachPhim from "./AJaxAPI/DanhSachPhim";
import Home from "./Home/Home";
import Detail from "./Home/Detail";
import BookingTicket from "./Home/BookingTicket";

function App() {
  return (
    <div className="App ">
      {/*<BaiTapLayout></BaiTapLayout> 
      <BTHeader></BTHeader>
      <Carousel></Carousel>
      <Mobile></Mobile>
      <Laptop></Laptop>
      <Promotion></Promotion> 
      <DataBinding></DataBinding>
      <EventBinding></EventBinding>
      <HandleState></HandleState>
      <ChonXe></ChonXe>
      <RenderWithMap></RenderWithMap>
      <DemoProp></DemoProp>
      <BT2ProductList></BT2ProductList>
      <DemoPropFunction></DemoPropFunction>
      <BTGH></BTGH>
      <BaiTapGiaHangRedux></BaiTapGiaHangRedux>
      <BaiTapGameBauCua></BaiTapGameBauCua>
      <BaiTapXucXac></BaiTapXucXac>
      <ReactLifeCycle></ReactLifeCycle>
      
      <PureComponentDemo></PureComponentDemo>
      <DanhSachPhim></DanhSachPhim>*/}
      <Form_Validation></Form_Validation>
      {/*  */}
      {/* <HomeTemplate exact path="" Component={Datail}></HomeTemplate> */}
      {/* <Detail></Detail> */}
      {/* <Home></Home> */}
      {/* <BookingTicket></BookingTicket> */}
    </div>
  );
}

export default App;
