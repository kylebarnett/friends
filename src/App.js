import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import PostData from './components/PostData';

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

  addData = info => {
    axios.post('http://localhost:5000/friends', info)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }
  render() {
    return (
      <div className="App">
        {this.state.data.map(something => (
          <div>{something.name} {something.age} {something.email}</div>
        ))}
        <PostData addData={this.addData}/>
      </div>
    );
  }
}

export default App;
