import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import index from "./index";
import "./styles.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <index />
  </BrowserRouter>
);
