import "./App.css";
import DisplayTodos from "./components/DisplayTodos";
import Todos from "./components/Todos";

import { AppBar, Toolbar, IconButton, Typography, Box } from "@mui/material";

function App() {
  return (
    <div className="App">
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 1,
          p: 5,
          zIndex: -1,
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <IconButton size="large" edge="start" color="inherit">
            Todo App
          </IconButton>

          <Box>
            <Todos />
          </Box>
        </Toolbar>
      </AppBar>
      <DisplayTodos />
    </div>
  );
}

export default App;
