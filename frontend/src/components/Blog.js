import React,{useState,useEffect} from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';

const Blog = () => {
     const [blogs,setBlogs]=useState([])
     const [featuredBlogs,setFeaturedBlog]=useState([])

     useEffect(()=>{
      const fetch= async ()=>{
        try{
          const res= await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/featured`)
          setFeaturedBlog(res.data[0])
        }catch{

        }
      }
      fetch();
     },[])
     useEffect(()=>{
      const fetchBlogs= async ()=>{
        try{
          const res= await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/`)
          setBlogs(res.data)
        }catch{

        }
      }
      fetchBlogs();
     },[])

     const capitalizeFirstWord=(word)=>{
      if(word){
        return word.charAt(0).toUpperCase()+word.splice(1)
      }
     }

    return(
      <div className='container mt-3'>
            <div className="nav-scroller py-1 mb-2">
                <nav className="nav d-flex justify-content-between">
                    <Link className="p-2 text-muted" to='/category/world'>World</Link>
                    <Link className="p-2 text-muted" to='/category/environment'>Environment</Link>
                    <Link className="p-2 text-muted" to='/category/technology'>Technology</Link>
                    <Link className="p-2 text-muted" to='/category/design'>Design</Link>
                    <Link className="p-2 text-muted" to='/category/culture'>Culture</Link>
                    <Link className="p-2 text-muted" to='/category/business'>Business</Link>
                    <Link className="p-2 text-muted" to='/category/politics'>Politics</Link>
                    <Link className="p-2 text-muted" to='/category/opinion'>Opinion</Link>
                    <Link className="p-2 text-muted" to='/category/science'>Science</Link>
                    <Link className="p-2 text-muted" to='/category/health'>Health</Link>
                    <Link className="p-2 text-muted" to='/category/style'>Style</Link>
                    <Link className="p-2 text-muted" to='/category/travel'>Travel</Link>
                </nav>
            </div>
      </div>
    )
  
}

export default Blog