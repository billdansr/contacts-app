import React from 'react';
import PropTypes from 'prop-types';
import ContactItem from './ContactItem';

/**
 * @component
 * @param {Array} contacts
 * @param {Object} props
 * @param {imageUrl} props.imageUrl
 * @param {name} props.name
 * @param {tag} props.tag
 * @return {JSX.Element}
 */
function ContactList({contacts}) {
  return (
    <div className="contact-list">
      {
        contacts.map((contact) => (
          <ContactItem {...contact} key={contact.id} />
        ))
      }
    </div>
  );
}
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
      PropTypes.shape(
          {
            imageUrl: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            tag: PropTypes.string.isRequired,
          },
      ),
  ).isRequired,
};

export default ContactList;
