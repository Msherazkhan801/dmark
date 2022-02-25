import React from "react";
import { Route, withRouter } from "react-router-dom";
const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        const token = localStorage.getItem("token");
        if (token ) {
          return <Component {...props} />;
        } else {
          props.history.push("/");
        }
      }}
    />
  );
};
export default withRouter(ProtectedRoute);