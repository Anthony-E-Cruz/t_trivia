import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/nav_bar';
import Trivia from './components/trivia';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar></NavBar>
        <Trivia></Trivia>
      </header>
    </div>
  );
}

export default App;
