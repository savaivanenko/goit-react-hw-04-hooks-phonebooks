import React from 'react'; 

const ContactList = ({contacts, onDeleteContact}) => (
  <ul>
    {contacts.map(({id, name, number }) =>(
      <li key={id}>
        <span>{name}:</span>
        <span>{number}</span>
        <button type="button" onClick={()=>onDeleteContact(id)}>delete</button>

      </li>
    ))}
  </ul>
);
export default ContactList
