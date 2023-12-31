import React from 'react';
import PropTypes from 'prop-types';

/**
 * @component
 * @param {Object} props
 * @param {string} props.id
 * @param {func} props.onDelete
 * @return {JSX.Element}
 */
function DeleteButton({id, onDelete}) {
  return (
    <button className="contact-item__delete" onClick={() => onDelete(id)}>
      X
    </button>
  );
}
DeleteButton.propTypes = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default DeleteButton;
