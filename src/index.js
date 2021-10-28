import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import Users from "./components/users";
import { App } from "./App";

console.log(Users().length);
const users = Users();

// if (users.length > 10) {
//   const tusa = document.createElement("h1");
//   tusa.textContent = "tusa";
//   document.body.prepend(tusa);
// }
ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <>
      <div>Users</div>
    </> */}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
