import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <>
      <ul
        className="navbar-nav bg-info sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        {/* Sidebar - Brand */}
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="index.html"
        >
          <div className="text-white sidebar-brand-text mx-3">
            XYZ Health Care
          </div>
        </a>
        {/* Divider */}
        <hr className="sidebar-divider my-0" />

        {/* Nav Item - Pages Collapse Menu */}
        <li className="nav-item">
          <Link
            className="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapseTwo"
            aria-expanded="true"
            aria-controls="collapseTwo"
          >
            <span>Managing Product</span>
          </Link>
          <div
            id="collapseTwo"
            className="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <Link className="collapse-item" to="/add-product">
                Add Product
              </Link>
              <Link className="collapse-item" to="/show-product">
                Show Product
              </Link>
            </div>
          </div>
        </li>
        {/* Nav Item - Utilities Collapse Menu */}
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapseUtilities"
            aria-expanded="true"
            aria-controls="collapseUtilities"
          >
            <span>Coustomer</span>
          </a>
          <div
            id="collapseUtilities"
            className="collapse"
            aria-labelledby="headingUtilities"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <Link className="collapse-item" to="/add-coustomer">
                Add Coustomer
              </Link>
              <Link className="collapse-item" to="/show-coustomer">
                Show Coustomer
              </Link>
            </div>
          </div>
        </li>

        <li className="nav-item">
          <Link
            className="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapseThree"
            aria-expanded="true"
            aria-controls="collapseThree"
          >
            <span>Billing Management</span>
          </Link>
          <div
            id="collapseThree"
            className="collapse"
            aria-labelledby="headingThree"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <Link className="collapse-item" to="/create">
                Create
              </Link>
              <Link className="collapse-item" to="/show">
                Show
              </Link>
            </div>
          </div>
        </li>

        {/* <li className="nav-item dropdown">
          <Link
            className="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
            href="#"
          >
            Billing Management
          </Link>
          <ul className="dropdown-menu">
            <li>
              <Link className="dropdown-item" to="/create">
                Create Bills
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/show">
                Show
              </Link>
            </li>
          </ul>
        </li> */}
      </ul>
    </>
  );
}

export default Sidebar;
