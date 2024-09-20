import "./App.css";
import { Home, Login,Quiz } from "./pages";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/auth/login" element={<Login/>}/>
        <Route path="/quiz" element={<Quiz />}/>
      </Routes>
    </div>
  );
}

export default App;
