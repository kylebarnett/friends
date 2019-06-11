import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(res => { this.setState({ data: res.data }) })
  }
  render() {
    return (
      <div className="App">
      {this.state.data.map(something => (
        <div>{something.name}</div>
      ))}
      </div>
    );
  }
}

export default App;
