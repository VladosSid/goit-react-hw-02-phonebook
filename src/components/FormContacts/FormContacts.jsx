import { Component } from 'react';

import { Form, Label, InputContact } from './FormContacts.styled';

class FormContacts extends Component {
  state = {
    name: '',
  };

  recordContact = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handlSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.name);

    this.reset();
  };

  reset = () => {
    this.setState({ name: '' });
  };

  render() {
    return (
      <Form onSubmit={this.handlSubmit}>
        <Label htmlFor="name">
          Имя контакта
          <InputContact
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.recordContact}
          />
        </Label>
        <button type="submit">Сохранить</button>
      </Form>
    );
  }
}
export default FormContacts;
