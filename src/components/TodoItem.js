import React, { useRef } from 'react'

import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ButtonGroup from '@mui/material/ButtonGroup';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

const TodoItem = (props) => {
    const {item, updateTodo, removeTodo, completeTodo} = props;

    const inputRef = useRef(true); 

    const changeFocus = () => {
inputRef.current.disabled = false;
inputRef.current.focus();
    }

    const update = (id,value,e) => {
      if(e.which === 13) {
        // here 13 is key code for enter key
        updateTodo({id, item: value });
        inputRef.current.disabled = true;
      }
    }

  return (
    <Card sx={{
        boxShadow: 1, // theme.shadows[1]
        color: 'primary.main', // theme.palette.primary.main
        m: 1, // margin: theme.spacing(1)
        p: {
          xs: 1, // [theme.breakpoints.up('xs')]: { padding: theme.spacing(1) }
        },
        zIndex: 'tooltip', // theme.zIndex.tooltip
      }}>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
      <Box key={item.id} sx={{ textAlign: 'justify', m: 1 }}>
             <TextField 
             ref={inputRef} 
             disabled={inputRef} 
             defaultValue={item.item} 
             onKeyPress={(e) => update(item.id, inputRef.current.value, e)}
             />
              
             <ButtonGroup variant="outlined" aria-label="outlined button group">
             <Button onClick={() => changeFocus()} >Edit</Button>
             <Button onClick={() => completeTodo(item.id)} >Complete</Button>
             <Button onClick={() => removeTodo(item.id)} >Delete</Button> {" "}
            </ButtonGroup>
            {item.completed && <span className='completed'>done</span>}
           </Box>
      </Typography>
      
    </CardContent>
    
    
  </Card>
  ) 
}

export default TodoItem 