import Footer from "../include/Footer";
import Sidebar from "../include/Sidebar";
import Topbar from "../include/Topbar";
import { useNavigate } from "react-router-dom";

import { useState } from "react";
function Add_product(){
    let[name,setName]=useState("");
    let[category,setCategory]=useState("");
    let[pimg,setPimg]=useState(null);
    let[pdate,setPdate]=useState("");
    let[price,setPrice]=useState("");
    let[barcode,setBarcode]=useState("");

    const navigate = useNavigate();
    return(
        <>
        <div>
  <div id="wrapper">
    {/* Sidebar */}
    <Sidebar/>
    {/* End of Sidebar */}
    {/* Content Wrapper */}
    <div id="content-wrapper" className="d-flex flex-column">
      {/* Main Content */}
      <div id="content">
        {/* Topbar */}
       <Topbar/>
        {/* End of Topbar */}
        {/* Begin Page Content */}
        <div className="container-fluid">
          {/* Page Heading */}
          <h1 className="h3 mb-4 text-gray-800">Add Product</h1>
        <div className="container-fluid">
            <p>Name</p>
            <p><input onChange={(ev)=>{
                setName(ev.target.value);
            }} type="text" className="form-control" /></p>
            <p>Categories</p>
            <p><select onChange={(ev)=>{
                setCategory(ev.target.value);
            }}>
                <option className="form-control">Choose the one</option>
                <option className="form-control">Capsul</option>
                <option className="form-control">Serum</option>
                <option className="form-control">Tablet</option>
                <option className="form-control">Others</option>
            </select></p>
            <p>Image</p>
            <p><input onChange={(ev)=>{
                setPimg(ev.target.files[0]);
            }} type="file" className="form-control" /></p>
            <p>Barcode</p>
            <p><input onChange={(ev)=>{
                setBarcode(ev.target.value);
            }} type="text" className="form-control" /></p>
            <p>Date</p>
            <p><input onChange={(ev)=>{
                setPdate(ev.target.value);
            }} type="date" className="form-control" /></p>
            <p>Price</p>
            <p><input onChange={(ev)=>{
                setPrice(ev.target.value);
            }} type="text" className="form-control" /></p>
            <p><button onClick={async()=>{
                var fdata=new FormData();
                fdata.append("name",name);
                fdata.append("category",category);
                fdata.append("pimg",pimg);
                fdata.append("barcode",barcode);
                fdata.append("pdate",pdate);
                fdata.append("price",price);
               
                

                var resp=await fetch("http://localhost:5500/product/add",{
                    method:'POST',
                    body:fdata
                });
                var data=await resp.json();
                console.log(data);
                navigate('/show-product', {replace : true});
            }} className="btn btn-success">Submit</button></p>
        </div>
        </div>
        {/* /.container-fluid */}
      </div>
      {/* End of Main Content */}
      {/* Footer */}
      <Footer/>
      {/* End of Footer */}
    </div>
    {/* End of Content Wrapper */}
  </div>
  {/* End of Page Wrapper */}
  {/* Scroll to Top Button*/}
  <a className="scroll-to-top rounded" href="#page-top">
    <i className="fas fa-angle-up" />
  </a>
  {/* Logout Modal*/}
  <div className="modal fade" id="logoutModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
          <button className="close" type="button" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
        <div className="modal-footer">
          <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
          <a className="btn btn-primary" href="login.html">Logout</a>
        </div>
      </div>
    </div>
  </div>
  </div>

        </>
    )
};

export default Add_product;