import React, {Component} from 'react'

interface StateType{
    calcCtrl: Array<string>;
}
type propsType = {
    doClick: Function;
}

export default class Ctrl extends Component<propsType,StateType> {
    constructor(props: propsType){
        super(props)
        this.state = {
            calcCtrl:['C','+','-','.','7','8','9','*','4','5','6','/','1','2','3','0','=']
        }
    }

    doClick(item){
        this.props.doClick(item)
    }
    mouseDown(e){
        e.target.classList.add('active');
    }
    mouseUp(e){
        e.target.classList.remove('active');
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
                               onClick={()=>this.doClick(item)}
                               onMouseDown={(e)=>this.mouseDown(e)}
                               onMouseLeave={(e)=>this.mouseUp(e)}
                               onMouseUp={(e)=>this.mouseUp(e)}
                             >{item}</div>
                        )
                    })
                }

            </div>
        )
    }
}
