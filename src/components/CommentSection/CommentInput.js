// You do not need to do anything in this file
import React from 'react';

const CommentInput = props => {
  const addComment = (e) => {
    e.preventDefault();
    props.setComments([...props.comments, {username: `User${Math.floor(Math.random() * Math.floor(1000))}`, text: e.target.children[0].value}])
    e.target.children[0].value = "";
    console.log(props.comments);
  }
  return (
    <form className="comment-form" onSubmit={addComment}>
      <input
        type="text"
        value={props.comment}
        placeholder="Add comment... "
        onChange={props.changeComment}
      />
    </form>
  );
};

export default CommentInput;
