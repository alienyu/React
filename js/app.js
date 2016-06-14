'use strict';

require('../style.css');

var React = require('react');

var data = [
  {author: "Pete Hunt", text: "This is one comment"},
  {author: "Jordan Walke", text: "This is *another* comment"}
];
var node = document.createElement('div');
document.body.appendChild(node);

var CommentBox = React.createClass({
  render: function() {
    return (
        <div className="commentBox">
          <h1>Comments</h1>
          <CommentList data={this.props.data} />
          <CommentForm />
        </div>
    );
  }
});

var CommentForm = React.createClass({
  render: function(){
    return (
        <div>form</div>
    )
  }
});

var CommentList = React.createClass({
  render: function() {
    var commentNodes = this.props.data.map(function (comment) {
      return (
          <Comment author={comment.author} text={comment.text} />
      );
    });
    return (
        <div className="commentList">
          {commentNodes}
        </div>
    );
  }
});

var Comment = React.createClass({
  render: function() {
    return (
        <div className="comment">
          <h2 className="commentAuthor">
            {this.props.author}
          </h2>
          {this.props.text}
        </div>
    );
  }
});

React.render(
    <CommentBox data={data} />,node
);
