import React, { Component } from 'react';
import axios from '../../../axios';
import Post from '../../../components/Post/Post';
import './Posts.css';
import { Route } from 'react-router-dom';
import FullPost from '../FullPost/FullPost';

class Posts extends Component {
	state = {
		posts: []
	};

	componentDidMount() {
		//  axios.get('https://jsonplaceholder.typicode.com/photos?_limit=6')
		axios.get('/photos')
			.then((res) => {
				const posts = res.data.slice(0, 6);
				const updatePosts = posts.map((post) => {
					return {
						...post,
						Author: 'Thompson'
					};
				});
				this.setState({ posts: updatePosts });
			})
			.catch((err) => {
				//  this.setState({error:   true})
				console.log(err);
			});
	}

	postSelectedHandler = (id) => {
		this.props.history.push({ pathname: '/posts/' + id });
	};

	render() {
		let posts = <p style={{ textAlign: 'center' }}>Some thing Went Wrong</p>;
		if (!this.state.error) {
			posts = this.state.posts.map((post) => {
				return (
					//   <Link to={'/post/' + post.id}   key={post.id}>
					<Post
						key={post.id}
						title={post.title}
						Author={post.Author}
						clicked={() => this.postSelectedHandler(post.id)}
					/>
					//   </Link>
				);
			});
		}
		return (
			<div>
				<section className="Posts">{posts}</section>
				<Route path={this.props.match.url + '/:id'}  component={FullPost} /> 
			</div>
		);
	}
}

export default Posts;
