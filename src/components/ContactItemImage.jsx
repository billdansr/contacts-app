import React from 'react';
import PropTypes from 'prop-types';

/**
 * @component
 * @param {Object} props Component's props
 * @param {string} props.imageUrl Image source imageUrl
 * @return {JSX.Element} React component
 */
function ContactItemImage({imageUrl}) {
  return (
    <div className="contact-item__image">
      <img src={imageUrl} alt="profile-picture" />
    </div>
  );
}
ContactItemImage.propTypes = {
  imageUrl: PropTypes.string.isRequired,
};

export default ContactItemImage;
