import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import FillUpForm from "./FillUpForm/FillUpForm";
import url from "./URL";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/add" element={<FillUpForm url={url} isUpdate={false}/>} />
        <Route path="/update/:id" element={<FillUpForm url={url} isUpdate={true}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
