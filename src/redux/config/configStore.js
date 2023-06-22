import { createStore } from "redux";
import { combineReducers } from "redux";
// modules에서 todo 데이터 import
import todo from "../modules/todo";

const rootReducer = combineReducers({
  todo,
});
const store = createStore(rootReducer);

export default store;
