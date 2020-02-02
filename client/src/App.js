import React, { Component } from 'react';
import HomePage from "./components/HomePage";
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
          <HomePage />
      </div>
    );
  }
}

export default App;
