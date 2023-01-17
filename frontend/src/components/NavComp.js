import React from 'react'
import {NavLink,Link} from 'react-router-dom'
const NavComp = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">Blog App</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
            
            <NavLink style={{marginRight:'5px'}} className="nav-item nav-link active"  to="/">Home <span className="sr-only">(current)</span></NavLink>
            <NavLink style={{marginLeft:'5px'}} className="nav-item nav-link" to="/blog">Blogs</NavLink>
            
            </div>
        </div>
        </nav>
    </div>
  )
}

export default NavComp
