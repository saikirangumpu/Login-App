// Write your code here
import './index.css'

const Message = props => {
  const {isLoggedIn} = props
  const msg = isLoggedIn ? 'Welcome User' : 'Please Login'

  return <h1 className="title"> {msg} </h1>
}

export default Message
