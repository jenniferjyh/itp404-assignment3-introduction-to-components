import React from 'react';
import './App.css';
import Loading from './Loading';
import { getSubreddit } from './subredditapi';
import GetPosts from './GetPosts';
import SearchForm from './SearchForm';


class App extends React.Component {

  constructor(){
    super();
    this.state = {
      posts:[],
      previousSearches:[],
      count: 0,
      loading:false
    };
  }

  postClick = async () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  };

  handleSearch = async (searchValue) => {
    this.setState({ loading: true });

    let posts = await getSubreddit(searchValue)

    this.setState(oldState => ({ 
      someValue: oldState.someValue + 1,
      posts : posts.data.children, 
      subredditSubscribers: posts.data.children[0].data.subreddit_subscribers.toLocaleString('en'),
      subreddit: posts.data.children[0].data.subreddit,
      previousSearches: [...oldState.previousSearches, searchValue],
      loading:false }))
  };

  applyPreviousSearch = async (previousSearchValue) => {
    this.setState({ loading: true });

    let previousPosts = await getSubreddit(previousSearchValue)

    this.setState(oldState => ({ 
      someValue: oldState.someValue + 1,
      posts : previousPosts.data.children, 
      subredditSubscribers: previousPosts.data.children[0].data.subreddit_subscribers.toLocaleString('en'),
      subreddit: previousPosts.data.children[0].data.subreddit,
      previousSearches: [...oldState.previousSearches],
      loading:false }))
      //which part of this function is checking whether a value has been searched before?
  };


  render() {
    return (
      <div>
        <SearchForm onSearch={this.handleSearch} />
        {this.state.loading && <Loading/>}
        <p>Read Count: {this.state.count} </p>
        <div>
         <p>Subreddit Subscribers: {this.state.subredditSubscribers}</p>
         <p>Previous Searches:</p> {this.state.previousSearches.map((term) => {
             return (
              <button type="button" onClick={this.applyPreviousSearch.bind(this, term)}>
              {term}
               </button>
             );
          })}
          <GetPosts posts={this.state.posts} countProp = {this.postClick} /> 
        
        </div>
      </div>
       
    );
  }
}

export default App;