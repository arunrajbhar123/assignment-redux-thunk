import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getTodoData } from "../redux/action.js";
const TodoList = () => {
  const dispatch = useDispatch();
  const { todos, isLoding, isError } = useSelector((state) => state);

  useEffect(() => {
    if (todos?.length === 0) {
      dispatch(getTodoData);
    }
  }, []);

  if (isLoding) {
    return <div>isLoading Please wait....</div>;
  }
  if (isError) {
    return <div>Something is Wrong Try to Refresh once again....</div>;
  }
  return (
    <div>
     

      {todos?.map((el) => (
        <div key={el.id}>
          <span>{el.title}</span>
          <span>{`  ${el.status}`}</span>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
