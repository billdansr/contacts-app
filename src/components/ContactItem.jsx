import React from 'react';
import PropTypes from 'prop-types';
import ContactItemImage from './ContactItemImage';
import ContactItemBody from './ContactItemBody';
import DeleteButton from './DeleteButton';

/**
 * @component
 * @param {Object} props
 * @param {string} props.imageUrl
 * @param {string} props.name
 * @param {string} props.tag
 * @return {JSX.Element}
 */
function ContactItem({imageUrl, name, tag, id, onDelete}) {
  return (
    <div className="contact-item">
      <ContactItemImage imageUrl={imageUrl} />
      <ContactItemBody name={name} tag={tag} />
      <DeleteButton id={id} onDelete={onDelete} />
    </div>
  );
}
ContactItem.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactItem;
