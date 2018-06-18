import React from "react";
import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";
import "./index.css";
import TextField from "@material-ui/core/TextField";
import Restauranticon from "@material-ui/icons/Restaurant";
import ThumbUpicon from "@material-ui/icons/ThumbUp";
import Star from "@material-ui/icons/Star";
import ThumbDownicon from "@material-ui/icons/ThumbDown";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
