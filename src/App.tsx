import "./App.css";
import Header from "./components/Header";
import Container from "./components/Container";
import AddTodo from "./components/AddTodo";

function App() {
  return (
    <div>
      <Header />
      <AddTodo />
      <Container />
    </div>
  );
}

export default App;
