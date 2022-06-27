import React, { useState } from "react";
import { useDispatch } from "react-redux";

import axios from "axios";
import {
  addTodosRequest,
  addTodosSuccess,
  addTodosFailure,
  getTodoData,
} from "../redux/action.js";
const TodosInput = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const addPostData = (payload) => {
    dispatch(addTodosRequest());
    axios
      .post("/todos",payload)
      .then((res) => {dispatch(addTodosSuccess(res.data))
      dispatch(getTodoData)
      })
      .catch((err) => dispatch(addTodosFailure(err)));
  };

  const handlePostData = (title) => {
    const payload = {
      title,
      status: false,
    };
    addPostData(payload);
    setTitle("")
  };

  return (
    <div>
  <h1 style={{ textDecoration: "underline" }}>TodosInput</h1>
      <br />
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <button onClick={() => handlePostData(title)}>Add</button>
    </div>
  );
};

export default TodosInput;
