import {
  GET_TODOS_REQUEST,
  GET_TODOS_SUCCESS,
  GET_TODOS_FAILURE,
  ADD_TODOS_REQUEST,
ADD_TODOS_SUCCESS,
ADD_TODOS_FAILURE,
} from "./action.type.js";
const initalState = {
  todos: [],
  isLoding: false,
  isError: false,
};
export const reducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case GET_TODOS_REQUEST:
      return {
        ...state,
        isLoding: true,
        isError: false,
      };

    case GET_TODOS_SUCCESS:
      
      return {
        ...state,
        todos: payload,
        isLoding: false,
        isError: false,
      };

    case GET_TODOS_FAILURE:
      return {
        ...state,
        isLoding: false,
        isError: true,
      };


      case ADD_TODOS_REQUEST:
      return {
        ...state,
        isLoding: true,
        isError: false,
      };

    case ADD_TODOS_SUCCESS:
      const newTodos=[...state.todos,payload];
      // console.log(payload);
      return {
        ...state,
       
        isLoding: false,
        isError: false,
      };

    case ADD_TODOS_FAILURE:
      return {
        ...state,
        isLoding: false,
        isError: true,
      };

    default:
      return state;
  }
};
