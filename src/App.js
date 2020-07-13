import React from 'react';
import logo from './logo.svg';
import './App.css';
import BaiTapLayout from './Components/BaiTapLayout/BaiTapLayout';
import BTHeader from './Components/BaiTapLayout/BTHeader';
import Carousel from './Components/BaiTapLayout/Carousel';
import Mobile from './Components/BaiTapLayout/Mobile';
import Laptop from './Components/BaiTapLayout/Laptop';
import Promotion from './Components/BaiTapLayout/Promotion';
import DataBinding from './DataBinding/DataBinding';


function App() {
  return (
    <div className="App">
      {/* <BaiTapLayout></BaiTapLayout>
      <BTHeader></BTHeader>
      <Carousel></Carousel>
      <Mobile></Mobile>
      <Laptop></Laptop>
      <Promotion></Promotion> */}
      <DataBinding></DataBinding>
    </div>
  );
}

export default App;
