import React, { Component } from 'react'
interface CalcState {
    leftNumber: number | string;
    rightNumber: number | string;
    operator: string;
}
export default class ShowPanel extends Component<CalcState,{}> {
    constructor(props: CalcState) {
        super(props);
    }
    render() {
        return (
            <div className="shaw-panel">
                <div className="operator">
                    {this.props.operator}
                </div>
                <div className="rightNumber">
                    {this.props.rightNumber}
                </div>
                <div className="leftNumber">
                    {this.props.leftNumber}
                </div>
            </div>
        )
    }
}
