import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import history from "../../Store/history";


import toggleSubnavReducer from "./ToggleSubnavReducer";
import SignInReducer from "./SignInReducer";
import ImageReducer from "./ImageReducer";
import ItemListReducer from "./ItemListReducer";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import { persistReducer } from "redux-persist";
const persistConfig = {
  key: "config",
  storage,
};

const rootReducer = combineReducers({
  toggleSubnavReducer,SignInReducer,ImageReducer,ItemListReducer,
  router: connectRouter(history),
});
export default persistReducer(persistConfig, rootReducer);
