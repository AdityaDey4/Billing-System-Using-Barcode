import Footer from "../include/Footer";
import Sidebar from "../include/Sidebar";
import Topbar from "../include/Topbar";
import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
function Print(){
    let[bill,setBill]=useState({});
    let[products,setProducts]=useState([]);
    let[total,setTotal]=useState();
    const params=useParams();
    async function getData(){
       var fd=new FormData();
       fd.append("oid",params.oid);
        var resp=await fetch("http://localhost:5500/bill/mbill",{
          method:'POST',
          body:fd
        });
        var data=await resp.json();
        setBill(data.bill);
        setProducts(data.products);
       
        setTimeout(function(){
          pbill();
        }, 3000);
        
    };
 function pbill(){
  window.print();
    setTimeout(function(){
      window.close();
    }, 5500);
 }

    useEffect(()=>{
   
        getData();
    },[]);

    

    useEffect(()=>{
      gettotal();
    });
   
    async function gettotal(){
      let sum=0;
      products.forEach((pro)=>{
        sum=sum+Number(pro.price);
      })
      setTotal(sum);
    };
   
    return(
        <>
        <div>
  <div id="wrapper">
   
    {/* End of Sidebar */}
    {/* Content Wrapper */}
    <div id="content-wrapper" className="d-flex flex-column">
      {/* Main Content */}
      <div id="content">
        {/* Topbar */}
    
        {/* End of Topbar */}
        {/* Begin Page Content */}
        <div className="container-fluid">
          {/* Page Heading */}
          <h1 className=" text-center h3 mb-4 text-gray-800">XYZ Health Care</h1>
          <h1 className=" text-center h3 mb-4 text-gray-800">Phone no : +91 9876543210</h1>
          <div className="container-fluid">
          <table className="table table-hover">
    <thead>
      <tr>
        <th>Bill No</th>
        <th>{bill.order_id}</th>
        </tr>
        <tr>
        <th>Customer Name</th>
        <th>{bill.name}</th>
        </tr>
        <tr>
        <th>Customer Phone</th>
        <th>{bill.phone}</th>
        </tr>
        <tr>
          <th>Date</th>
          <th>{bill.date}</th>
        </tr>
        
    </thead>
    
  </table>


  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th>Barcode</th>
                        <th>Product Name</th>
                        <th>Price</th>
                      
                      </tr>
                    </thead>
                    <tbody>
                      {products.map((pro) =>
                        <tr key={pro._id}>
                          <td>{pro.barcode}</td>
                          <td>{pro.name}</td>
                          <td>{pro.price}</td>
                          </tr>
                     )}
                     
                       <tr>
                        <td colSpan="3">Total  :  {total}</td>
                      </tr>
                          </tbody>

                          </table>
          </div>
        
        </div>
        {/* /.container-fluid */}
      </div>
      {/* End of Main Content */}
      {/* Footer */}
     
      {/* End of Footer */}
    </div>
    {/* End of Content Wrapper */}
  </div>
  
  </div>

        </>
    )
};

export default Print;