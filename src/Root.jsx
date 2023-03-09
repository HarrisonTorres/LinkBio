import React from "react";
import { createBrowserRouter,BrowserRouter as Router, Route } from "react-router-dom";
import App from "./App";

import ListLinks from "./component/listLinks";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/user/:idPost",
        element: <App/>,
    }
    ]);
export default router;