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
        <p>coded by Sera</p>
        <span><a href="https://github.com/Sera-iso/React-Dictionary" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a></span>
        <span><a href="https://www.instagram.com/codewithsera/" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a></span>
      </footer>
    </div>
  );
}

export default App;
