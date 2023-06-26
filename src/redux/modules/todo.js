import uuid from "react-uuid";

// action value
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const STATE_CHANGE_TODO = "STATE_CHANGE_TODO";

// action creator -> action.payload 받아와서 {구조 분해 할당}
export const addTodo = ({ id, title, content }) => {
  return {
    type: ADD_TODO,
    payload: {
      id,
      title,
      content,
      isDone: false,
    },
  };
};

export const deleteTodo = (id) => {
  return { type: DELETE_TODO, payload: { id } };
};

export const stateChangeTodo = (id) => {
  return {
    type: STATE_CHANGE_TODO,
    payload: { id },
  };
};

const initialState = {
  todo: [
    {
      id: uuid(),
      title: "리액트 강의보기",
      content: "챕터 1부터 챕터 12까지 학습",
      isDone: false,
    },
    {
      id: uuid(),
      title: "점심 먹기",
      content: "점심 뭐먹지..?",
      isDone: false,
    },
  ],
};

// reducer -> action 객체 안에 type과 payload!
const todo = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return {
        ...state,
        todo: [...state.todo, payload],
      };
    case DELETE_TODO:
      return {
        ...state,
        todo: state.todo.filter((todoItem) => todoItem.id !== payload.id),
      };
    case STATE_CHANGE_TODO:
      return {
        ...state,
        todo: state.todo.map((todoItem) => {
          return todoItem.id === payload.id
            ? { ...todoItem, isDone: !todoItem.isDone }
            : todoItem;
        }),
      };
    default:
      return state;
  }
};

export default todo;
