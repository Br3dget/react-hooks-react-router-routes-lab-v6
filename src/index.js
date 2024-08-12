import "./index.css";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes";

ReactDOM.render(
    <React.StrictMode>
      <RouterProvider router={routes} />
    </React.StrictMode>,
    document.getElementById("root")
  );
