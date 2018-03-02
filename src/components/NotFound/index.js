import React from 'react';
import { Link } from 'react-router-dom';


const NotFound = () => (
  <section className="App-error">
    <h2>Sorry, couldn't find what you are looking for</h2>
    <p>The link you followed appears to be broken or doesn't exist. Please try again or go back to the <Link to="/">homepage</Link></p>
  </section>
)

export default NotFound;