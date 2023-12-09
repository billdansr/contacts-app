import React from 'react';
import PropTypes from 'prop-types';

/**
 * @class
 * @extends React.Component
 */
class ContactInput extends React.Component {
  /**
   * @constructor
   * @param {Object} props
   */
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      tag: '',
    };

    // bind(this)
    this.onNameChangeEventHandler = this.onNameChangeEventHandler.bind(this);
    this.onTagChangeEventHandler = this.onTagChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  /**
   * @param {*} event
   */
  onNameChangeEventHandler(event) {
    this.setState(() => {
      return {
        name: event.target.value,
      };
    });
  }

  /**
   * @param {*} event
   */
  onTagChangeEventHandler(event) {
    this.setState(() => {
      return {
        tag: event.target.value,
      };
    });
  }

  /**
   * @param {*} event
   */
  onSubmitEventHandler(event) {
    event.preventDefault();

    this.props.addContact(this.state);
  }

  /**
   * @return {JSX.Element}
   */
  render() {
    return (
      <form className="contact-input" onSubmit={this.onSubmitEventHandler}>
        <input
          type="text"
          placeholder="Nama"
          value={this.state.name}
          onChange={this.onNameChangeEventHandler} />
        <input
          type="text"
          placeholder="Tag"
          value={this.state.tag}
          onChange={this.onTagChangeEventHandler} />
        <button type="submit">Tambah</button>
      </form>
    );
  }
}
ContactInput.propTypes = {
  addContact: PropTypes.func.isRequired,
};

export default ContactInput;
