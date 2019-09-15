import React from 'react';
import './App.css';
import Loading from './Loading';
import { getSubreddit } from './subredditapi';
import Post from './Post';



class App extends React.Component {

  constructor(){
    super();
    this.state = {
      posts:[],
      loading:true
    };
  }

  async componentDidMount() {
    
    let posts = await getSubreddit('art');

    this.setState({ 
      posts : posts.data.children, 
      subredditSubscribers: posts.data.children[0].data.subreddit_subscribers.toLocaleString('en'),
      subreddit: posts.data.children[0].data.subreddit,
      loading:false });
  }

  render() {
    return (
        <div>
          <h3>You're on the {this.state.subreddit} page. </h3>
          <p>Subreddit Subscribers: {this.state.subredditSubscribers}</p>
         {this.state.loading ? <Loading/> : this.state.posts.map((post) => {
            return <Post post={post} key={post.data.id} />
          })}
        </div>
    );
  }
}

export default App;