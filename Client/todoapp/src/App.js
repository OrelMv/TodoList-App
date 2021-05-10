import './App.css';

//components
import AddToDoHost from './components/AddToDoHost'
import AllToDos from './components/AllToDos'

function App() {
  return (
    <div>
      <div className="todos-body">
        <h2>To Do List Application</h2>
        <AddToDoHost /> <br />
        <AllToDos />
      </div>
    </div>
  );
}

export default App;
