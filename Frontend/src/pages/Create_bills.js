import Footer from "../include/Footer";
import Sidebar from "../include/Sidebar";
import Topbar from "../include/Topbar";
import { useNavigate } from "react-router-dom";

import { useState } from "react";
function Create_bills() {
  let [cname, setCname] = useState("");
  let [cphone, setCphone] = useState("");
  let [seaph, setSeaph] = useState("");
  let[date,setDate]=useState("");
  let [barcode, setBarcode] = useState("");
  let [errmsg, setErrmsg] = useState("");

  let [cid, setCid] = useState("");

  let [bill, setBill] = useState([]);
  let [total, setTotal] = useState([]);
  var sum = 0;

  const navigate = useNavigate();
  async function getbill() {
    var resp = await fetch("http://localhost:5500/bill/getall");
    var data = await resp.json();
    setBill(data);
    setTotal(data.price);
  }


  return (
    <>
      <div>
        <div id="wrapper">
          {/* Sidebar */}
          <Sidebar />
          {/* End of Sidebar */}
          {/* Content Wrapper */}
          <div id="content-wrapper" className="d-flex flex-column">
            {/* Main Content */}
            <div id="content">
              {/* Topbar */}
              <Topbar />
              {/* End of Topbar */}
              {/* Begin Page Content */}
              <div className="container-fluid">
                {/* Page Heading */}
                <h1 className="h3 mb-4 text-gray-800">Create Bill</h1>
                <div className="container-fluid">
                  {errmsg ?
                    <div className="alert alert-success">
                      <strong></strong> {errmsg}
                    </div> : ""
                  }
                  <div className="input-group mb-3">
                    <input onChange={(ev) => {
                      setSeaph(ev.target.value);
                    }} type="text" placeholder="Search Number" className="form-control" aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <button onClick={async () => {
                      var fd = new FormData();
                      fd.append("seaph", seaph);

                      var res = await fetch("http://localhost:5500/bill/search", {
                        method: 'POST',
                        body: fd
                      });
                      var data = await res.json();
                      console.log(data);
                      if (data.msg != null) {
                        setErrmsg(data.msg);
                        setTimeout(function () {
                          setErrmsg("");
                        }, 3000);
                      }
                      else {
                        setCname(data.name);
                        setCphone(data.phone);
                        setCid(data._id);
                      }
                    }} type="submit" className="btn btn-outline-secondary" id="button-addon2"><i className="fa fa-search"></i></button>
                  </div>
                  <br />
                  <p> Coustomer Name</p>
                  <p><input value={cname} onChange={(ev) => {
                    setCname(ev.target.value);
                  }} type="text" className="form-control" /></p>
                  <p>Coustomer Phone_no</p>
                  <p><input value={cphone} onChange={(ev) => {
                    setCphone(ev.target.value);
                  }} type="text" className="form-control" /></p>
                  <p>Date</p>
                  <p><input onChange={(ev)=>{
                    setDate(ev.target.value);
                  }} type="date" className="form-control" /></p>
                  <div className="input-group mb-3">
                    <input value={barcode} onChange={(ev) => {
                      setBarcode(ev.target.value);
                    }} type="text" className="form-control" placeholder="Enter Product Barcode" aria-label="Recipient's username" aria-describedby="button-addon2" />
                    {/* <button onClick={async()=>{
                        var fdata=new FormData();
                        fdata.append("seabar",seabar);

                        var resp=await fetch("http://localhost:5500/bill/find",{
                          method:'POST',
                          body:fdata
                        });
                        var data=await resp.json();
                        console.log(data);
                      }} className="btn btn-outline-secondary" type="button" id="button-addon2"><i className="fa fa-search"></i></button> */}

                  </div>

                  <p><button onClick={async () => {
                    var fdata = new FormData();
                    fdata.append("cid", cid);
                    fdata.append("barcode", barcode);


                    var resp = await fetch("http://localhost:5500/bill/add", {
                      method: 'POST',
                      body: fdata
                    });
                    var data = await resp.json();
                    console.log(data);
                    setBarcode("");

                    getbill();

                  }} className="btn btn-success">Add Product</button></p>

                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th>Barcode</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      {bill.map((pro) =>
                        <tr key={pro._id}>
                          <td>{pro.products[0].barcode}</td>
                          <td>{pro.products[0].name}</td>
                          <td>{pro.products[0].price}</td>
                          <td><button
                            onClick={async () => {
                              if (window.confirm('Are you sure?')) {
                                var fdata = new FormData();
                                fdata.append("id", pro._id);



                                var resp = await fetch("http://localhost:5500/bill/del", {
                                  method: 'POST',
                                  body: fdata
                                });
                                var data = await resp.json();


                                getbill();

                              }
                            }
                            }

                            className="btn btn-danger">Delete</button></td>
                        </tr>
                      )}

                    </tbody>
                  </table>


                  <p><button onClick={async()=>{
                    var fdata=new FormData();
                    fdata.append("cname",cname);
                    fdata.append("cphone",cphone);
                    fdata.append("cid",cid);
                    fdata.append("date",date);

                    var resp=await fetch("http://localhost:5500/bill/order_confirm",{
                      method:'POST',
                      body:fdata
                    });
                    var data=await resp.json();
                    console.log(data);

                    navigate('/show', {replace : true});
                  }} className="btn btn-warning">Confirm Order</button></p>

                </div>
              </div>
              {/* /.container-fluid */}
            </div>
            {/* End of Main Content */}
            {/* Footer */}
            <Footer />
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

export default Create_bills;;