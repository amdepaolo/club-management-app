import { useState, useEffect } from "react";
import SignUp from "./components/SignUp";
import Login from "./components/Login";

function App() {

  return (
    <div className="App">
      <h1>Club Connection!</h1>
      <p> This is a placeholder, the app will come later and will look better</p>
      <Login></Login>
      <SignUp></SignUp>
    </div>
  );
}

export default App;