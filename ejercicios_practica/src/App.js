import logo from './logo.svg';
import './App.css';
import Namelist from './components/Namelist';
import Counter from './components/Counter';
import NoteApp from './components/NoteApp';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Namelist/> */}
        {/* <Counter /> */}
        <NoteApp/>
        AQUÍ AGREGUE SUS COMPONENTES
      </header>
    </div>
  );
}

export default App;
