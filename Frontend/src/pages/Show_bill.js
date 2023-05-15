import Footer from "../include/Footer";
import Sidebar from "../include/Sidebar";
import Topbar from "../include/Topbar";

import { useState, useEffect } from "react";
function Show_bill() {
    let [bill, setBill] = useState([]);
    async function getData() {
        var resp = await fetch("http://localhost:5500/bill/sbill");
        var data = await resp.json();
        setBill(data);
    };

    useEffect(() => {
        getData();
    }, []);
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

                                <h1 className="h3 mb-4 text-gray-800">Show Bills</h1>


                                <div className="container-fluid">
                                    <table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th>Bill No</th>
                                                <th>Customer Name</th>
                                                <th>Customer Phone</th>
                                                <th>Date</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {bill.map((b) =>

                                                <tr key={b._id}>
                                                    <td>{b.order_id}</td>
                                                    <td>{b.name}</td>
                                                    <td>{b.phone}</td>
                                                    <td>{b.date}</td>
                                                    <td><a target="_blank" href={"/print/" + b.order_id} className="btn btn-success">Print</a></td>
                                                </tr>
                                            )}

                                        </tbody>
                                    </table>
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

export default Show_bill;