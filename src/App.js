import './css/main.css';
import DisplayTodos from './components/DisplayTodos';
import Todos from './components/Todos';

import CssBaseline from '@mui/material/CssBaseline';

import Container from '@mui/material/Container';

function App() {
  return (
    <div className="App">
   
      <CssBaseline />
      <Container maxWidth="sm">
      <h1>Todo App</h1>
      <Todos />
      <DisplayTodos />
      </Container>
      
    </div>
  );
}

export default App;
