import { Component } from 'react';
import { nanoid } from 'nanoid';

import FormContacts from './FormContacts/FormContacts';

class App extends Component {
  state = {
    contacts: [],
  };

  addContact = name => {
    const contact = {
      id: nanoid(5),
      name,
    };

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
    console.log(this.state.contacts);
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#010101',
        }}
      >
        <h1>Phoneboock</h1>
        <FormContacts onSubmit={this.addContact} />
      </div>
    );
  }
}

export default App;
