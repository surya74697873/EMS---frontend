import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import FillUpForm from "./FillUpForm/FillUpForm";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/add" element={<FillUpForm url="https://ems-backend-springboot-50026276785.development.catalystappsail.in/api/employees" isUpdate={false}/>} />
        <Route path="/update/:id" element={<FillUpForm url="https://ems-backend-springboot-50026276785.development.catalystappsail.in/api/employees" isUpdate={true}/>} />
      </Routes>
    
    </BrowserRouter>
  );
}
// https://ems-backend-springboot-50026276785.development.catalystappsail.in
// http://localhost:1111/api/employees
export default App;
