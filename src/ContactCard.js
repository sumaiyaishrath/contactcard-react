import React from 'react';

function ContactCard(props) {
  return (
    <div
      style={{
        border: '2px solid blue',
        margin: '2px',
        padding: '5px',
      }}
    >
      <p>Name:{props.Name}</p>
      <p>Address:{props.Address}</p>
      <p>College:{props.College}</p>
    </div>
  );
}
export default ContactCard;
