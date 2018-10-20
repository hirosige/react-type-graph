import * as React from 'react';
import './App.css';

import PostForm from './components/postForm';
import PostList from './components/postList';
import logo from './logo.svg';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <PostForm />
        <PostList />
      </div>
    );
  }
}

export default App;
