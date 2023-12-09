import React from 'react';
import PropTypes from 'prop-types';
import ContactItem from './ContactItem';

/**
 * @component
 * @param {Object} props
 * @param {Array} props.contacts
 * @param {func} props.onDelet
 * @return {JSX.Element}
 */
function ContactList({contacts, onDelete}) {
  return (
    <div className="contact-list">
      {
        contacts.map((contact) => (
          <ContactItem
            key={contact.id}
            id={contact.id}
            onDelete={onDelete}
            {...contact} />
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
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;
