import React from "react";

import { createRoot } from "react-dom/client";

const el = document.querySelector("#root");
const root = createRoot(el);
// const App = () => {
//   return <div>Hi tayo!</div>;
// };

class App extends React.Component {
  render() {
    window.navigator.geolocation.getCurrentPosition(
      (Position) => console.log(Position),
      (Err) => console.log(Err)
    );
    return <div>Hi tayo!</div>;
  }
}

root.render(<App />);
