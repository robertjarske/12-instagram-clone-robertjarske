import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import Like from '../Likes';
import CommentList from '../comments/CommentList';
import Form from '../comments/Form';
import user from '../Header/user.png';
import comment from '../Photo/message-circle.svg';
import './style.css';


const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)'
  },
  content : {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      modalIsOpen: false
     }

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }
  
  render() {
    const { photo } = this.props;

    return ( 
      <div>
        <div className="App-grid__photoHolder" style={{backgroundImage: `url('${photo.imageUrl}')`}}
        onClick={this.openModal}>
        
        </div>
        <Modal
        isOpen={this.state.modalIsOpen}
        onRequestClose={this.closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        >

        <div className="modal">
          <div className="left_modal">
            <div className="photoHeader__modal">
            <img className="avatar" src={user} alt="" />
            <p>{photo.uploader}</p>
            </div>
            <div className="App-grid__modalPhoto" style={{backgroundImage: `url('${photo.imageUrl}')`}}></div>
            <div className="likes_modal">
            <Like photo={photo} likes={photo.likes.length}/>
            </div>
            </div>
            <div className="right_modal">
            <button onClick={this.closeModal}>X</button>
            <div className="photoFooter_modal">
                <div className="icon_modal">  
                  <img
                    src={comment}
                    alt=""
                  />
                </div>
                <div className="comments">
                  <CommentList comments={photo.comments} />
                </div>
              </div>
          </div>
        </div>
      </Modal>
      </div>
     )
  }
}

const mapStateToProps = state => {
  return { photos: state.photoReducer.photos, user: state.authReducer.user };
};

const mapDispatchToProps = {
//
}

export default connect(mapStateToProps, mapDispatchToProps)(Grid);