import React from "react";
import { Button, Header, Icon, Image, Modal } from "semantic-ui-react";
import Resume from "./Resume.js";

class ModalScroll extends React.Component {
  state = { modalOpen: false };

  handleOpen = () => this.setState({ modalOpen: true });

  handleClose = () => this.setState({ modalOpen: false });

  render() {
    return (
      <Modal
        size="fullscreen"
        style={{ position: "relative" }}
        trigger={
          <Button onClick={this.handleOpen} className="ui huge button">
            View Resume
          </Button>
        }
        open={this.state.modalOpen}
        onClose={this.handleClose}
        basic
        size="small"
      >
        <Modal.Content>
          <Resume />
        </Modal.Content>
        <Modal.Actions>
          <Button primary>
            <a download href="/files/Timothy_Murphy_Resume.pdf">
              <Icon inverted color="black" name="download" />
            </a>
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

export default ModalScroll;
