import React from 'react';
import { Link } from 'react-router-dom'; // Import so that I can set up my Navigation links

const Navigation = () => {
  return (
    <div>
      <div className="App">
        <h1>React Router Mini</h1>
        <div>
          <Link to='/'>Home</Link> {/* Changed the anchor tag to a Link component and specified the home route to navigate to */}
        </div>
        <div>
          <Link to='/about'>About</Link> {/* Changed the anchor tag to a Link component and specified the about route to navigate to */}
        </div>
        <div>
          <Link to='/contact'>Contact</Link> {/* Changed the anchor tag to a Link component and specified the contact route to navigate to */}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
