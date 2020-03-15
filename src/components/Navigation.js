import React from 'react';
import { Link } from 'react-router-dom'; // Import so that I can set up my Navigation links


const Navigation = () => {
  const navStyle = {
    display: 'flex',
    justifyContent: 'space-evenly',
    margin: '20px 0 20px 0',
    color: 'dodgerblue',
    backgroundColor: '#F0FFF0',
    marginBottom: '30px',

  };

  const h1Style = {
    fontSize: '2.2rem',
    color: '#5F9EA0',
    marginTop: '20px'
  };

  const linksStyle = {
    color: 'navy',
    fontSize: '1.4rem',
  };

  return (
     <div>
       <h1 style={h1Style}>React Router Mini</h1>
      <div className="nav" style={navStyle}>
        <div>
          <Link to='/' style={linksStyle}>Home</Link> {/* Changed the anchor tag to a Link component and specified the home route to navigate to */}
        </div>
        <div>
          <Link to='/about' style={linksStyle}>About</Link> {/* Changed the anchor tag to a Link component and specified the about route to navigate to */}
        </div>
        <div>
          <Link to='/contact' style={linksStyle}>Contact</Link> {/* Changed the anchor tag to a Link component and specified the contact route to navigate to */}
        </div>
      </div>
     </div>
  );
};

export default Navigation;
