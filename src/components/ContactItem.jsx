import React from 'react';
import PropTypes from 'prop-types';
import ContactItemImage from './ContactItemImage';
import ContactItemBody from './ContactItemBody';

/**
 * @component
 * @param {Object} props
 * @param {string} props.imageUrl
 * @param {string} props.name
 * @param {string} props.tag
 * @return {JSX.Element}
 */
function ContactItem({imageUrl, name, tag}) {
  return (
    <div className="contact-item">
      <ContactItemImage imageUrl={imageUrl} />
      <ContactItemBody name={name} tag={tag} />
    </div>
  );
}
ContactItem.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
};

export default ContactItem;
