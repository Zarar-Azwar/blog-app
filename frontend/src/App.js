import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Layout from './hocp/Layout';
import Blog from './components/Blog';
import Category from './components/Category';
import Home from './components/Home';
import BlogDetails from './components/BlogDetails';
function App() {
  return (
    <>
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/blog" component={Blog}></Route>
          <Route exact path="/Category/:id" component={Category}></Route>
          <Route exact path="/blog/:id" component={BlogDetails}></Route>

        </Routes>
      </Layout>
    </Router>
    </>
  );
}

export default App;
