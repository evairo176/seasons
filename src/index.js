import React from "react";

import { createRoot } from "react-dom/client";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

// untuk menampilkan root
const el = document.querySelector("#root");
const root = createRoot(el);
// const App = () => {
//   return <div>Hi tayo!</div>;
// };

class App extends React.Component {
  state = { lat: null, long: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        // console.log(position);
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
  componentDidUpdate() {
    console.log("update");
  }

  render() {
    if (this.state.errorMessage && !this.state.lat && !this.state.long) {
      return (
        <SeasonDisplay
          errorMessage={"Message Error : " + this.state.errorMessage}
        />
      );
    }
    if (!this.state.errorMessage && this.state.lat && this.state.long) {
      return (
        <SeasonDisplay
          lat={"latitude : " + this.state.lat}
          long={"longitude : " + this.state.long}
        />
      );
    }

    return <Spinner />;
  }
}

root.render(<App />);
