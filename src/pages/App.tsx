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
import {  BrowserRouter as Router, Route,Redirect } from 'react-router-dom';
import routes from '@/router/router';
// import AppHeader from '../components/appHeader/index'
import { registerScroll } from '@/hook/scroll'

class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }
  componentDidMount() {
    registerScroll()
  }
  render() {
    return (
        <Router>
          {/*<AppHeader />*/}
            {
              routes.map((item,index) => {
                if(item.redirect){
                  return (
                      <Redirect key={`sdfasdf ${index}`}
                        to={item.redirect}
                      />
                  )
                }
                else{
                  return (
                      <Route
                        key={`sdfasdf ${index}`}
                        {...item}
                      />
                  )}
                }
              )
            }
        </Router>)
  }
}
export default connect((props) => {
  return {
    ...props
  }
}, (dispatch) => {
  return {
    inputChange(event: ChangeEvent<any>) {
      const action = {
        type: 'change_input',
        value: event.target.value
      }
      dispatch(action)
    },
    countChange(event: ChangeEvent<any>) {
      const action = {
        type: 'change_count',
        value: event.target.value
      }
      dispatch(action)
    }
  }
})(App);
