import {
  IMAGE_ITEM,
  IMAGE_ITEM_SUCCESS,
  IMAGE_ITEM_FAILURE,
 
} from "../Actiontype";
const initialState = {
  isFetching: false,
  ImageSuccess: false,
  ImageSuccessMessage: "",
  ImageFailure: false,
  ImageFailureMessage: "",
  ImageData: null,
  
};
export default function ItemReducer(state = initialState, action) {
  switch (action.type) {
    case IMAGE_ITEM:
      return {
        ...state,
        isFetching: false,
        ImageSuccess: false,
        ImageSuccessMessage: "",
        ImageFailure: false,
        ImageFailureMessage: "",
        ImageData: null,
        
      };
    case IMAGE_ITEM_SUCCESS:
     return {
        ...state,
        isFetching: false,
        ImageSuccess: true,
        ImageSuccessMessage: action.payload.message,
        ImageFailure: false,
        ImageFailureMessage: "",
        ImageData: action.payload.data,
      }
    case IMAGE_ITEM_FAILURE:
      return {
        ...state,
        isFetching: false,
        ImageSuccess: false,
        ImageSuccessMessage: "",
        ImageFailure: false,
        ImageFailureMessage: "",
        ImageData: null,
      };
   
    
    default:
      return {
        ...state
      };
  }
}
