import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Register from "./pages/Register";
import Category from "./pages/Category";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/category" element={<Category />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
