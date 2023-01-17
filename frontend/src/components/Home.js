import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div className='container'>
        <div className='jumbotron mt-5'>
            <h1 className="display-4">Hello Blog World</h1>
            <hr className="my-4"/>
            <p>In this App, you will find blogs of all category</p>
            <Link className='btn btn-large btn-primary'>Click To Check Our Awesome Blogs</Link>
            
        </div>

    </div>
  )
}

export default Home