import React, { Component } from "react";
import ArticleItem from "./ArticleItem";

class Articles extends Component {

  render(){
    let articleItems;
    if(this.props.articles){
      articleItems = this.props.articles.map(article => {
        // console.log(project);
        return(
          < ArticleItem key={article.title} article={article}/>
        );
      });
    }
    return (
      <div className="Projects">
        {articleItems}

      </div>
    );
  }


}
export default Articles
