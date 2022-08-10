import React, { useEffect, useState } from "react";
import Table from "./Table";

const ProductList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://sleepy-depths-81993.herokuapp.com/items")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    // <div className="w-50 m-auto mt-5">
    //   <table class=" table table-striped">
    //     <thead>
    //       <tr>
    //         <th scope="col">id</th>
    //         <th scope="col">Subject</th>
    //         <th scope="col">Name</th>
    //         <th scope="col">Price</th>
    //         <th scope="col">Action</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //     {
    //                              items.map(item => <Table key={item._id} item={item}></Table>)
    //                       }
    //     </tbody>
    //   </table>

    // </div>
    <>
      <section className="table-components">
        <div className="container-fluid">
          {/* ========== title-wrapper start ========== */}
          <div className="title-wrapper pt-30">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="title mb-30">
                  <h2>Product List</h2>
                </div>
              </div>
            </div>
            {/* end row */}
          </div>
          {/* ========== title-wrapper end ========== */}
          {/* ========== tables-wrapper start ========== */}
          <div className="tables-wrapper">
            <div className="row">
              <div className="col-lg-12">
                <div className="card-style mb-30">
                  <h5 className="mb-10  text-center">Product Table</h5>
                  
                  <div className="table-wrapper table-responsive">
                    <table className="table">
                    {items.length ===0 ? <div class="d-flex justify-content-center">
                            <div class="spinner-border" role="status">
                              <span class="visually-hidden">Loading...</span>
                            </div>
                          </div>:<>
                          
                      <thead>
                        <tr>
                          <th>
                            <h6>Lead</h6>
                          </th>
                          <th>
                            <h6>Subject</h6>
                          </th>
                          <th>
                            <h6>Name</h6>
                          </th>
                          <th>
                            <h6>Price</h6>
                          </th>
                          <th>
                            <h6>Action</h6>
                          </th>
                        </tr>
                        {/* end table row*/}
                      </thead>
                    
                        <tbody>
                        
      
                          {items.map((item) => (
                            <Table key={item._id} item={item}></Table>
                          ))}
                          

                        </tbody></>
}
                    </table>
                    {/* end table */}
                  </div>
                </div>
                {/* end card */}
              </div>
              {/* end col */}
            </div>
          </div>
          {/* ========== tables-wrapper end ========== */}
        </div>
        {/* end container */}
      </section>
    </>
  );
};

export default ProductList;
