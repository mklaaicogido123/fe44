import React, { Component } from 'react'
import MobileProduct from './MobileProduct'

export default class Mobile extends Component {
    render() {
        return (
            <div>
                <section id="smartphone" className="container-fluid pt-5 pb-5">
  <h1 className="text-white text-center">BEST SMARTPHONE</h1>
  <div className="row">
    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
      <MobileProduct></MobileProduct>
    </div>
    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
    <MobileProduct></MobileProduct>
    </div>
    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
    <MobileProduct></MobileProduct>
    </div>
    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
    <MobileProduct></MobileProduct>
    </div>
  </div>
</section>

            </div>
        );
    }
}
