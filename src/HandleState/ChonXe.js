import React, { Component } from 'react'

export default class ChonXe extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <h3 className="text-center">bài tập chọn xe</h3>
                    <div className="row">
                        <div className="col-6">
                            <img className="w-100" src={'./img/red-car.jpg'} alt='red_car.jpg'></img>
                        </div>
                        <div className="col-6">
                            <div className="row">
                                <div className="col-3">
                                    <button className="w-50 h-100 btn btn-outline-dark bg-danger text-light">red</button>
                                </div>
                                <div className="col-3">
                                    <button className="w-50 h-100 btn btn-outline-dark bg-danger text-light">black</button>
                                </div>
                                <div className="col-3">
                                    <button className="w-50 h-100 btn btn-outline-dark bg-danger text-light">silver</button>
                                </div>
                                <div className="col-3">
                                    <button className="w-50 h-100 btn btn-outline-dark bg-danger text-light">Steel</button>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
