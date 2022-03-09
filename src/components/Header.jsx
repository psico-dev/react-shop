import React from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import "../styles/components/Header.css"

function Header () {
  const { state } = React.useContext(AppContext)
  const { cart } = state
  return(
    <div className='Header'>
      <Link to="/">
         <h1 className='Header-title'>PlatziConf Merch</h1>
      </Link>
      <div className='Header-checkout'>
        <Link to="/checkout">
          <i className='basket fas fa-shopping-basket'/>
        </Link>
        {cart.length > 0 && <div className='Header-alert'>{cart.length}</div>}
      </div>
    </div>
  )
}

export { Header }