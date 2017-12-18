import React, { Component } from 'react';
import Articles from './Components/Articles';
import $ from "jquery";
import logo from './001_image.jpg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      articles: []
    }
  }
  getArticles(){
    $.ajax({
      url: "http://localhost:3000/articles",
      dataType: "json",
      cache: false,
      success: function(data){
        this.setState({articles: data}, function(){
          console.log(this.state);
        });
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
      }
    });

  }

  componentWillMount(){
    this.getArticles();
  }
  componentDidMount(){
    this.getArticles();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to My News App Dashboard </h1>
        </header>
        <p className="App-intro">
          <Articles articles={this.state.articles}/>
        </p>


      </div>
    );
  }
}

export default App;
