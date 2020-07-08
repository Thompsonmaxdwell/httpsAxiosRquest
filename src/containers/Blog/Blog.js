import React, { Component } from 'react';
// import axios from 'axios';
import axios  from '../../axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    state = {
        posts :[],
        selectedPostId: null,
        error : false
    }

 componentDidMount (){
   
    // axios.get('https://jsonplaceholder.typicode.com/photos?_limit=6')

   axios.get('/photos')
        .then(res =>{
            const posts = res.data.slice(0, 6)
            const updatePosts = posts.map(post => {
                return {
                    ...post,
                    Author: 'Thompson'
                }
            })

            this.setState({ posts : updatePosts })
        }) 
        .catch(err => {
             this.setState({error:  true})
        })
    }

postSelectedHandler = (id)=>{
 
    this.setState({selectedPostId : id})
    console.log(id)
}
    render () {

        let posts = <p style={{textAlign :'center'}}>Some thing Went Wrong</p>

        if(!this.state.error){

            posts = this.state.posts.map(post  =>{
                return <Post 
                    key={post.id} 
                    title = {post.title}
                    Author = {post.Author}
                    clicked = {() => this.postSelectedHandler(post.id) }/>
         })

            
        }
   
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section> 
                    <FullPost id = {this.state.selectedPostId}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;