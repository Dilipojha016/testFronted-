import {
  SIGN_IN,
  SIGN_IN_FAILURE,
  SIGN_IN_SUCCESS,
  
 
} from "../Actiontype";
import {setUserToken} from "../../utilities/common"
const initialState = {
  isFetching: false,
  SignInSuccess: false,
  SignInSuccessMessage: "",
  SignInFailure: false,
  SignInFailureMessage: "",
  SignInData: null,
  rememberMe: false,
  email: '',
  TermsAndConditionsData: null
};
export default function SignInReducer(state = initialState, action) {
  
  switch (action.type) {
   
    case SIGN_IN:
      return {
        ...state,
        isFetching: true,
        SignInSuccess: false,
        SignInSuccessMessage: "",
        SignInFailure: false,
        SignInFailureMessage: "",
        SignInData: null,
        
      };
    case SIGN_IN_SUCCESS:
     
      setUserToken(action.payload.data.sessionId, action.payload.data.name)
      return {
        ...state,
        isFetching: false,
        SignInSuccess: true,
        SignInSuccessMessage: action.payload.message,
        SignInData: action.payload.data
      }
    case SIGN_IN_FAILURE:
      return {
        ...state,
        isFetching: false,
        SignInFailure: true,
        SignInFailureMessage: action.payload.message,
        SignInData: null
      };
   
    
    default:
      return {
        ...state
      };
  }
}
