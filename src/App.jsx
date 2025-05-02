import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import FillUpForm from "./FillUpForm/FillUpForm";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/add" element={<FillUpForm url="http://localhost:1111/api/employees" isUpdate={false}/>} />
        <Route path="/update/:id" element={<FillUpForm url="http://localhost:1111/api/employees" isUpdate={true}/>} />
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
