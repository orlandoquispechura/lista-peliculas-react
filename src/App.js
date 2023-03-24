import "./App.css";
import Routes from "./routers/routes";


function App() {
  return (
    <div>
      <header className="title-page">
        <h1>🎥 Listado de películas</h1>
      </header>

      <Routes />
    </div>
  );
}

export default App;
