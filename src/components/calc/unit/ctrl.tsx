import React, { Component } from 'react'

export default class Ctrl extends Component {
    constructor(){
        super()
        this.state = {
            calcCtrl:['C','+','-','.','7','8','9','X','4','5','6','/','1','2','3','0','=']
        }
    }

    doClick(item){
        console.log(item);
    }
    mouseDown(e){

    }
    render() {
        const { calcCtrl } = this.state;
        return (
            <div className="ctrl-panel">
                {
                    calcCtrl.map((item,index) => {
                        return (
                             <div className="ctrl-item"
                               key={index}
                               onClick={this.doClick.bind(this,item)}
                               onMouseDown={(e)=>this.mouseDown(e)}
                             >{item}</div>
                        )
                    })
                }

            </div>
        )
    }
}
