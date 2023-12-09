import React from 'react';
import ContactList from './ContactList';
import {getData} from '../utils/data';
import ContactInput from './ContactInput';

// /**
//  * @component
//  * @return {JSX.Element}
//  */
// function ContactApp() {
//   const contacts = getData();

//   return (
//     <div className="contact-app">
//       <h1>Daftar Kontak</h1>
//       <ContactList contacts={contacts} />
//     </div>
//   );
// }

/**
 * @class
 * @extends React.Component
 */
class ContactApp extends React.Component {
  /**
   * @constructor
   * @param {Object} props
   */
  constructor(props) {
    super(props);

    this.state = {
      contacts: getData(),
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddContactHandler = this.onAddContactHandler.bind(this);
  }

  /**
   * Delete contact event handler.
   * Handles contact deletion by updating the state.
   * @param {string} id Id of the contact to be deleted.
   */
  onDeleteHandler(id) {
    const contacts = this.state.contacts.filter((contact) => contact.id !== id);

    this.setState({
      contacts,
    });
  }

  /**
   * @param {Object} props
   * @param {string} props.name
   * @param {string} props.tag
   */
  onAddContactHandler({name, tag}) {
    this.setState((prevState) => {
      return {
        contacts: [
          ...prevState.contacts,
          {
            id: +new Date(),
            name,
            tag,
            imageUrl: '/images/default.jpg',
          },
        ],
      };
    });
  }

  /**
   * Render ContactApp component
   * @return {JSX.Element}
   */
  render() {
    return (
      <div className="contact-app">
        <h1>Aplikasi Kontak</h1>
        <h2>Tambah Kontak</h2>
        <ContactInput addContact={this.onAddContactHandler} />
        <h2>Daftar Kontak</h2>
        <ContactList
          contacts={this.state.contacts}
          onDelete={this.onDeleteHandler}
        />
      </div>
    );
  }
}

export default ContactApp;
