import React from "react";

class ContactMe extends React.Component {
  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <label>First Name:</label>
          <input type="text" />
          <label>Last Name:</label>
          <input type="text" />
          <label>Email Address:</label>
          <input type="text" />
          <label>Phone Number:</label>
          <input type="text" />
          <label>Comment:</label>
          <input type="text" />
        </form>
      </div>
    );
  }
}
export default ContactMe;
