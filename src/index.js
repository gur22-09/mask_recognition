import React,{ Component } from 'react'
import ReactDOM from 'react-dom'
import MainCam from './MainCam'
import AskName from './components/AskName';
import Askage from './components/askAge';
import Header from './components/Header';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


class App extends Component{
  render(){
    return(
      <Router>
      <div className="App">
        <Header/>
        <Route exact path='/' component ={MainCam}/>
        <Route exact path='/askName' component ={AskName}/>
        <Route exact path='/askAge' component ={Askage}/>
      </div>
      </Router>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
