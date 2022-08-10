import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import DateTable from "./DateTable";
// import DateTable from "./DateTable";

const DiscountTime = () => {
  const { register, handleSubmit, reset } = useForm();
  const [date, setDate] = useState([]);

  const onSubmit = (data) => {
    //   const savedCart = getStoredCart();
    //   data.order = savedCart

    fetch("https://sleepy-depths-81993.herokuapp.com/discount", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Good job...",
            text: "Your Time Successfully",
          });
          // alert("data  Add Successfully");
          reset();
        }
      });
  };
  useEffect(() => {
    fetch("https://sleepy-depths-81993.herokuapp.com/discount")
      .then((res) => res.json())
      .then((data) => setDate(data));
  }, []);

  return (
    <div>
      <div className="w-50 m-auto mt-5 main-wrapper">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label className="form-label">Discount Data Set </label>
            <p className="text-bold text-danger"><u>Enter your time Format August 30, 2022 00:00:00</u></p>
            <input
              {...register("data")}
              type="text"
              className="form-control"
              placeholder="Enter your time August 30, 2022 00:00:00"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>


      <div className="main-wrapper">
        <div className="row">
          <div className="col-lg-10 m-auto mt-5">
            <div className="card-style mb-30">
              <h5 className="mb-10 text-center">Discount Table</h5>
              
              <div className="table-wrapper table-responsive">
                <table className="table striped-table">
                {date.length ===0 ? <div class="d-flex justify-content-center">
                            <div class="spinner-border" role="status">
                              <span class="visually-hidden">Loading...</span>
                            </div>
                          </div>:<>
                  <thead>
                    <tr>
                      <th>
                        <h6>Date</h6>
                      </th>

                      <th>
                        <h6>Action</h6>
                      </th>
                    </tr>
                    
                  </thead>
                  <tbody>
                    {date.map(date => (
                      <DateTable key={date._id} date={date}></DateTable>
                    ))}
                    
                  </tbody></>
}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

{/* 
<section className="table-components">
        <div className="container-fluid">
          
          <div className="title-wrapper pt-30">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="title mb-30">
                  <h2>Tables</h2>
                </div>
              </div>
            </div>
            
          </div>
         
          <div className="tables-wrapper">
            <div className="row">
              <div className="col-lg-12">
                <div className="card-style mb-30">
                  <h6 className="mb-10">Product Table</h6>
                  <p className="text-sm mb-20">
                    For basic styling—light padding and only horizontal
                    dividers—use the class table.
                  </p>
                  <div className="table-wrapper table-responsive">
                    <table className="table">
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
                       
                      </thead>
                    
                        <tbody>
                          {date.length ===0 ? <div class="d-flex justify-content-center">
                            <div class="spinner-border" role="status">
                              <span class="visually-hidden">Loading...</span>
                            </div>
                          </div>:
                          <>
                          {date.map((item) => (
                            <DateTable key={item._id} item={item}></DateTable>
                          ))}
                          </>
}
                        </tbody>
                    
                    </table>
                   
                  </div>
                </div>
              
              </div>
             
            </div>
          </div>
          
        </div>
      
      </section> */}
    </div>
  );
};

export default DiscountTime;
