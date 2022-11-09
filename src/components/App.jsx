import { Component } from 'react';
import React from "react";
import { nanoid } from 'nanoid';
import ContactForm from "./ContactForm/ContactForm";
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';



class App extends Component {
  state = {
    contacts: [],
    filter: '',
  }

  formSubmit = ({ name, number }) => { 
    const contact = {
      id: nanoid(),
      name,
      number,
    }
  

  const searchContact = this.state.contacts.find(contact =>
    contact.name.toLowerCase() === (name.toLowerCase()))

    searchContact
      ? alert(`${name} is already in contacts`)
      : this.setState(({ contacts }) => ({ contacts: [contact, ...contacts], }))
}

changeFilter = e => { 
  this.setState({filter: e.currentTarget.value})
}
  
deleteContact = contactId => {
  this.setState(prevState => ({
    contacts: prevState.contacts.filter(contact => contact.id !== contactId),
  }));
};
  
componentDidMount = () => {
  if (localStorage.getItem('contacts')) {
    this.setState({ contacts: JSON.parse(localStorage.getItem('contacts')) });
  }
};

componentDidUpdate = (prevProps, prevState) => {
  if (this.state.contacts !== prevState.contacts) {
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  }
};
  
  render() { 
    const { filter } = this.state
    const normalizedFilter = this.state.filter.toLowerCase()
    const visibleContacts = this.state.contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter))
    
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmit} />
        
          <div>
          <h2>Contacts</h2>
          <Filter value={filter} onChange={this.changeFilter} />
          <ContactList contacts={visibleContacts} onDelete={this.deleteContact} />
          </div>
     </>
    )
  }
}


export default App