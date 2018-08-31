import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from "./components/header";
import Form from "./components/form"
import API from "./utils/API";


class App extends Component {
state = {
  result: {},
  search: ""
};


searchArticles = query => {
  API.search(query)
  .then(res => this.setState({ result: res.data}))
  .catch(err => console.log(err));
}

handleImputChange = event => {
  const value = event.target.value;
  const name = event.target.name;
  this.setState({
    [name]: value
  });
};

handleFormSubmit = event => {
  event.preventDefault()
  this.searchArticles(this.state.search)
}

  render() {
    return (
      <div>
        <Header />
        <Form 
         value={this.state.search}
         handleInputChange={this.handleInputChange}
         handleFormSubmit={this.handleFormSubmit}
        />
      </div>
  
  
    );
  }
}


export default App;
