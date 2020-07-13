import React, { Component } from 'react'

export default class EventBinding extends Component {
    handleClick = () =>{
        alert('Hello fe 44');
    }
    showmessage = (message) => {
        alert("hello" + message);
    }
    render() {
        return (
            <div>
                cách 1 
                {/* cách 1: truyền trục tiếp call back */}
                <button onClick={this.handleClick}>Click me!!</button>
                <br></br>
                {/* cách 2 : truyền function gián tiếp */}
                cách 2
                <button onClick={() => {
                    this.handleClick()
                }}>CLick mee!!</button>
                {/* ///////////////////////// */}
                <button onClick={() => {
                    this.showmessage("\n\n abc")
                }}>CLick mee!!</button>
            </div>
        )
    }
}
