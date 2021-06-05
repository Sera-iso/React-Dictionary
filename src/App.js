import logo from './logo.svg';
import './App.css';
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This will become a pretty Dictionary app built in React
        </p>
      </header>
      <main>
        <Search />
      </main>
      <footer>
        coded by Sera
      </footer>
    </div>
  );
}

export default App;
