import React from "react";
import { Button, Header, Icon, Modal } from "semantic-ui-react";

class ContactMe extends React.Component {
  state = {
    name: "",
    address: "",
    number: "",
    comment: "",
    modalOpen: false
  };

  onFormSubmit = event => {
    event.preventDefault();
  };

  handleOpen = () => this.setState({ modalOpen: true });

  handleClose = () => this.setState({ modalOpen: false });

  render() {
    return (
      <Modal
        trigger={
          <Button onClick={this.handleOpen}>
            Contact Me
            <i className="right arrow icon" />
          </Button>
        }
        open={this.state.modalOpen}
        onClose={this.handleClose}
        basic
        style={{ position: "relative" }}
        size="huge"
      >
        <Header icon="paper plane outline" content="Contact Tim" />
        <Modal.Content>
          <form onSubmit={this.onFormSubmit} className="ui inverted big form">
            <div className="field">
              <label>Name:</label>
              <input
                type="text"
                value={this.state.name}
                onChange={e => this.setState({ name: e.target.value })}
              />
              <label>Email Address:</label>
              <div class="required field">
                <input
                  type="text"
                  value={this.state.address}
                  onChange={e => this.setState({ address: e.target.value })}
                />
              </div>
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
        </Modal.Content>
        <Modal.Actions>
          <Button color="green" onClick={this.handleClose} inverted>
            <Icon name="checkmark" /> Submit
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}
export default ContactMe;
