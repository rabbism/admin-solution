import React from "react";

const Profile = () => {
  return (
    <>
      {/* ========= section start ========== */}
      <section className="section main-wrapper">
        <div className="container-fluid">
          {/* ========== title-wrapper start ========== */}
          <div className="title-wrapper pt-30">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="titlemb-30">
                  <h2>Settings</h2>
                </div>
              </div>
              {/* end col */}
              <div className="col-md-6">
                <div className="breadcrumb-wrapper mb-30">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="#0">Dashboard</a>
                      </li>
                     
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Settings
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
              {/* end col */}
            </div>
            {/* end row */}
          </div>
          {/* ========== title-wrapper end ========== */}
          <div className="row">
            <div className="col-lg-6">
              <div className="card-style settings-card-1 mb-30">
                <div
                  className="
                  title
                  mb-30
                  d-flex
                  justify-content-between
                  align-items-center
                "
                >
                  <h6>My Profile</h6>
                  <button className="border-0 bg-transparent">
                    <i className="lni lni-pencil-alt" />
                  </button>
                </div>
                <div className="profile-info">
                  <div className="d-flex align-items-center mb-30">
                    <div className="profile-image">
                      <img src="assets/images/profile/profile-1.png" alt="" />
                      <div className="update-image">
                        <input type="file" />
                        <label htmlFor>
                          <i className="lni lni-cloud-upload" />
                        </label>
                      </div>
                    </div>
                    <div className="profile-meta">
                      <h5 className="text-bold text-dark mb-10">John Doe</h5>
                      <p className="text-sm text-gray">
                        Web &amp; UI/UX Design
                      </p>
                    </div>
                  </div>
                  <div className="input-style-1">
                    <label>Email</label>
                    <input
                      type="email"
                      placeholder="admin@example.com"
                      defaultValue="admin@example.com"
                    />
                  </div>
                  <div className="input-style-1">
                    <label>Password</label>
                    <input type="password" defaultValue="admin@example.com" />
                  </div>
                  <div className="input-style-1">
                    <label>Website</label>
                    <input
                      type="text"
                      placeholder="www.uideck.com"
                      defaultValue="www.uideck.com"
                    />
                  </div>
                  <div className="input-style-1">
                    <label>Bio</label>
                    <textarea
                      placeholder="Write your bio here"
                      rows={4}
                      defaultValue={
                        "Crafted for – Business, Startup, SaaS, Apps, Event, Software, Agency, Resume and Portfolio. All Landing Pages comes with clean design and responsive layout. Also packed with all essential sections, elements, and features you need to launch"
                      }
                    />
                  </div>
                </div>
              </div>
              {/* end card */}
            </div>
            {/* end col */}
            <div className="col-lg-6">
              <div className="card-style settings-card-2 mb-30">
                <div className="title mb-30">
                  <h6>My Profile</h6>
                </div>
                <form action="#">
                  <div className="row">
                    <div className="col-12">
                      <div className="input-style-1">
                        <label>Full Name</label>
                        <input type="text" placeholder="Full Name" />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="input-style-1">
                        <label>Email</label>
                        <input type="email" placeholder="Email" />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="input-style-1">
                        <label>Company</label>
                        <input type="text" placeholder="Company" />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="input-style-1">
                        <label>Address</label>
                        <input type="text" placeholder="Address" />
                      </div>
                    </div>
                    <div className="col-xxl-4">
                      <div className="input-style-1">
                        <label>City</label>
                        <input type="text" placeholder="City" />
                      </div>
                    </div>
                    <div className="col-xxl-4">
                      <div className="input-style-1">
                        <label>Zip Code</label>
                        <input type="text" placeholder="Zip Code" />
                      </div>
                    </div>
                    <div className="col-xxl-4">
                      <div className="select-style-1">
                        <label>Country</label>
                        <div className="select-position">
                          <select className="light-bg">
                            <option value>Select category</option>
                            <option value>USA</option>
                            <option value>UK</option>
                            <option value>Canada</option>
                            <option value>India</option>
                            <option value>Bangladesh</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="input-style-1">
                        <label>About Me</label>
                        <textarea
                          placeholder="Type here"
                          rows={6}
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <button className="main-btn primary-btn btn-hover">
                        Update Profile
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              {/* end card */}
            </div>
            {/* end col */}
          </div>
          {/* end row */}
        </div>
        {/* end container */}
      </section>
      {/* ========== section end ========== */}
    </>
  );
};

export default Profile;
