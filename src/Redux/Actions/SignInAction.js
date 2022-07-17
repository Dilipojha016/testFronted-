import {
  SIGN_IN_FAILURE,
  SIGN_IN_SUCCESS
} from "../Actiontype";
import axios from "../../utilities/axios"
import {checkError} from "../../utilities/common"

import { toast } from "react-toastify";
export const setUserLoginAction = (payload,history) => {
  
  return function(dispatch)  {
    
    
      axios.post(`/user/login`,{email: payload.email, password: payload.password})
      .then(res => {
        if(res.status===200 && res.data.statusCode===200){
          dispatch({
            type: SIGN_IN_SUCCESS,
            payload: res.data
          })
          toast.success(res.data.message);
          history.push('/welcome');
        }else{
          toast.error(res.data.message);
          checkError(res)
        }
          
      })
      .catch(err => {
          checkError(err.response)
          dispatch({
              type: SIGN_IN_FAILURE,
              payload: err.data
          })
          
      })
  }
}
