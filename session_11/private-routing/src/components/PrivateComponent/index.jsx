import React from 'react';

class PrivateComponent extends React.Component {
  render() {
    return (
      <div>Super secret information
        <img
          alt='top secret'
          style={{ maxWidth: '400px' }}
          src="https://res.cloudinary.com/loungebuddy/image/upload/w_1600,q_75,e_blur:5,c_limit/v1457629714/blog/q4bnxmsg0mo6dhukywlr.jpg"
        />
      </div>
    );
  }
}

export default PrivateComponent;