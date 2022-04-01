import "./css/main.css";
import DisplayTodos from "./components/DisplayTodos";
import Todos from "./components/Todos";
import { motion } from "framer-motion";

function App() {
  return (
    <div className="App">
      <motion.h1 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        To-Do List
      </motion.h1>
      <Todos />
      <DisplayTodos />
    </div>
  );
}

export default App;
