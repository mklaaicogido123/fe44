import React, { Component } from 'react'
import Child from './Child'

export default class DemoProp extends Component {
    
    render() {
        let product ={
            id:1,
            name:'iphoneX',
            price:1000,
            img:'https://picsum.photos/200/200'
        }
        return (
            <div className='container'>
                <div className="row">
                    <div className="col-4">
                        <Child productProps={product}></Child>
                    </div>
                </div>
            </div>
        )
    }
}
