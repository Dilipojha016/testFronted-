import React, { useState, useEffect } from "react";
import { toast,ToastContainer } from "react-toastify";
import {  useHistory } from 'react-router-dom';
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import routeRules from "../../Routes/routeRules";

import { setUserSingUpAction} from '../../Redux/Actions/SingupAction';
import { useDispatch, useSelector } from 'react-redux';
import { getToken } from '../../utilities/common'

export default function Login(props) {
  const initialState = {
    name:'',
    email:'',
    password:'',
    c_password:''
	};
	const [state, setState] = useState(initialState);
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    if (getToken()) {
      history.push(routeRules.welcome);
    }
	},[]);

  const handleLogin = (e) => {
		e.preventDefault();
    const { email, password,name,c_password } = state;
    dispatch(setUserSingUpAction({ email, password,name },history))
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
            <h1 className="primary-heading">Sing up</h1>
            
          </div>
        </div>
        <div className="row">
          
          <div className="col-sm-12 col-md-12 col-lg-12 login-form">
            <div className="primary-card">
            <form onSubmit={handleLogin} action="" name="AddorEditUser">
              <div className="row">
                <div className="col-12">
                
                    <Input
                      label="Name"
                      labelFor="*"
                      id="name"
                      placeholder="Type your name  here"
                      name="name"
                      maxLength={200}
                      required={true}
                      value={state.name}
                      onChange={(e) => handleOnChange(e)}
                    />
                  
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
                <div className="col-12">
                  <Input
                    label="Confirm Password"
                    type="password"
                    placeholder="Your password.."
                    name="c_password"
                    required={true}
                    value={state.c_password}
                    onChange={(e) =>handleOnChange(e)}
                    
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-12 forget-row">
                  
                <Link to={routeRules.landingPage}>
                    <div className="forget-pass">If you already have an account
login here</div>
                  </Link>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <Button name="Submit" />
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
