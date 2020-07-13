import React, { Component } from 'react'
import cssDatabinding from './DataBinding.module.css'

export default class DataBinding extends Component {
    name="thuoc tinh"
    // renderh1=() => {
    //     <h1 className="title">test</h1>
    // }
    render() {
        let title= "CyberSoft";

        // let img="https://picsum.photos/500/300"
        let img="https://picsum.photos/500/300"
        let renderText=() => {
            return <div>
                <h1>renderText</h1>
            </div>
        }
        return (
            <div>
                <h1 className="title" id="title">{title}</h1>
                <img src={img} alt='123'/>
                {renderText()}
                <p>{this.name}</p>
            </div>

        )
    }
}
