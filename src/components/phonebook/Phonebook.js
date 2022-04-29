import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './Phonebook.module.css';

import { useState, useEffect } from 'react';

class Phonebook extends React.Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };
  handleSubmit = event => {
    event.preventDefault();

    const newContact = {
      name: this.state.name,
      id: uuidv4(),
      number: this.state.number,
    };

    this.props.onSubmit(newContact);
    this.reset();
  };
  reset = () => {
    this.setState({ name: '', number: '' });
  };
  render() {
    return (
      <container>
        <form onSubmit={this.handleSubmit}>
          Phonebook
          <label>
            {' '}
            Name
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <label>
            {' '}
            Number
            <input
              type="text"
              name="number"
              value={this.state.number}
              onChange={this.handleChange}
            />
          </label>
          <button
          // className={s.button}
          >
            Add contact
          </button>
        </form>

        <h2>список контактов :</h2>
        <ul></ul>
      </container>
    );
  }
}

export default Phonebook;
