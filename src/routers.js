import * as React from "react";
import { Route, Redirect } from "react-router-dom";
import App from "./components/login/App";
import ManageUser from "./components/users/manage-user";
export const routes = (
    <div>
        <Route exact path="/" component={App} />
        <Route exact path="/users" component={ManageUser} />
        <Route exact path="/users/edit/:id" component={ManageUser} />
    </div>
);