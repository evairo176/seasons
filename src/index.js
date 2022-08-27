import React from "react";

import { createRoot } from "react-dom/client";

const el = document.querySelector("#root");
const root = createRoot(el);
// const App = () => {
//   return <div>Hi tayo!</div>;
// };

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { lat: null, long: null, errorMessage: "" };
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        this.setState({
          lat: position.coords.latitude,
          long: position.coords.longitude,
          errorMessage: position.message,
        });
      },
      (err) => {
        this.setState({
          errorMessage: err.message,
        });
      }
    );
  }

  render() {
    if (this.state.errorMessage && !this.state.lat && !this.state.long) {
      return <div>Message Error : {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat && this.state.long) {
      return (
        <div>
          Latitude : {this.state.lat} <br />
          Longitude : {this.state.long} <br />
        </div>
      );
    }
    if (!this.state.errorMessage && !this.state.lat && !this.state.long) {
      return <div>Loading...</div>;
    }
  }
}

root.render(<App />);
