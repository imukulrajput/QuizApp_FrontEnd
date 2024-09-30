import "./App.css";
import { Home, Login,Quiz,Result,Signup,Guidline } from "./pages";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/auth/login" element={<Login/>}/>
        <Route path="/auth/signup" element={<Signup/>}/>
        <Route path="/quiz" element={<Quiz />}/>
        <Route path="/result" element={<Result />}/>
         <Route path="/guidline" element={<Guidline/>}/>
      </Routes>
    </div>
  );
}

export default App;
