import React, { Component } from 'react';
import './App.css';
import PostList from './PostList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Relay Blogging!</h1>
        </header>
        <PostList
            posts={[
                {
                    title: 'Post 1',
                    content: 'This is a blog post!',
                },
                {
                    title: 'Post 2',
                    content: 'This is another blog post!',
                },
            ]}
        />
      </div>
    );
  }
}

export default App;
