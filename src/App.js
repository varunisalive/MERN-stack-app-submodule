import React from 'react';
import axios from 'axios';

class App extends React.Component{

  state = {
    title: "",
    body: ""
  }

  handleChange = (event)=>{
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value
    })
  }

  submit = (event) => {
    event.preventDefault();

    const payload = {
      title: this.state.title,
      body: this.state.body
    };

    axios({
      url:'/api/save',
      method: 'POST',
      data: payload
    })
      .then(() => {
        console.log("Data has been sent to the server successfully");
      })
      .catch((err) => {
        console.log("Error detected");
      });
  }

  

  render() {
    return(
      <div>
        <h2>Welcome to my app</h2>
        <form onSubmit={this.submit} >
          <div className="form-input">
            <input 
              type = "text"
              name = "title"
              placeholder = "Enter title"
              value = {this.state.title}
              onChange={this.handleChange}
              />
          </div>
          <div className="form-input">
            <textarea
              name = "body"
              placeholder = "Enter whatever you want"
              cols = "30"
              rows = "10"
              value = {this.state.body}
              onChange = {this.handleChange}
              ></textarea>
          </div>
          <button>submit</button>
        </form>
      </div>
    )
  }

}

export default App;
