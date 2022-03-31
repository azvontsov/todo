import React, { useState, useRef} from 'react'
import { connect } from 'react-redux';
import { addTodos, removeTodos, updateTodos, completeTodos } from '../redux/reducer';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

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

const Todos = (props) => {
  const [todo, setTodo] = useState("");

  const handleChange = (e) =>{
    setTodo(e.target.value); 
  }
// console.log('props from store', props);
  return (
    <div className='addTodos'>
     <TextField id="outlined-multiline-static"
          label="input your todo here"
          multiline
          rows={4}
          defaultValue="" 
          type="text" 
     onChange={ (e) => handleChange (e) } 
     className="todo-input" />
     <Button variant="contained" onClick={() => props.addTodo({
      // here is object/todo
      id: Math.floor(Math.random()*1000),
      item: todo,
      completed: false,
     })} >
       Add
     </Button>
     <br /><br />
    </div>
  );
};



export default connect(mapStateToProps, mapDispatchToProps)(Todos);