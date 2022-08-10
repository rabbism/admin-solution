import React from "react";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import "./DashNav.css";
import Loading from "../../Loading/Loading";

const DashNav = () => {
  const navigate = useNavigate();

  const [user, loading, error] = useAuthState(auth);
  // console.log(user);

  let displayError;
  if (error) {
    displayError = (
      <h5 className="text-danger text-center ">{error.message}</h5>
    );
  }
  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div>
       {
                   user?.email || user?.displayName ? (
                              <>
       
      <aside className="sidebar-nav-wrapper">
        <div className="navbar-logo">
          <Link to="/dashboard">
            {/* <img src="../assets/images/logo.png" alt="logo" /> */}
            <h3><span className="text-danger">Admin</span> Solution</h3>
          </Link>
        </div>
        <nav className="sidebar-nav">
          <ul>
            <li className="nav-item ">
              <Link to="/dashboard">
                <span className="icon">
                  <svg width={22} height={22} viewBox="0 0 22 22">
                    <path d="M17.4167 4.58333V6.41667H13.75V4.58333H17.4167ZM8.25 4.58333V10.0833H4.58333V4.58333H8.25ZM17.4167 11.9167V17.4167H13.75V11.9167H17.4167ZM8.25 15.5833V17.4167H4.58333V15.5833H8.25ZM19.25 2.75H11.9167V8.25H19.25V2.75ZM10.0833 2.75H2.75V11.9167H10.0833V2.75ZM19.25 10.0833H11.9167V19.25H19.25V10.0833ZM10.0833 13.75H2.75V19.25H10.0833V13.75Z" />
                  </svg>
                </span>
                <span className="text">Dashboard</span>
              </Link>
              {/* <ul id="ddmenu_1" className="collapse show dropdown-nav">
              <li>
                <a href="index.html" className="active"> eCommerce </a>
              </li>
            </ul> */}
            </li>

            <li className="nav-item">
              <Link to="/dashboard/add_product">
                <span className="icon">
                  {/* <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.4166 7.33333C18.9383 7.33333 20.1666 8.56167 20.1666 10.0833V15.5833H16.4999V19.25H5.49992V15.5833H1.83325V10.0833C1.83325 8.56167 3.06159 7.33333 4.58325 7.33333H5.49992V2.75H16.4999V7.33333H17.4166ZM7.33325 4.58333V7.33333H14.6666V4.58333H7.33325ZM14.6666 17.4167V13.75H7.33325V17.4167H14.6666ZM16.4999 13.75H18.3333V10.0833C18.3333 9.57917 17.9208 9.16667 17.4166 9.16667H4.58325C4.07909 9.16667 3.66659 9.57917 3.66659 10.0833V13.75H5.49992V11.9167H16.4999V13.75ZM17.4166 10.5417C17.4166 11.0458 17.0041 11.4583 16.4999 11.4583C15.9958 11.4583 15.5833 11.0458 15.5833 10.5417C15.5833 10.0375 15.9958 9.625 16.4999 9.625C17.0041 9.625 17.4166 10.0375 17.4166 10.5417Z" />
                </svg> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="22"
                    height="22"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                      d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm1.334-8a1.5 1.5 0 0 0 0-3H10.5v3h2.834zm0-5a3.5 3.5 0 0 1 0 7H10.5v3h-2V7h4.834z"
                      fill="rgba(52,72,94,1)"
                    />
                  </svg>
                </span>
                <span className="text">Product</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/dashboard/slider_image">
                <span className="icon">
                  {/* <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.4166 7.33333C18.9383 7.33333 20.1666 8.56167 20.1666 10.0833V15.5833H16.4999V19.25H5.49992V15.5833H1.83325V10.0833C1.83325 8.56167 3.06159 7.33333 4.58325 7.33333H5.49992V2.75H16.4999V7.33333H17.4166ZM7.33325 4.58333V7.33333H14.6666V4.58333H7.33325ZM14.6666 17.4167V13.75H7.33325V17.4167H14.6666ZM16.4999 13.75H18.3333V10.0833C18.3333 9.57917 17.9208 9.16667 17.4166 9.16667H4.58325C4.07909 9.16667 3.66659 9.57917 3.66659 10.0833V13.75H5.49992V11.9167H16.4999V13.75ZM17.4166 10.5417C17.4166 11.0458 17.0041 11.4583 16.4999 11.4583C15.9958 11.4583 15.5833 11.0458 15.5833 10.5417C15.5833 10.0375 15.9958 9.625 16.4999 9.625C17.0041 9.625 17.4166 10.0375 17.4166 10.5417Z" />
                </svg> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="22"
                    height="22"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                      d="M13 17v3h5v2H6v-2h5v-3H4a1 1 0 0 1-1-1V4H2V2h20v2h-1v12a1 1 0 0 1-1 1h-7zm-8-2h14V4H5v11zm5-9l5 3.5-5 3.5V6z"
                      fill="rgba(52,72,94,1)"
                    />
                  </svg>
                </span>
                <span className="text">Slider Image </span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/dashboard/discount">
                <span className="icon">
                  {/* <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.4166 7.33333C18.9383 7.33333 20.1666 8.56167 20.1666 10.0833V15.5833H16.4999V19.25H5.49992V15.5833H1.83325V10.0833C1.83325 8.56167 3.06159 7.33333 4.58325 7.33333H5.49992V2.75H16.4999V7.33333H17.4166ZM7.33325 4.58333V7.33333H14.6666V4.58333H7.33325ZM14.6666 17.4167V13.75H7.33325V17.4167H14.6666ZM16.4999 13.75H18.3333V10.0833C18.3333 9.57917 17.9208 9.16667 17.4166 9.16667H4.58325C4.07909 9.16667 3.66659 9.57917 3.66659 10.0833V13.75H5.49992V11.9167H16.4999V13.75ZM17.4166 10.5417C17.4166 11.0458 17.0041 11.4583 16.4999 11.4583C15.9958 11.4583 15.5833 11.0458 15.5833 10.5417C15.5833 10.0375 15.9958 9.625 16.4999 9.625C17.0041 9.625 17.4166 10.0375 17.4166 10.5417Z" />
                </svg> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="22"
                    height="22"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                      d="M17.618 5.968l1.453-1.453 1.414 1.414-1.453 1.453a9 9 0 1 1-1.414-1.414zM11 8v6h2V8h-2zM8 1h8v2H8V1z"
                      fill="rgba(52,72,94,1)"
                    />
                  </svg>
                </span>
                <span className="text">Discount Offer</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/dashboard/watching_video">
                <span className="icon">
                  {/* <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.4166 7.33333C18.9383 7.33333 20.1666 8.56167 20.1666 10.0833V15.5833H16.4999V19.25H5.49992V15.5833H1.83325V10.0833C1.83325 8.56167 3.06159 7.33333 4.58325 7.33333H5.49992V2.75H16.4999V7.33333H17.4166ZM7.33325 4.58333V7.33333H14.6666V4.58333H7.33325ZM14.6666 17.4167V13.75H7.33325V17.4167H14.6666ZM16.4999 13.75H18.3333V10.0833C18.3333 9.57917 17.9208 9.16667 17.4166 9.16667H4.58325C4.07909 9.16667 3.66659 9.57917 3.66659 10.0833V13.75H5.49992V11.9167H16.4999V13.75ZM17.4166 10.5417C17.4166 11.0458 17.0041 11.4583 16.4999 11.4583C15.9958 11.4583 15.5833 11.0458 15.5833 10.5417C15.5833 10.0375 15.9958 9.625 16.4999 9.625C17.0041 9.625 17.4166 10.0375 17.4166 10.5417Z" />
                </svg> */}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22"><path fill="none" d="M0 0h24v24H0z"/><path d="M3 3.993C3 3.445 3.445 3 3.993 3h16.014c.548 0 .993.445.993.993v16.014a.994.994 0 0 1-.993.993H3.993A.994.994 0 0 1 3 20.007V3.993zM5 5v14h14V5H5zm5.622 3.415l4.879 3.252a.4.4 0 0 1 0 .666l-4.88 3.252a.4.4 0 0 1-.621-.332V8.747a.4.4 0 0 1 .622-.332z"/></svg>
                </span>
                <span className="text">Watch Video Uplode</span>
              </Link>
            </li>

            <span className="divider">
              <hr />
            </span>

           
            <span className="divider">
              <hr />
            </span>
            <li className="nav-item">
              <Link to="/dashboard/settings">
                <span className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 14v2a6 6 0 0 0-6 6H4a8 8 0 0 1 8-8zm0-1c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm2.595 7.812a3.51 3.51 0 0 1 0-1.623l-.992-.573 1-1.732.992.573A3.496 3.496 0 0 1 17 14.645V13.5h2v1.145c.532.158 1.012.44 1.405.812l.992-.573 1 1.732-.992.573a3.51 3.51 0 0 1 0 1.622l.992.573-1 1.732-.992-.573a3.496 3.496 0 0 1-1.405.812V22.5h-2v-1.145a3.496 3.496 0 0 1-1.405-.812l-.992.573-1-1.732.992-.572zM18 19.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" fill="rgba(52,72,94,1)"/></svg>
                </span>
                <span className="text">Settings</span>
              </Link>
            </li>
          </ul>
        </nav>
        {/* <div className="promo-box">
        <h3>PlainAdmin Pro</h3>
        <p>Get All Dashboards and 300+ UI Elements</p>
        <a href="https://plainadmin.com/pro" target="_blank" rel="nofollow" className="main-btn primary-btn btn-hover">
          Purchase Now
        </a>
      </div> */}
      </aside>
      <div className="overlay" />
      {/* ======== sidebar-nav end =========== */}
      {/* ======== main-wrapper start =========== */}
      <div className="main-wrapper">
        {/* ========== header start ========== */}
        <header className="header">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-5 col-md-5 col-6">
                <div className="header-left d-flex align-items-center">
                  <div className="menu-toggle-btn mr-20">
                    <button
                      id="menu-toggle"
                      className="main-btn primary-btn btn-hover"
                    >
                      <i className="lni lni-chevron-left me-2" /> Menu
                    </button>
                  </div>
                  <div className="header-search d-none d-md-flex">
                    <form action="#">
                      <input type="text" placeholder="Search..." />
                      <button>
                        <i className="lni lni-search-alt" />
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-lg-7 col-md-7 col-6">
                <div className="header-right">
                
                
                     
                 
                 
                
                 
                  {/* filter end */}
                  {/* profile start */}
                  <div className="profile-box ml-15">
                    <button
                      className="dropdown-toggle bg-transparent border-0"
                      type="button"
                      id="profile"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <div className="profile-info">
                        <div className="info">
                          <h6>{user.email}</h6>
                          <div className="image">
                            <img
                              src="https://i.ibb.co/6bRb1pV/271595863-971750957075424-8644024542896880946-n.jpg"
                              alt=""
                            />
                            <span className="status" />
                          </div>
                        </div>
                      </div>
                      <i className="lni lni-chevron-down" />
                    </button>
                    <ul
                      className="dropdown-menu dropdown-menu-end"
                      aria-labelledby="profile"
                    >
                      <li>
                        <a href="#0">
                          <i className="lni lni-user" /> View Profile
                        </a>
                      </li>
                      <li>
                        <a href="#0">
                          <i className="lni lni-alarm" /> Notifications
                        </a>
                      </li>
                      <li>
                        <a href="#0">
                          {" "}
                          <i className="lni lni-inbox" /> Messages{" "}
                        </a>
                      </li>
                      <li>
                        <a href="#0">
                          {" "}
                          <i className="lni lni-cog" /> Settings{" "}
                        </a>
                      </li>
                      <li>
                        <a onClick={() => signOut(auth)}>
                          {" "}
                          <i className="lni lni-exit" /> Sign Out{" "}
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* profile end */}
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
      </>
                            ):(
                              navigate('/login')
                            )
                }
      {displayError}
    </div>
  );
};

export default DashNav;
