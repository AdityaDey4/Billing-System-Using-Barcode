import Footer from "../include/Footer";
import Sidebar from "../include/Sidebar";
import Topbar from "../include/Topbar";
import { useNavigate } from "react-router-dom";

import { useState } from "react";
function Add_coustomer(){
    let[cname,setCname]=useState("");
    let[cphone,setCphone]=useState("");
    const navi=useNavigate();
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
          <h1 className="h3 mb-4 text-gray-800">Add Coustomer</h1>
        <div className="container-fluid">
            <p> Coustomer Name</p>
            <p><input onChange={(ev)=>{
                setCname(ev.target.value);
            }} type="text" className="form-control" /></p>
            <p>Coustomer Phone_no</p>
            <p><input onChange={(ev)=>{
                setCphone(ev.target.value);
            }} type="text" className="form-control" /></p>
            <p><button onClick={async()=>{
                var fdata=new FormData();
                fdata.append("cname",cname);
                fdata.append("cphone",cphone);
                
                var resp=await fetch("http://localhost:5500/coustomer/add",{
                    method:'POST',
                    body:fdata
                });
                var data=await resp.json();
                console.log(data);
                navi("/show-coustomer", {replace : true});
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

export default Add_coustomer;