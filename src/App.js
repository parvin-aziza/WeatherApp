import logo from './logo.svg';
import './App.css';
const api ={
  key: "4cd4590a9f682f3d4c1a9b175e9380d3",
  base:"https://api.openweathermap.org/data/2.5/"
}

function App() {
  return (
    <div className="app">
     <main>
       <div className="search-box">
         <input type="text" className="search-bar" placeholder="Search...."></input>
       </div>
     </main>
    </div>
  );
}

export default App;
