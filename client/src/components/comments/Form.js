import React, { Component } from "react";
import { connect } from "react-redux";
import uuidv1 from "uuid";
import { Redirect, Route } from 'react-router-dom';
import { addComment } from "../../actions";
import "./style.css";

const mapDispatchToProps = dispatch => {
  return {
    addComment: comment => dispatch(addComment(comment))
  };
};

class ConnectedForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      author: this.props.user.info.name,
      content: "",
      redirect: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.props.user.isLoggedIn) {
      const { content } = this.state;
      const id = uuidv1();
      const { author } = this.state;
      const photoId = this.props.photoId;

      this.props.addComment({ author, content, id, photoId });
      
      return this.setState({ content: "" });
    }
    
    return this.setState({redirect: true})

  }

  render() {
    if (this.state.redirect) {
      return <Redirect push to="/signin" />;
    }
    const { content } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="App-commentsForm">
          <label htmlFor="content">Comment</label>
          <textarea
            name="content"
            id="content"
            cols="30"
            rows="10"
            value={content}
            onChange={this.handleChange}
          />
        </div>

        <button className="App-commentsForm__btn" type="submit">Submit</button>
      </form>
    );
  }
}

const Form = connect(null, mapDispatchToProps)(ConnectedForm);

export default Form;
