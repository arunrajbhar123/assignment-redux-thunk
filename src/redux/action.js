import {

GET_TODOS_REQUEST,
GET_TODOS_SUCCESS,
GET_TODOS_FAILURE,
ADD_TODOS_REQUEST,
ADD_TODOS_SUCCESS,
ADD_TODOS_FAILURE
} from "./action.type.js";
import axios from "axios";


export const getTodosRequest=()=>({type:GET_TODOS_REQUEST})
export const getTodosSuccess=(payload)=>({type:GET_TODOS_SUCCESS,payload})
export const getTodosFailure=()=>({type:GET_TODOS_FAILURE})

export const addTodosRequest=()=>({type:ADD_TODOS_REQUEST})
export const addTodosSuccess=(payload)=>({type:ADD_TODOS_SUCCESS,payload}) 
export const addTodosFailure=()=>({type:ADD_TODOS_FAILURE})


export const getTodoData = (dispatch) => {
  dispatch(getTodosRequest());
  axios
    .get("/todos")
    .then((res) => dispatch(getTodosSuccess(res.data)))
    .catch((err) => dispatch(getTodosFailure(err)));
};

