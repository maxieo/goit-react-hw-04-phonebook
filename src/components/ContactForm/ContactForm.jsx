import { nanoid } from "nanoid"
import React, {useState} from "react"
import PropTypes from 'prop-types'



export default function ContactForm({ onSubmit }) { 
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  
  
const handleNameChange = e => { 
  setName(e.target.value)
  }
  
const handleNumberChange = e => { 
  setNumber(e.target.value)
}

const handleSubmit = e => { 
  e.preventDefault()
  onSubmit({ name, number })
  reset()
}
const reset = () => { 
  setName ('')
  setNumber ('')
}

  
return (
  <form onSubmit={handleSubmit}>
    <label htmlFor={nanoid()}>
      Name
    <input
      type="text"
      name="name"
      onChange={handleNameChange}
      value={name}
      id = {nanoid()}
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      required
      />
    </label>
    
    <label htmlFor={nanoid()}>
      Number
    <input
      type="tel"
      name="number"
      onChange={handleNumberChange}
      value={number}
      id = {nanoid()}
      pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
      title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
      required
      />
      </label>
    <button type="submit">
      Add contact
    </button>
  </form>
)
}


ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}