import Footer from "../include/Footer";
import Sidebar from "../include/Sidebar";
import Topbar from "../include/Topbar";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
function Show_product(){
    let[pro,setPro]=useState([]);
    async function getData(){
        var resp=await fetch("http://localhost:5500/product/show");
        var data=await resp.json();
        setPro(data);
    };

    useEffect(()=>{
        getData();
    },[]);
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
          <h1 className="h3 mb-4 text-gray-800">Show Product</h1>
        <table className="table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Categories</th>
        <th>Image</th>
        <th>Barcode</th>
        <th>Date</th>
        <th>Price</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
        {pro.map((ele)=>
      <tr key={ele._id}>
        <td>{ele.name}</td>
        <td>{ele.category}</td>
        <td><img className="pimg" src={"http://localhost:5500/"+ele.image}/></td>
        <td>{ele.barcode}</td>
        <td>{ele.date}</td>
        <td>{ele.price}</td>
        <td><Link className="btn btn-primary" to={"/edit-product/"+ele._id}>Edit</Link></td>
        <td><button onClick={async()=>{
            if(window.confirm("Are you sure?")){
                var fdata=new FormData();
                
                fdata.append("id",ele._id);

                var resp=await fetch("http://localhost:5500/product/delete",{
                    method:'POST',
                    body:fdata
                });
                var data=await resp.json();
                console.log(data);
                getData();
            }
        }} className="btn btn-danger">Delete</button></td>
      </tr>
      )}
    </tbody>
  </table>
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

export default Show_product;