import React, { Component } from "react";

export default class BTProductItem extends Component {
  render() {
    let {id,name,alias,price,description,shortDescription,quantity,image}=this.props.productProps;
    return (
      <div className="col-12 text-center">
          <h1>Adidas</h1>
        <div className="card ">
                    <img className="card-img-top" src={image}></img>
                    <div className='card-body'>
                        <h4 className='card-title'> Name:{name}</h4>
                        <p className="card-text">Price:{price}</p>
                        <button className="btn bg-dark text-white">Buy</button>
                    </div>
                </div>
      </div>
    );
  }
}
