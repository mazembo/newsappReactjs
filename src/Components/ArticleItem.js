import React, { Component } from "react";

class ArticleItem extends Component {


  render(){
    return (
      <li className="Project">
        <strong>{this.props.article.title}</strong>
        <p>{this.props.article.message}</p>
      </li>
    );
  }



}
export default ArticleItem;
