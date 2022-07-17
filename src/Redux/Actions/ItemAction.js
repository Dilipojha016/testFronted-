import {
  IMAGE_ITEM,
  IMAGE_ITEM_SUCCESS,
  IMAGE_ITEM_FAILURE,
  ADD_ITEM,
  ADD_ITEM_SUCCESS,
  ADD_ITEM_FAILURE,
  ITEM_LIST,ITEM_LIST_SUCCESS,ITEM_LIST_FAILURE
  
} from "../Actiontype";
import {checkError} from "../../utilities/common"
import axios from "../../utilities/axios"
import { toast } from "react-toastify";
export const AddItem = (payload,socket,history) => {
  return async(dispatch) => {
      
      try{
        dispatch({
            type: ADD_ITEM,
            payload: true
        })
        
        socket.emit("addItem",payload)
        socket.on("successAdd",(data)=>{
          dispatch({
              type: ADD_ITEM_SUCCESS,
              payload: data
          }) 
          history.push("/items")        
        })

        socket.on("fail",(data)=>{
          checkError(data)     
        })
      }catch(err){
        dispatch({
            type: ADD_ITEM_FAILURE,
            payload: null
        })
      }
      
     
      
  }
}

export const uploadImage = (payload) => {
  
  return function(dispatch)  {
    
    dispatch({
      type: IMAGE_ITEM,
      payload: true
  })
      axios.post(`/user/uploadImage`,payload)
      .then(res => {
        if(res.status===200 && res.data.statusCode===200){
          dispatch({
            type: IMAGE_ITEM_SUCCESS,
            payload: res.data
          })
          toast.success(res.data.message);
         
        }else{
          toast.error(res.data.message);
          checkError(res)
        }
          
      })
      .catch(err => {
          checkError(err.response)
          dispatch({
              type: IMAGE_ITEM_FAILURE,
              payload: err.data
          })
          
      })
  }
}


export const itemList = (payload) => {
  
  return function(dispatch)  {
      dispatch({
        type: ITEM_LIST,
        payload: true
      })
      const query = Object.keys(payload).map((key) => `${key}=${payload[key]}`).join("&");
      axios.get(`/user/itemList?${query}`)
      .then(res => {
        if(res.status===200 && res.data.statusCode===200){
          dispatch({
            type: ITEM_LIST_SUCCESS,
            payload: res.data
          })
          toast.success(res.data.message);
         
        }else{
          toast.error(res.data.message);
          checkError(res)
        }
          
      })
      .catch(err => {
          checkError(err.response)
          dispatch({
              type: ITEM_LIST_FAILURE,
              payload: err.data
          })
          
      })
  }
}