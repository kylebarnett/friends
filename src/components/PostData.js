import React from 'react';

class PostData extends React.Component {
  constructor() {
    super();
    this.state = {
      studentInfo: {
        name: "",
        age: "",
        email: ""
      }
    }
  }

  handleChange = e => {
    this.setState({
      studentInfo: {
        ...this.state.studentInfo,
        [e.target.name]: e.target.value
      }
    })
  }

  addData = e => {
    e.preventDefault();
    this.props.addData(this.state.studentInfo)
  }

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={this.handleChange}
            value={this.state.studentInfo.name}
          />
          <input
            type="text"
            name="age"
            placeholder="Age"
            onChange={this.handleChange}
            value={this.state.studentInfo.age}
          />
          <input
            type="text"
            name="email"
            placeholder="Emial"
            onChange={this.handleChange}
            value={this.state.studentInfo.email}
          />
        </form>
        <button onClick={this.addData}>Add to Form!</button>
      </div>
    );
  }
}

export default PostData;