import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./route";
import store from "./features/store";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";
import OpenReplay from "@openreplay/tracker";
import trackerAssist from "@openreplay/tracker-assist";
const tracker = new OpenReplay({
  projectKey: "brccs3yWe4TloO9gNuFj",
});
tracker.start();
tracker.use(
  trackerAssist({
    onStart: ({ sessionID }) =>
      console.log("OpenReplay tracker started with session: ", sessionID),
  })
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
