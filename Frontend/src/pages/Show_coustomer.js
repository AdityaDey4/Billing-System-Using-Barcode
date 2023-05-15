import Footer from "../include/Footer";
import Sidebar from "../include/Sidebar";
import Topbar from "../include/Topbar";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
function Show_coustomer(){
    let[cous,setCous]=useState([]);
    async function getData(){
        var resp=await fetch("http://localhost:5500/coustomer/show");
        var data=await resp.json();
        setCous(data);
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
          <h1 className="h3 mb-4 text-gray-800">Show Coustomer</h1>
        <table className="table">
    <thead>
      <tr>
        <th>Coustomer_Name</th>
        <th>Coustomer_Phone</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
        {cous.map((people)=>
      <tr key={people._id}>
        <td>{people.name}</td>
        <td>{people.phone}</td>
        <td><button onClick={async()=>{
            if(window.confirm("Are you sure?")){
                var fdata=new FormData();
                
                fdata.append("id",people._id);

                var resp=await fetch("http://localhost:5500/coustomer/delete",{
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

export default Show_coustomer;