import Dashboard from "./pages/Dashboard";
import Add_product from "./pages/Add_product";
import Show_product from "./pages/Show_product";
import Edit_product from "./pages/Edit_product";
import Add_coustomer from "./pages/Add_coustomer";
import Show_coustomer from "./pages/Show_coustomer";
import Create_bills from "./pages/Create_bills";
import Show_bill from "./pages/Show_bill";
import Print from "./pages/Print";
import { BrowserRouter,Routes,Route,Link } from "react-router-dom";
import "./App.css";
function App(){
  return(
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Show_product/>} />
    <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/add-product" element={<Add_product/>} />
      <Route path="/show-product" element={<Show_product/>} />
      <Route path="/edit-product/:id" element={<Edit_product/>} />
      <Route path="/add-coustomer" element={<Add_coustomer/>} />
      <Route path="/show-coustomer" element={<Show_coustomer/>} />
      <Route path="/create" element={<Create_bills/>} />
      <Route path="/show" element={<Show_bill/>} />
      <Route path="/print/:oid" element={<Print/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
};

export default App;