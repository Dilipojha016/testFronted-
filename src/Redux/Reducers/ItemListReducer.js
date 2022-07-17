import {
  ITEM_LIST,ITEM_LIST_SUCCESS,ITEM_LIST_FAILURE
   
  } from "../Actiontype";
  const initialState = {
    isFetching: false,
    itemSuccess: false,
    itemSuccessMessage: "",
    itemFailure: false,
    itemFailureMessage: "",
    itemData: null,
    
  };
  export default function ItemListReducer(state = initialState, action) {
    switch (action.type) {
      case ITEM_LIST:
        return {
          ...state,
          isFetching: false,
          itemSuccess: false,
          itemSuccessMessage: "",
          itemFailure: false,
          itemFailureMessage: "",
          itemData: null,
          
        };
      case ITEM_LIST_SUCCESS:
       return {
          ...state,
          isFetching: false,
          itemSuccess: true,
          itemSuccessMessage: action.payload.message,
          itemFailure: false,
          itemFailureMessage: "",
          itemData: action.payload,
        }
      case ITEM_LIST_FAILURE:
        return {
          ...state,
          isFetching: false,
          itemSuccess: false,
          itemSuccessMessage: "",
          itemFailure: false,
          itemFailureMessage: "",
          itemData: null,
        };
     
      
      default:
        return {
          ...state
        };
    }
  }
  