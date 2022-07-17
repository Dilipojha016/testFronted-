
import React, { useState, useEffect } from "react";
import routeRules from "../../Routes/routeRules";
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import io from 'socket.io-client'
import { AddItem,uploadImage} from '../../Redux/Actions/ItemAction';
import { useDispatch,useSelector } from 'react-redux';
import {  useHistory } from 'react-router-dom';
export default function AddItems(props){
  
  const initialState = {
    name:'',
    price:0,
    quantity:0,
    image:'',
    imageUrl:'',
    
  };
  const [state, setState] = useState(initialState);
  const [socket, setSocket] = useState(initialState);
  const [flag, setFlag] = useState(true);
  const history = useHistory();
  const dispatch = useDispatch();
  const imageDetails = useSelector(state=> state.ImageReducer)
  useEffect(()=>{
    
    if(flag && imageDetails.ImageSuccess && imageDetails.ImageData && imageDetails.ImageData.originalname){
      
      setFlag(false)
      const { name, price,quantity } = state;
      dispatch(AddItem({ name, price,quantity,image: imageDetails.ImageData.filename },socket,history));
    }
  },[imageDetails,imageDetails.ImageData])
  useEffect(()=>{
    setSocket(io(process.env.REACT_APP_BASEPATH))
  },[setSocket])
  const addItem = (e) => {
		e.preventDefault();
    const formData = new FormData();
    formData.append("image",state.image)
    dispatch(uploadImage(formData));
	};
  const handleChange = (e) => {
    const {name,value} = e.target
    setState((prevState) => {
			return { ...prevState, [name]: value };
		});
	};
  const handleImageUpload = (event) => {
     setState((prevState) => {
			return { ...prevState, ["image"]: event.target.files[0],imageUrl: URL.createObjectURL(event.target.files[0])};
		});
    
	};
  return (
    <div className="AddorEditUser-view">
      <div className="container">
        <ToastContainer autoClose={8000} />
        <div className="row">
          <div className="col-sm-12">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h1 className="primary-heading" >
                Create Item
                </h1>
               
              </div>
              <Link
                to={{
                  pathname: routeRules.users
                }}
                className="adduserbtn" > Back
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="primary-card">

              <form onSubmit={addItem} action="" name="addItem">
                <div className="row">
                  <div className="col-sm-6 ">
                    <Input
                      label="Name"
                      labelFor="*"
                      id="name"
                      placeholder="Type your name  here"
                      name="name"
                      maxLength={200}
                      required={true}
                      value={state.name}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  <div className="col-sm-6 ">
                    <Input
                      label="Price"
                      labelFor="*"
                      id="price"
                      placeholder="Type your price  here"
                      name="price"
                      maxLength={200}
                      type="number"
                      required={true}
                      value={state.price}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  
                  <div className="col-sm-6 ">
                    <Input
                      label="quantity"
                      labelFor="*"
                      id="quantity"
                      placeholder="Type your quantity  here"
                      name="quantity"
                      maxLength={200}
                      type="number"
                      required={true}
                      value={state.quantity}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  <div className="col-sm-6 ">
                    <Input
                      label="Image"
                      labelFor="*"
                      id="image"
                      placeholder="Type your image  here"
                      name="image"
                      type="file"
                      required={true}
                      onChange={(e) => handleImageUpload(e)}
                    />
                    <div><img src={state.imageUrl} /></div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 text-center">
                    <Button
                      name="Create"
                    />
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

