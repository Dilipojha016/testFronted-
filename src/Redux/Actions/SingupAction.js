import {
  SIGN_UP,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE
} from "../Actiontype";
import axios from "../../utilities/axios"
import {setUserToken,checkError} from "../../utilities/common"
import { toast } from "react-toastify";
export const setUserSingUpAction = (payload,history) => {
  
  return function(dispatch)  {
    dispatch({
      type: SIGN_UP,
      payload: null
    })
    
      axios.post(`/user/signup`,payload)
      .then(res => {
        if(res.status===200 && res.data.statusCode===200){
          dispatch({
            type: SIGN_UP_SUCCESS,
            payload: res.data
          })
          toast.success(res.data.message);
          setUserToken(res.data.sessionId, res.data.name)
          history.push('/welcome');
        }else{
          checkError(res)
          dispatch({
              type: SIGN_UP_FAILURE,
              payload:null
          })
        }
          
      })
      .catch(err => {
        
          checkError(err.response)
          dispatch({
              type: SIGN_UP_FAILURE,
              payload: err.data
          })
          
      })
  }
}
