import React from "react";

const CommentDetails = props => {
  // props{ props: author }
  return (
    <div className="comment">
      <a href="/" className="ui circular image">
        <img alt="avatar" scr={props.avatar} />
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.author}
        </a>
        <div className="metadata">
          <span className="data">{props.timestamp}</span>
        </div>
        <div className="text"> {props.posttext}</div>
      </div>
    </div>
  );
};

export default CommentDetails;
