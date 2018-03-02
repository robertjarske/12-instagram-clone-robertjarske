import React from "react";
import user from '../Header/user.png';

const CommentList = ({ comments }) => (
  <ul>
  {
    comments.length > 0  ?
        comments.map(comment => (
          <li key={comment.id}>
            <img src={user} alt=""/>
            <p>
              {comment.author}
            </p> 
            <p>
              {comment.content}
            </p>
          </li>
        )) : <p style={{opacity: 0.5}}>No comments yet…</p>
  }
  </ul>
);

export default CommentList;