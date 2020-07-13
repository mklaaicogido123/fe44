import React, { Component } from 'react'

export default class ChonXe extends Component {
    
    state={
        srcImg:'./img/red-car.jpg'
    }
    changeColor = (newImgSrc) =>{
        this.setState({
            srcImg:newImgSrc
        })
    }

    render() {
        return (
            <div>
                <div className="container">
                    <h3 className="text-center">bài tập chọn xe</h3>
                    <div className="row">
                        <div className="col-6">
                            <img className="w-100" src={this.state.srcImg} alt='red_car.jpg'></img>
                        </div>
                        <div className="col-6">
                            <div className="row">
                                <div className="col-3">
                                    <button className="w-50 h-100 btn btn-outline-dark bg-danger text-light"
                                    onClick={() =>
                                        this.changeColor('./img/red-car.jpg') }>red</button>
                                </div>
                                <div className="col-3">
                                    <button className="w-50 h-100 btn btn-outline-dark bg-danger text-light"
                                    onClick={() =>
                                        this.changeColor('./img/black-car.jpg') }>black</button>
                                </div>
                                <div className="col-3">
                                    <button className="w-50 h-100 btn btn-outline-dark bg-danger text-light"
                                     onClick={() =>
                                     this.changeColor('./img/silver-car.jpg') }>silver</button>
                                </div>
                                <div className="col-3">
                                    <button className="w-50 h-100 btn btn-outline-dark bg-danger text-light"
                                    onClick={() =>
                                        this.changeColor('./img/steel-car.jpg') }>Steel</button>
                                </div>                              
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
