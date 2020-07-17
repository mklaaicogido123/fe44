import React, { Component } from 'react'

export default class Child extends Component {
    render() {
        let {name,price,img}=this.props.productProps;
        return (
            <div>
                <div className="card text-left">
                    <img className="card-img-top" src={img}></img>
                    <div className='card-body'>
                        <h4 className='card-title'>{name}</h4>
                        <p className="card-text">Price:{price}</p>
                    </div>
                </div>
            </div>
        )
    }
}
