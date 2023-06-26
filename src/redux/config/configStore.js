import { createStore } from "redux";
import { combineReducers } from "redux";
import todo from "../modules/todo"; // modules에서 todo 데이터 import

// Store (중앙 데이터 관리소) 만들기 -> 객체 형태로 modules의 reducer 데이터 관리
const rootReducer = combineReducers({
  todo,
});
const store = createStore(rootReducer);

export default store;
