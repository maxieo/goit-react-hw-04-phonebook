import React from "react";
import PropTypes from 'prop-types'
import ContactItem from "components/ContactItem/ContactItem";

const ContactList = ({ contacts, onDelete }) => { 
  return (
    <ul>
      {contacts.map(({ id, name, number }) =>
        <ContactItem
          key={id}
          id={id}
          name={name}
          number={number}
          onDelete={onDelete}
        />
      )}
    </ul>
  )
}


ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
        
      }
    )
  ), onDelete: PropTypes.func.isRequired
}

export default ContactList