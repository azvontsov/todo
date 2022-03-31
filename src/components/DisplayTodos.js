import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addTodos, removeTodos, updateTodos, completeTodos } from '../redux/reducer';
import TodoItem from './TodoItem';

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Stack from '@mui/material/Stack';

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return{
    addTodo: (obj) => dispatch(addTodos(obj)),
    removeTodo: (id) => dispatch(removeTodos(id)),
    updateTodo: (obj) => dispatch(updateTodos(obj)), 
    completeTodo: (id) => dispatch(completeTodos(id)), 
  }
}
const DisplayTodos = (props) => {
   const[sort, setSort] = useState('active')
    return (
   <div className="displaytodos">
       <ButtonGroup variant="contained" aria-label="outlined primary button group">
       <Stack spacing={0.2} direction="row">
           <Button onClick={() =>setSort('active')}>Active</Button>
           <Button onClick={() =>setSort('completed')}>Completed</Button>
           <Button onClick={() =>setSort('all')}>All</Button>
           </Stack>
        </ButtonGroup>
        <ul>
            {props.todos.length > 0 && sort ==='active' ?
                props.todos.map((item) => {
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
                    )
                }) 
                : null}
                {/*  for completed items  */}
                {props.todos.length > 0 && sort ==='completed' ?
                props.todos.map((item) => {
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
                    )
                }) 
                : null}
                {/*  for all items  */}
                {props.todos.length > 0 && sort ==='all' ?
                props.todos.map((item) => {
                    return (
                        <TodoItem
                        key={item.id}
                        item={item}
                        removeTodo={props.removeTodo}
                        updateTodo={props.updateTodo}
                        completeTodo={props.completeTodo}
                    />
                    )
                }) 
                : null}
        </ul>
   </div> 
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayTodos);