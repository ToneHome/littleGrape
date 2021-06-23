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
import {  BrowserRouter as Router, Route } from 'react-router-dom';
import routes from '@/router/router';
import AppHeader from '../components/appHeader/index'
import { registerScroll } from '@/hook/scroll'

class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }
  componentDidMount() {
    registerScroll()
  }
  render() {
    return (<div className="App">
        <Router>
          <AppHeader />
          <div className="main-panel">
            {
              routes.map((item,index) => {
                return (
                    <Route
                      key={`sdfasdf ${index}`}
                      {...item}
                    />
                )})
            }
          </div>
        </Router>
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
