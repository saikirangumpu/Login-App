// Write your code here
const Login = props => {
  const {login} = props

  return (
    <button className="btn" onClick={login} type="button">
      Login
    </button>
  )
}

export default Login
