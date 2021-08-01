import './App.css';
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <header>
        <h1>
          Dictionary
        </h1>
      </header>
      <main>
        <Search />
      </main>
      <footer>
        coded by <a href="https://github.com/Sera-iso/React-Dictionary" target="_blank" rel="noreferrer">Sera</a> 
      </footer>
    </div>
  );
}

export default App;
