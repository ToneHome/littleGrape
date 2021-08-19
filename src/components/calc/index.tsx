import React, { Component } from 'react'
import ShowPanel from './unit/showPanel'
import Ctrl from './unit/ctrl'
import './calc.scss'
interface CalcState {
    leftNumber:  string;
    rightNumber: string;
    operator: string;
}
export default class Calc extends Component<{}, CalcState> {
    constructor(props) {
        super(props);
        this.state = {
            leftNumber: '',
            rightNumber: '',
            operator: ''
        }
    }

    isNumber(number){
        return !Number.isNaN(parseInt(number))
    }

    addLeftNumber(number){
        const { leftNumber } = this.state;
        this.setState({
            leftNumber:leftNumber.toString() + number
        })
    }

    addRightNumber(number){
        const { rightNumber } = this.state;
        this.setState({
            rightNumber:rightNumber.toString() + number
        })
    }

    doCalc() {
        const {
            leftNumber,
            rightNumber,
            operator
        } = this.state;

        if (!leftNumber && !rightNumber && !operator) return;

        const rs = eval(`${leftNumber}${operator}${rightNumber}`);

        if(rs){
            this.setState({
                leftNumber:rs,
                operator:'',
                rightNumber:''
            })
        }
    }

    clearState(){
        this.setState({
            leftNumber: '',
            rightNumber: '',
            operator: ''
        })
    }


    doClick(key: string){

        if(this.isNumber(key)){
            this.addLeftNumber(key)
        }
        else if(key === 'C'){
            this.clearState()
        }
        else if(key === '='){
            this.doCalc()
        }
        else if(key === '.'){
            const { leftNumber } = this.state;
            if(leftNumber.indexOf('.') === -1){
                this.addLeftNumber(key)
            }
        }
        else {
            const { leftNumber } = this.state;
            this.setState({
                operator:key,
                rightNumber:leftNumber,
                leftNumber:''
            })
        }
    }
    render() {
        return (
            <div className="calc-panel">
                <ShowPanel {...this.state}/>
                <Ctrl doClick={(key) => this.doClick(key)}/>
            </div>
        )
    }
}
