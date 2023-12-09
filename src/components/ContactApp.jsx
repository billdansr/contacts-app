import React from 'react';
import ContactList from './ContactList';
import {getData} from '../utils/data';

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
   * Render ContactApp component
   * @return {JSX.Element}
   */
  render() {
    return (
      <div className="contact-app">
        <h1>Daftar Kontak</h1>
        <ContactList
          contacts={this.state.contacts}
          onDelete={this.onDeleteHandler}
        />
      </div>
    );
  }
}

export default ContactApp;
