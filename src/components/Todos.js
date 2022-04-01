import { Button } from "@mui/material";
import React, { useState, useRef } from "react";
import { connect } from "react-redux";
import {
  addTodos,
  removeTodos,
  updateTodos,
  completeTodos,
} from "../redux/reducer";
import Box from "@mui/material/Box";

import TextField from "@mui/material/TextField";

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
    removeTodo: (id) => dispatch(removeTodos(id)),
    updateTodo: (obj) => dispatch(updateTodos(obj)),
    completeTodo: (id) => dispatch(completeTodos(id)),
  };
};

const Todos = (props) => {
  const [todo, setTodo] = useState("");

  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  // console.log('props from store', props);
  return (
    <Box
      sx={{
        display: "flex",
        display: "inline-flex",
        justifyContent: "center",
      }}
    >
      <TextField
        id="outlined-input"
        type="text"
        onChange={(e) => handleChange(e)}
        className="todo-input"
        sx={{
          bgcolor: "white",
          borderRadius: 1,
          opacity: 0.7,
          width: 400,
        }}
      />
      <Button
        sx={{
          marginLeft: 3,
        }}
        color="inherit"
        variant="outlined"
        onClick={() =>
          props.addTodo({
            // here is object/todo
            id: Math.floor(Math.random() * 1000),
            item: todo,
            completed: false,
          })
        }
      >
        Add
      </Button>
      <br />
    </Box>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
