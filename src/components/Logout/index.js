// Write your code here
const Logout = props => {
  const {logout} = props

  return (
    <button className="btn" onClick={logout} type="button">
      {' '}
      Logout{' '}
    </button>
  )
}

export default Logout
