import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import authReducer from "./reducers/authReducer"; // Burada dosya yolunu kontrol edin!

const rootReducer = combineReducers({
  auth: authReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
