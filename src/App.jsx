import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import FillUpForm from "./FillUpForm/FillUpForm";

const App = () => {

  fetch('https://ems-backend-springboot-50026276785.development.catalystappsail.in/api/employees', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    credentials: 'include',
    body: new URLSearchParams({
      username: 'vijay',
      password: 'thalapathc69',
    }),
  })
    .then(res => {
      if (res.ok) {
        console.log("✅ Logged in successfully");
      } else {
        console.log("❌ Login failed");
      }
    });
    
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
