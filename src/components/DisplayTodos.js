import React, { useState } from "react";
import { connect } from "react-redux";
import {
  addTodos,
  removeTodos,
  updateTodos,
  completeTodos,
} from "../redux/reducer";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import TodoItem from "./TodoItem";
import { red } from "@mui/material/colors";
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

const DisplayTodos = (props) => {
  const [sort, setSort] = useState("active");
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          m: 18,
          gap: 2,
          marginTop: 20,
        }}
      >
        <Button variant="contained" onClick={() => setSort("active")}>
          Active
        </Button>
        <Button variant="contained" onClick={() => setSort("completed")}>
          Completed
        </Button>
        <Button variant="contained" onClick={() => setSort("all")}>
          All
        </Button>
      </Box>
      {/*                   List of ToDo                    */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          bgcolor: "text.secondary",
        }}
      >
        <ul>
          {props.todos.length > 0 && sort === "active"
            ? props.todos.map((item) => {
                return (
                  item.completed === false && (
                    <TodoItem
                      key={item.id}
                      item={item}
                      removeTodo={props.removeTodo}
                      updateTodo={props.updateTodo}
                      completeTodo={props.completeTodo}
                    />
                  )
                );
              })
            : null}
          {/*  for completed items  */}
          {props.todos.length > 0 && sort === "completed"
            ? props.todos.map((item) => {
                return (
                  item.completed === true && (
                    <TodoItem
                      key={item.id}
                      item={item}
                      removeTodo={props.removeTodo}
                      updateTodo={props.updateTodo}
                      completeTodo={props.completeTodo}
                    />
                  )
                );
              })
            : null}
          {/*  for all items  */}
          {props.todos.length > 0 && sort === "all"
            ? props.todos.map((item) => {
                return (
                  <TodoItem
                    key={item.id}
                    item={item}
                    removeTodo={props.removeTodo}
                    updateTodo={props.updateTodo}
                    completeTodo={props.completeTodo}
                  />
                );
              })
            : null}
        </ul>
      </Box>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayTodos);
