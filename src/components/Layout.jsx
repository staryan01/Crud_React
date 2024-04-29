import React from 'react'
import { Link, Outlet,NavLink } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
        <ul>
            <li>
                <NavLink to='/' style={({isActive})=>{
                    return{
                      color:isActive?"red":"black"
                    }
                }}>Create User</NavLink>
            </li>
            <li>
                <NavLink to='/datausers' style={({isActive})=>{
                    return{
                      color:isActive?"red":"black"
                    }}}>Users</NavLink>
            </li>
        </ul>
        <hr />
        <Outlet/>
    </div>
  )
}

export default Layout