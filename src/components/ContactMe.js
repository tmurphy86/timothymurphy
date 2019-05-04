import React from "react";
// import { jQuery as $ } from "jquery";

class ContactMe extends React.Component {
  state = {
    fname: "",
    lname: "",
    address: "",
    number: "",
    comment: ""
  };

  onFormSubmit = event => {
    event.preventDefault();
  };

  //   $('.ui.form')
  //   .form({
  //     fields: {
  //       name: {
  //         identifier: 'name',
  //         rules: [
  //           {
  //             type   : 'empty',
  //             prompt : 'Please enter your name'
  //           }
  //         ]
  //       },
  //       skills: {
  //         identifier: 'skills',
  //         rules: [
  //           {
  //             type   : 'minCount[2]',
  //             prompt : 'Please select at least two skills'
  //           }
  //         ]
  //       },
  //       gender: {
  //         identifier: 'gender',
  //         rules: [
  //           {
  //             type   : 'empty',
  //             prompt : 'Please select a gender'
  //           }
  //         ]
  //       },
  //       username: {
  //         identifier: 'username',
  //         rules: [
  //           {
  //             type   : 'empty',
  //             prompt : 'Please enter a username'
  //           }
  //         ]
  //       },
  //       password: {
  //         identifier: 'password',
  //         rules: [
  //           {
  //             type   : 'empty',
  //             prompt : 'Please enter a password'
  //           },
  //           {
  //             type   : 'minLength[6]',
  //             prompt : 'Your password must be at least {ruleValue} characters'
  //           }
  //         ]
  //       },
  //       terms: {
  //         identifier: 'terms',
  //         rules: [
  //           {
  //             type   : 'checked',
  //             prompt : 'You must agree to the terms and conditions'
  //           }
  //         ]
  //       }
  //     }
  //   })
  // ;
  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>First Name:</label>
            <input
              type="text"
              prompt="First Name..."
              value={this.state.fname}
              onChange={e => this.setState({ fname: e.target.value })}
            />
            <label>Last Name:</label>
            <input
              type="text"
              value={this.state.lname}
              onChange={e => this.setState({ lname: e.target.value })}
            />
            <label>Email Address:</label>
            <input
              type="text"
              value={this.state.address}
              onChange={e => this.setState({ address: e.target.value })}
            />
            <label>Phone Number:</label>
            <input
              type="text"
              value={this.state.number}
              onChange={e => this.setState({ number: e.target.value })}
            />
            <label>Comment:</label>
            <input
              type="text"
              value={this.state.comment}
              onChange={e => this.setState({ comment: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}
export default ContactMe;
