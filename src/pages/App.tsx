/*
 * @Author: your name
 * @Date: 2021-06-17 22:37:06
 * @LastEditTime: 2021-06-18 21:31:25
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \react-vite2-template\src\pages\App.tsx
 */
import React, { ChangeEvent } from 'react';
import { connect } from 'react-redux';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import routes from '@/router/router';

class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }
  render() {
    return (<div className="App">
      <header className="App-header">
        <h1>测试页面</h1>
        <Router>
          <div>
            <Link to="/read">读取</Link>
            <Link to="/write">编写</Link>
            <div>
              <input
                onChange={this.props.inputChange}
                type="text"
              />
            </div>
            <div>change_input======&gt;{this.props.inputValue}</div>
            <div>
              <input
                onChange={this.props.countChange}
                type="text"
              />
            </div>
            <div>change_count======&gt;{this.props.count}</div>
          </div>
          <div>
            {routes.map((item, index) => (
              <Route
                key={`sdfasdf ${index}`}
                {...item}
              />))}
          </div>
        </Router>
      </header>
    </div>)
  }
}
export default connect((props) => {
  return {
    ...props
  }
}, (dispatch) => {
  return {
    inputChange(event: ChangeEvent<any>) {
      let action = {
        type: 'change_input',
        value: event.target.value
      }
      dispatch(action)
    },
    countChange(event: ChangeEvent<any>) {
      let action = {
        type: 'change_count',
        value: event.target.value
      }
      dispatch(action)
    }
  }
})(App);
