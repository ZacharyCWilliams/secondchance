import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';


// async function fetchUsers() {
//   try {
//     const res = await fetch('/api/hello');
//     const json = await res.json();
//     console.log( json );
//   }
//   catch (error) { console.log(error) }
// };

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      test: 'none'
    }

  }

  fetchUsers = () => {
    fetch('/api')
      .then(res => res.json())
      .then(results => console.log(results));
  }

  componentDidMount() {
    this.fetchUsers();
  }

  render() {
    return (
      <div className="App">
        <div>
          <h1>Home Page</h1>
        </div>
      </div>
    );
  }
}

export default App;
