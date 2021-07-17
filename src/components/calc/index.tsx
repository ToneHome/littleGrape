import React, { Component } from 'react'
import ShowPanel from './unit/showPanel'
import Ctrl from './unit/ctrl'
import './calc.scss'
export default class Calc extends Component {
    render() {
        return (
            <div className="calc-panel">
                <ShowPanel />
                <Ctrl />
            </div>
        )
    }
}
