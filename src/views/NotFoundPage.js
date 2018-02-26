import React from 'react';
import { Link } from 'react-router-dom';
import { NotFound } from '../components';

const NotFoundPage = (error) => {
  return (
    <div className="App-NotFoundPage__container"> 
    <NotFound />
    </div>
  )
}

export default NotFoundPage;