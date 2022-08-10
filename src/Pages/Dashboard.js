import React from 'react';



const Dashboard = () => {
    return (
        <div className="main-wrapper">
        <section className="section">
        <div className="container-fluid">
          {/* ========== title-wrapper start ========== */}
          <div className="title-wrapper pt-30">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="title mb-30">
                  <h2>eCommerce Dashboard</h2>
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
                      <li className="breadcrumb-item active" aria-current="page">
                        eCommerce
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
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="icon-card mb-30">
                <div className="icon purple">
                  <i className="lni lni-cart-full" />
                </div>
                <div className="content">
                  <h6 className="mb-10">New Orders</h6>
                  <h3 className="text-bold mb-10">34567</h3>
                  <p className="text-sm text-success">
                    <i className="lni lni-arrow-up" /> +2.00%
                    <span className="text-gray">(30 days)</span>
                  </p>
                </div>
              </div>
              {/* End Icon Cart */}
            </div>
            {/* End Col */}
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="icon-card mb-30">
                <div className="icon success">
                  <i className="lni lni-dollar" />
                </div>
                <div className="content">
                  <h6 className="mb-10">Total Income</h6>
                  <h3 className="text-bold mb-10">$74,567</h3>
                  <p className="text-sm text-success">
                    <i className="lni lni-arrow-up" /> +5.45%
                    <span className="text-gray">Increased</span>
                  </p>
                </div>
              </div>
              {/* End Icon Cart */}
            </div>
            {/* End Col */}
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="icon-card mb-30">
                <div className="icon primary">
                  <i className="lni lni-credit-cards" />
                </div>
                <div className="content">
                  <h6 className="mb-10">Total Expense</h6>
                  <h3 className="text-bold mb-10">$24,567</h3>
                  <p className="text-sm text-danger">
                    <i className="lni lni-arrow-down" /> -2.00%
                    <span className="text-gray">Expense</span>
                  </p>
                </div>
              </div>
              {/* End Icon Cart */}
            </div>
            {/* End Col */}
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="icon-card mb-30">
                <div className="icon orange">
                  <i className="lni lni-user" />
                </div>
                <div className="content">
                  <h6 className="mb-10">New User</h6>
                  <h3 className="text-bold mb-10">34567</h3>
                  <p className="text-sm text-danger">
                    <i className="lni lni-arrow-down" /> -25.00%
                    <span className="text-gray"> Earning</span>
                  </p>
                </div>
              </div>
              {/* End Icon Cart */}
            </div>
            {/* End Col */}
          </div>
          {/* End Row */}
          <div className="row">
            <div className="col-lg-7">
              <div className="card-style mb-30">
                <div className="title d-flex flex-wrap justify-content-between">
                  <div className="left">
                    <h6 className="text-medium mb-10">Yearly subscription</h6>
                    <h3 className="text-bold">$245,479</h3>
                  </div>
                  <div className="right">
                    <div className="select-style-1">
                      <div className="select-position select-sm">
                        <select className="light-bg">
                          <option value>Yearly</option>
                          <option value>Monthly</option>
                          <option value>Weekly</option>
                        </select>
                      </div>
                    </div>
                    {/* end select */}
                  </div>
                </div>
                {/* End Title */}
                <div className="chart">
                  <canvas id="Chart1" style={{width: '100%', height: '400px'}} />
                </div>
                {/* End Chart */}
              </div>
            </div>
            {/* End Col */}
            <div className="col-lg-5">
              <div className="card-style mb-30">
                <div className="
                title
                d-flex
                flex-wrap
                align-items-center
                justify-content-between
              ">
                  <div className="left">
                    <h6 className="text-medium mb-30">Sales/Revenue</h6>
                  </div>
                  <div className="right">
                    <div className="select-style-1">
                      <div className="select-position select-sm">
                        <select className="light-bg">
                          <option value>Yearly</option>
                          <option value>Monthly</option>
                          <option value>Weekly</option>
                        </select>
                      </div>
                    </div>
                    {/* end select */}
                  </div>
                </div>
                {/* End Title */}
                <div className="chart">
                  <canvas id="Chart2" style={{width: '100%', height: '400px'}} />
                </div>
                {/* End Chart */}
              </div>
            </div>
            {/* End Col */}
          </div>
          {/* End Row */}
          <div className="row">
            <div className="col-lg-5">
              <div className="card-style mb-30">
                <div className="
                title
                d-flex
                justify-content-between
                align-items-center
              ">
                  <div className="left">
                    <h6 className="text-medium mb-30">Sells by State</h6>
                  </div>
                </div>
                {/* End Title */}
                <div id="map" style={{width: '100%', height: '400px'}} />
                <p>Last updated: 7 days ago</p>
              </div>
            </div>
            {/* End Col */}
            <div className="col-lg-7">
              <div className="card-style mb-30">
                <div className="
                title
                d-flex
                flex-wrap
                justify-content-between
                align-items-center
              ">
                  <div className="left">
                    <h6 className="text-medium mb-30">Top Selling Products</h6>
                  </div>
                  <div className="right">
                    <div className="select-style-1">
                      <div className="select-position select-sm">
                        <select className="light-bg">
                          <option value>Yearly</option>
                          <option value>Monthly</option>
                          <option value>Weekly</option>
                        </select>
                      </div>
                    </div>
                    {/* end select */}
                  </div>
                </div>
                {/* End Title */}
                <div className="table-responsive">
                  <table className="table top-selling-table">
                    <thead>
                      <tr>
                        <th />
                        <th>
                          <h6 className="text-sm text-medium">Products</h6>
                        </th>
                        <th className="min-width">
                          <h6 className="text-sm text-medium">Category</h6>
                        </th>
                        <th className="min-width">
                          <h6 className="text-sm text-medium">Price</h6>
                        </th>
                        <th className="min-width">
                          <h6 className="text-sm text-medium">Sold</h6>
                        </th>
                        <th className="min-width">
                          <h6 className="text-sm text-medium">Profit</h6>
                        </th>
                        <th />
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="check-input-primary">
                            <input className="form-check-input" type="checkbox" id="checkbox-1" />
                          </div>
                        </td>
                        <td>
                          <div className="product">
                            <div className="image">
                              <img src="assets/images/products/product-mini-1.jpg" alt="" />
                            </div>
                            <p className="text-sm">Arm Chair</p>
                          </div>
                        </td>
                        <td>
                          <p className="text-sm">Interior</p>
                        </td>
                        <td>
                          <p className="text-sm">$345</p>
                        </td>
                        <td>
                          <p className="text-sm">43</p>
                        </td>
                        <td>
                          <p className="text-sm">$45</p>
                        </td>
                        <td>
                          <div className="action justify-content-end">
                            <button className="more-btn ml-10 dropdown-toggle" id="moreAction1" data-bs-toggle="dropdown" aria-expanded="false">
                              <i className="lni lni-more-alt" />
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="moreAction1">
                              <li className="dropdown-item">
                                <a href="#0" className="text-gray">Remove</a>
                              </li>
                              <li className="dropdown-item">
                                <a href="#0" className="text-gray">Edit</a>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="check-input-primary">
                            <input className="form-check-input" type="checkbox" id="checkbox-1" />
                          </div>
                        </td>
                        <td>
                          <div className="product">
                            <div className="image">
                              <img src="assets/images/products/product-mini-2.jpg" alt="" />
                            </div>
                            <p className="text-sm">SOfa</p>
                          </div>
                        </td>
                        <td>
                          <p className="text-sm">Interior</p>
                        </td>
                        <td>
                          <p className="text-sm">$145</p>
                        </td>
                        <td>
                          <p className="text-sm">13</p>
                        </td>
                        <td>
                          <p className="text-sm">$15</p>
                        </td>
                        <td>
                          <div className="action justify-content-end">
                            <button className="more-btn ml-10 dropdown-toggle" id="moreAction1" data-bs-toggle="dropdown" aria-expanded="false">
                              <i className="lni lni-more-alt" />
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="moreAction1">
                              <li className="dropdown-item">
                                <a href="#0" className="text-gray">Remove</a>
                              </li>
                              <li className="dropdown-item">
                                <a href="#0" className="text-gray">Edit</a>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="check-input-primary">
                            <input className="form-check-input" type="checkbox" id="checkbox-1" />
                          </div>
                        </td>
                        <td>
                          <div className="product">
                            <div className="image">
                              <img src="assets/images/products/product-mini-3.jpg" alt="" />
                            </div>
                            <p className="text-sm">Dining Table</p>
                          </div>
                        </td>
                        <td>
                          <p className="text-sm">Interior</p>
                        </td>
                        <td>
                          <p className="text-sm">$95</p>
                        </td>
                        <td>
                          <p className="text-sm">32</p>
                        </td>
                        <td>
                          <p className="text-sm">$215</p>
                        </td>
                        <td>
                          <div className="action justify-content-end">
                            <button className="more-btn ml-10 dropdown-toggle" id="moreAction1" data-bs-toggle="dropdown" aria-expanded="false">
                              <i className="lni lni-more-alt" />
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="moreAction1">
                              <li className="dropdown-item">
                                <a href="#0" className="text-gray">Remove</a>
                              </li>
                              <li className="dropdown-item">
                                <a href="#0" className="text-gray">Edit</a>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="check-input-primary">
                            <input className="form-check-input" type="checkbox" id="checkbox-1" />
                          </div>
                        </td>
                        <td>
                          <div className="product">
                            <div className="image">
                              <img src="assets/images/products/product-mini-4.jpg" alt="" />
                            </div>
                            <p className="text-sm">Office Chair</p>
                          </div>
                        </td>
                        <td>
                          <p className="text-sm">Interior</p>
                        </td>
                        <td>
                          <p className="text-sm">$105</p>
                        </td>
                        <td>
                          <p className="text-sm">23</p>
                        </td>
                        <td>
                          <p className="text-sm">$345</p>
                        </td>
                        <td>
                          <div className="action justify-content-end">
                            <button className="more-btn ml-10 dropdown-toggle" id="moreAction1" data-bs-toggle="dropdown" aria-expanded="false">
                              <i className="lni lni-more-alt" />
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="moreAction1">
                              <li className="dropdown-item">
                                <a href="#0" className="text-gray">Remove</a>
                              </li>
                              <li className="dropdown-item">
                                <a href="#0" className="text-gray">Edit</a>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  {/* End Table */}
                </div>
              </div>
            </div>
            {/* End Col */}
          </div>
          {/* End Row */}
          <div className="row">
            <div className="col-lg-7">
              <div className="card-style mb-30">
                <div className="
                title
                d-flex
                flex-wrap
                align-items-center
                justify-content-between
              ">
                  <div className="left">
                    <h6 className="text-medium mb-2">Sales Forecast</h6>
                  </div>
                  <div className="right">
                    <div className="select-style-1 mb-2">
                      <div className="select-position select-sm">
                        <select className="light-bg">
                          <option value>Last Month</option>
                          <option value>Last 3 Months</option>
                          <option value>Last Year</option>
                        </select>
                      </div>
                    </div>
                    {/* end select */}
                  </div>
                </div>
                {/* End Title */}
                <div className="chart">
                  <div id="legend3">
                    <ul className="legend3 d-flex flex-wrap align-items-center mb-30">
                      <li>
                        <div className="d-flex">
                          <span className="bg-color primary-bg"> </span>
                          <div className="text">
                            <p className="text-sm text-success">
                              <span className="text-dark">Revenue</span> +25.55%
                              <i className="lni lni-arrow-up" />
                            </p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex">
                          <span className="bg-color purple-bg" />
                          <div className="text">
                            <p className="text-sm text-success">
                              <span className="text-dark">Net Profit</span> +45.55%
                              <i className="lni lni-arrow-up" />
                            </p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex">
                          <span className="bg-color orange-bg" />
                          <div className="text">
                            <p className="text-sm text-danger">
                              <span className="text-dark">Order</span> -4.2%
                              <i className="lni lni-arrow-down" />
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <canvas id="Chart3" style={{width: '100%', height: '450px'}} />
                </div>
              </div>
            </div>
            {/* End Col */}
            <div className="col-lg-5">
              <div className="card-style mb-30">
                <div className="
                title
                d-flex
                flex-wrap
                align-items-center
                justify-content-between
              ">
                  <div className="left">
                    <h6 className="text-medium mb-2">Traffic</h6>
                  </div>
                  <div className="right">
                    <div className="select-style-1 mb-2">
                      <div className="select-position select-sm">
                        <select className="bg-ligh">
                          <option value>Last 6 Months</option>
                          <option value>Last 3 Months</option>
                          <option value>Last Year</option>
                        </select>
                      </div>
                    </div>
                    {/* end select */}
                  </div>
                </div>
                {/* End Title */}
                <div className="chart">
                  <div id="legend4">
                    <ul className="legend3 d-flex flex-wrap align-items-center mb-30">
                      <li>
                        <div className="d-flex">
                          <span className="bg-color primary-bg"> </span>
                          <div className="text">
                            <p className="text-sm text-success">
                              <span className="text-dark">Store Visits</span>
                              +25.55%
                              <i className="lni lni-arrow-up" />
                            </p>
                            <h2>3456</h2>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex">
                          <span className="bg-color danger-bg" />
                          <div className="text">
                            <p className="text-sm text-danger">
                              <span className="text-dark">Visitors</span> -2.05%
                              <i className="lni lni-arrow-down" />
                            </p>
                            <h2>3456</h2>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <canvas id="Chart4" style={{width: '100%', height: '420px'}} />
                </div>
                {/* End Chart */}
              </div>
            </div>
            {/* End Col */}
          </div>
          {/* End Row */}
          <div className="row">
            <div className="col-lg-5">
              <div className="card-style calendar-card mb-30">
                <div id="calendar-mini" />
              </div>
            </div>
            {/* End Col */}
            <div className="col-lg-7">
              <div className="card-style mb-30">
                <div className="
                title
                d-flex
                flex-wrap
                align-items-center
                justify-content-between
              ">
                  <div className="left">
                    <h6 className="text-medium mb-30">Sales History</h6>
                  </div>
                  <div className="right">
                    <div className="select-style-1">
                      <div className="select-position select-sm">
                        <select className="light-bg">
                          <option value>Today</option>
                          <option value>Yesterday</option>
                        </select>
                      </div>
                    </div>
                    {/* end select */}
                  </div>
                </div>
                {/* End Title */}
                <div className="table-responsive">
                  <table className="table top-selling-table">
                    <thead>
                      <tr>
                        <th>
                          <h6 className="text-sm text-medium">Products</h6>
                        </th>
                        <th className="min-width">
                          <h6 className="text-sm text-medium">
                            Category <i className="lni lni-arrows-vertical" />
                          </h6>
                        </th>
                        <th className="min-width">
                          <h6 className="text-sm text-medium">
                            Revenue <i className="lni lni-arrows-vertical" />
                          </h6>
                        </th>
                        <th className="min-width">
                          <h6 className="text-sm text-medium">
                            Status <i className="lni lni-arrows-vertical" />
                          </h6>
                        </th>
                        <th>
                          <h6 className="text-sm text-medium text-end">
                            Actions <i className="lni lni-arrows-vertical" />
                          </h6>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="product">
                            <div className="image">
                              <img src="assets/images/products/product-mini-1.jpg" alt="" />
                            </div>
                            <p className="text-sm">Bedroom</p>
                          </div>
                        </td>
                        <td>
                          <p className="text-sm">Interior</p>
                        </td>
                        <td>
                          <p className="text-sm">$345</p>
                        </td>
                        <td>
                          <span className="status-btn close-btn">Pending</span>
                        </td>
                        <td>
                          <div className="action justify-content-end">
                            <button className="edit">
                              <i className="lni lni-pencil" />
                            </button>
                            <button className="more-btn ml-10 dropdown-toggle" id="moreAction1" data-bs-toggle="dropdown" aria-expanded="false">
                              <i className="lni lni-more-alt" />
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="moreAction1">
                              <li className="dropdown-item">
                                <a href="#0" className="text-gray">Remove</a>
                              </li>
                              <li className="dropdown-item">
                                <a href="#0" className="text-gray">Edit</a>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="product">
                            <div className="image">
                              <img src="assets/images/products/product-mini-2.jpg" alt="" />
                            </div>
                            <p className="text-sm">Arm Chair</p>
                          </div>
                        </td>
                        <td>
                          <p className="text-sm">Interior</p>
                        </td>
                        <td>
                          <p className="text-sm">$345</p>
                        </td>
                        <td>
                          <span className="status-btn warning-btn">Refund</span>
                        </td>
                        <td>
                          <div className="action justify-content-end">
                            <button className="edit">
                              <i className="lni lni-pencil" />
                            </button>
                            <button className="more-btn ml-10 dropdown-toggle" id="moreAction1" data-bs-toggle="dropdown" aria-expanded="false">
                              <i className="lni lni-more-alt" />
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="moreAction1">
                              <li className="dropdown-item">
                                <a href="#0" className="text-gray">Remove</a>
                              </li>
                              <li className="dropdown-item">
                                <a href="#0" className="text-gray">Edit</a>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="product">
                            <div className="image">
                              <img src="assets/images/products/product-mini-3.jpg" alt="" />
                            </div>
                            <p className="text-sm">Sofa</p>
                          </div>
                        </td>
                        <td>
                          <p className="text-sm">Interior</p>
                        </td>
                        <td>
                          <p className="text-sm">$345</p>
                        </td>
                        <td>
                          <span className="status-btn success-btn">Completed</span>
                        </td>
                        <td>
                          <div className="action justify-content-end">
                            <button className="edit">
                              <i className="lni lni-pencil" />
                            </button>
                            <button className="more-btn ml-10 dropdown-toggle" id="moreAction1" data-bs-toggle="dropdown" aria-expanded="false">
                              <i className="lni lni-more-alt" />
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="moreAction1">
                              <li className="dropdown-item">
                                <a href="#0" className="text-gray">Remove</a>
                              </li>
                              <li className="dropdown-item">
                                <a href="#0" className="text-gray">Edit</a>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="product">
                            <div className="image">
                              <img src="assets/images/products/product-mini-4.jpg" alt="" />
                            </div>
                            <p className="text-sm">Kitchen</p>
                          </div>
                        </td>
                        <td>
                          <p className="text-sm">Interior</p>
                        </td>
                        <td>
                          <p className="text-sm">$345</p>
                        </td>
                        <td>
                          <span className="status-btn close-btn">Canceled</span>
                        </td>
                        <td>
                          <div className="action justify-content-end">
                            <button className="edit">
                              <i className="lni lni-pencil" />
                            </button>
                            <button className="more-btn ml-10 dropdown-toggle" id="moreAction1" data-bs-toggle="dropdown" aria-expanded="false">
                              <i className="lni lni-more-alt" />
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="moreAction1">
                              <li className="dropdown-item">
                                <a href="#0" className="text-gray">Remove</a>
                              </li>
                              <li className="dropdown-item">
                                <a href="#0" className="text-gray">Edit</a>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  {/* End Table */}
                </div>
              </div>
            </div>
            {/* End Col */}
          </div>
          {/* End Row */}
        </div>
        {/* end container */}
      </section>
      </div>
    );
};

export default Dashboard;