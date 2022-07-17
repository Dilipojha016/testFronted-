import React from "react";
import { Route, Redirect } from "react-router";
import DashboardLayout from "../Layouts/DashboardLayout";

import routeRules from "./routeRules";



const PrivateRoute = ({ component: Component, ...rest }) => {
  
  return (
    <Route
      {...rest}
      render={props =>
        localStorage.getItem('token')? (
          <DashboardLayout {...props} props={rest} >
            <Component {...props} props={rest} />
          </DashboardLayout>
        ) : (
            <Redirect
              to={{
                pathname: routeRules.landingPage,
                state: { from: props.location }
              }}
            />
          )

      }
    />
  )

}


export default PrivateRoute;
