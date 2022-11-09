import React from 'react'
import PropTypes from 'prop-types'



const ContactItem = ({ id, name, number, onDelete }) => {
  return (
    <ul>
      <p>
        {name}: {number}
      </p>
      <button type="button" onClick={() => onDelete(id)}>
        Delete Contact
      </button>
    </ul>
  )
}

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired
}

export default ContactItem