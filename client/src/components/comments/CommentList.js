import React from "react";
import user from '../Header/user.svg';
import moment from 'moment';
import './style.css';

const CommentList = ({ comments }) => (
  <ul className="wrap">
  {
    comments.length > 0  ?
        comments.map(comment => (
          <li className="commentBody" key={comment._id}>
            <div className="commentHeader">
              <img className="commentUser" src={comment.authorAvatar} alt=""/>
              <p className="commentAuthor">
                {comment.author}
              </p>
            </div>
            <p className="comment_created">{moment(comment.createdAt).fromNow()}</p>
            <p className="commentContent">
              {comment.content}
            </p>
          </li>
        )) : <p style={{opacity: 0.5}}>No comments yet…</p>
  }
  </ul>
);

export default CommentList;