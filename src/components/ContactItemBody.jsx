import React from 'react';
import PropTypes from 'prop-types';

/**
 * ContactItemBody component is a simple React component
 * for the body of a contact item.
 * @component
 * @param {Object} props The properties of the component
 * @param {string} props.name The name of contact
 * @param {string} props.tag The tag for the contact's username
 * @return {JSX.Element} React component
 * @example
 * // Example usage of ContactItemBody
 * <ContactItemBody name="Dimas Saputra" tag="dimasmds" />
 */
function ContactItemBody({name, tag}) {
  return (
    <div className="contact-item__body">
      <h3 className="contact-item__title">{name}</h3>
      <p className="contact-item__username">@{tag}</p>
    </div>
  );
}
ContactItemBody.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
};

export default ContactItemBody;
