// Write your code here
import {Component} from 'react'
import './index.css'
import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'

class Home extends Component {
  state = {
    isLoggedIn: false,
  }

  onChangeStatus = () => {
    this.setState(prevState => ({isLoggedIn: !prevState.isLoggedIn}))
  }

  render() {
    const {isLoggedIn} = this.state
    /*const mainText = isLoggedIn ? 'Welcome User' : 'Please Login'
    const btnText = isLoggedIn ? 'Logout' : 'Login'*/
    return (
      <div className="bg-container">
        <div className="content-container">
          <Message isLoggedIn={isLoggedIn} />
          {isLoggedIn ? (
            <Logout logout={this.onChangeStatus} />
          ) : (
            <Login login={this.onChangeStatus} />
          )}
        </div>
      </div>
    )
  }
}

export default Home

/*
<h1 className="title"> {mainText} </h1>
          <button
            className="button"
            onClick={this.onChangeStatus}
            type="button"
          >
            {btnText}
          </button> 
*/

/*
import {Component} from 'react'

import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'

import './index.css'

class Home extends Component {
  state = {isLoggedIn: false}

  onClickButton = () => {
    this.setState(prevState => ({isLoggedIn: !prevState.isLoggedIn}))
  }

  render() {
    const {isLoggedIn} = this.state

    return (
      <div className="app-container">
        <div className="home-container">
          <Message isLoggedIn={isLoggedIn} />
          {isLoggedIn ? (
            <Logout logout={this.onClickButton} />
          ) : (
            <Login login={this.onClickButton} />
          )}
        </div>
      </div>
    )
  }
}

export default Home
*/
