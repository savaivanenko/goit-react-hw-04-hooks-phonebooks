import React from 'react';
import Phonebook from './components/phonebook/Phonebook';
import ContactList from './components/phonebook/ContactList';
import Filter from './components/phonebook/Filter';

export default class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    // name: '',
    filter: '',
  };
  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contacts => contacts.id !== id),
    }));
  };

  addContact = newCont => {
    const findContact = this.state.contacts.find(
      contacts => contacts.name === newCont.name
    );
    if (findContact) {
      alert(`${newCont.name} уже есть`);
      return;
    }
    this.setState({ contacts: [...this.state.contacts, newCont] });
    console.log(this.state.contacts);
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  // deleteContact = id => {
  //   this.setState(prevState => ({
  //     contacts: prevState.contacts.filter(contacts => contacts.id !== id),
  //   }));
  // };

  componentDidMount(prevProps, prevState) {
    const contacts = localStorage.getItem('contacts');
    const parseContacts = JSON.parse(contacts);
    if (parseContacts) {
      this.setState({ contacts: parseContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const { filter } = this.state;
    const normalizeFilter = this.state.filter.toLowerCase();
    const visibleContact = this.state.contacts.filter(contacts =>
      contacts.name.toLowerCase().includes(normalizeFilter)
    );

    return (
      <div>
        <Phonebook onSubmit={this.addContact} />

        <Filter value={filter} onChange={this.changeFilter} />

        <ContactList
          contacts={visibleContact}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
