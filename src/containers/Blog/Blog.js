import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';


import './Blog.css';
import Posts from './Posts/Post';
import asynComponent from '../../hoc/asyncComponent';
// import NewPost from './NewPost/NewPost';

// This is Called Lazy Laoding for App performance
const AsyncNewPost = asynComponent(()=>{
    return import('./NewPost/NewPost')
})


class Blog extends Component {
    render () {
        return (
            <div>
                <header className="Blog">
                    <nav>
                    <ul>
                        <li><NavLink exact  to="/posts/" 
                           activeClassName="my_active" 
                           activeStyle={{color:'red'}}>Posts</NavLink >
                        </li>
                        <li><NavLink  to={{
                            pathname:"/new-posts",
                            hash: "#submit",
                            search:"?quick-submit=true"
                        }}>New Posts  </NavLink ></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                   <Route path="/new-posts"  component={AsyncNewPost}/> 
                   <Route path="/posts"  component={Posts}/> 
                   {/*<Redirect from="/" to="posts/" />*/}
                   {/* <Route path="/"  component={Posts}/> */} 

                </Switch>


             </div>
        );
    }
}

export default Blog;