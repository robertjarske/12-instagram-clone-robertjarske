import React, {Component} from 'react';
import user from '../Header/user.png';
import heart from './heart.svg';
import comment from './message-circle.svg';
import './style.css';

class Photo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      textShow: false
    }
  }

  showCommentField() {
    this.setState(prevState => ({
      textShow: !prevState.textShow
    }))
  }

  render() {
    return (
      <div className="App-photo">
        <div className="photoHeader">
          <img className="avatar" src={user} alt=""/>
          <p>TM</p>
        </div>
        <img className="App-photo__photo" src={this.props.photo} alt=""/>
        <div className="photoFooter">
          <div className="icons">
            <div className="likes">
              <img src={heart} alt=""/> 
              <p>123 likes</p>
            </div>
            <img onClick={this.showCommentField.bind(this)} src={comment} alt=""/>
          </div>
          <div className="comments">
            <ul>
              <li><img src={user} alt=""/><p>Robert</p><p>Cool mayn!</p></li>
              <li><img src={user} alt=""/><p>Kenta</p><p>Cool brah!</p></li>
              <li><img src={user} alt=""/><p>Stoffe</p><p>Cool fam!</p></li>
              <li><img src={user} alt=""/><p>Gurra</p><p>Cool duude!</p></li>
              <li><img src={user} alt=""/><p>Nils</p><p>Excellent my good sir!</p></li>
            </ul>
            {this.state.textShow ?
            <form>
            <textarea name="comment" id="comment" cols="30" rows="10"></textarea>
            <button type="submit">Send ya comment</button>
            </form>
          : ''
          }
          </div>
        </div>
      </div>
    )
  }
}

export default Photo;