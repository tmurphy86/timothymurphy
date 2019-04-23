import React from "react";

class Insta extends React.Component {
  constructor(props) {
    super(props);
    //Setting the initial state of position
    this.state = { lat: null };

    window.navigator.geolocation.getCurrentPosition(
      position => {
        console.log(position);
        this.setState({ lat: position.coords.latitude });
      },
      err => console.log(err)
    );
  }
  render() {
    return <div> Latitude: {this.state.lat} </div>;
  }
}
