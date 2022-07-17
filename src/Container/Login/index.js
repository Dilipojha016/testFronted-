import React, { useState, useEffect } from "react";
import { toast,ToastContainer } from "react-toastify";
import {  useHistory } from 'react-router-dom';

import Input from "../../Components/Input";
import Button from "../../Components/Button";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import routeRules from "../../Routes/routeRules";
import { setUserLoginAction} from '../../Redux/Actions/SignInAction';
import { useDispatch, useSelector } from 'react-redux';
import { getToken } from '../../utilities/common'
export default function Login(props) {
  const initialState = {
    logoInError: false,
		logoInErrorMessage: "",
		email: "",
		password: "",
		isSubmit: false,
		isWrongAccount: false,
		wrongAccountMsg: "",
	};
	const [state, setState] = useState(initialState);
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    
    if (getToken()) {
     history.push(routeRules.welcome);
    }
	},[]);

  const handleLogin = (e) => {
		e.preventDefault();
    const { email, password } = state;
    
    dispatch(setUserLoginAction({email,password},history));
	};
  const handleOnChange = (e) => {
    const {name,value} = e.target
    
    setState((prevState) => {
			return { ...prevState, [name]: value };
		});
	};
  
  
  return (
    <div className="login-view">
      <div className="container">
        <ToastContainer autoClose={8000} />
        <div className="row">
          <div className="col-12">
            <h1 className="primary-heading">Login</h1>
            
          </div>
        </div>
        <div className="row">
          
          <div className="col-sm-12 col-md-12 col-lg-12 login-form">
            <div className="primary-card">
            <form onSubmit={handleLogin} action="" name="AddorEditUser">
              <div className="row">
                <div className="col-12">
                  <Input
                    label="Email Address"
                    type="email"
                    maxLength={50}
                    placeholder="Your email address.."
                    name="email"
                    required={true}
                    value={state.email}
                    onChange={(e) =>handleOnChange(e)}
                  />
                </div>
                <div className="col-12">
                  <Input
                    label="Password"
                    type="password"
                    placeholder="Your password.."
                    name="password"
                    required={true}
                    value={state.password}
                    onChange={(e) =>handleOnChange(e)}
                    
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-12 forget-row">
                  
                  <Link to={routeRules.singup}>
                    <div className="forget-pass">New customer here ?Sing up</div>
                  </Link>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <Button name="Login" />
                </div>
              </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
