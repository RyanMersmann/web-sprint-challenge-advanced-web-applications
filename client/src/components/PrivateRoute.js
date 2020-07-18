import React, { Component } from 'react';
import  {Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest}
            render={(props) => {
                if (localStorage.getItem('token')) {
                    return <Component {...props} />;
                } else {
                    return <Redirect to="/login" />;
                }
            }} // end of render
        /> // end of Route
    ); // end of return
}; // end of PrivateRoute

export default PrivateRoute;