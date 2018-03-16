import React from "react";
import user from '../Header/user.png';
import moment from 'moment';
import './style.css';

const CommentList = ({ comments }) => (
  <ul className="wrap">
  {
    comments.length > 0  ?
        comments.map(comment => (
          <li className="commentBody" key={comment._id}>
            <div className="commentHeader">
              <img className="commentUser" src={user} alt=""/>
              <p className="commentAuthor">
                {comment.author}
              </p>
            </div>
            <p>{moment(comment.createdAt).fromNow()}</p>
            <p className="commentContent">
              {comment.content}
            </p>
          </li>
        )) : <p style={{opacity: 0.5}}>No comments yet…</p>
  }
  </ul>
);

export default CommentList;