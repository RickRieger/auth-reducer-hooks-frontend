import React from 'react';
import { Link } from 'react-router-dom';
function NotFound() {
  return (
    <div>
      404 - Sorry what you are looking for does not exist, please go back to
      <Link to='/'>Home Page</Link>
    </div>
  );
}

export default NotFound;
