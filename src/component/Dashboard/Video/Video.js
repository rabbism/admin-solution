import { queryAllByAttribute } from "@testing-library/react";
import React, { useState } from "react";
import { toast } from 'react-toastify';

import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import VideoCards from "./VideoCards";


const Video = () => {
  const { register, handleSubmit, reset } = useForm();
//   const [date, setDate] = useState([]);

  const onSubmit = (data) => {
    //   const savedCart = getStoredCart();
    //   data.order = savedCart

    fetch("https://sleepy-depths-81993.herokuapp.com/video", {
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
//   useEffect(() => {
//     fetch("https://sleepy-depths-81993.herokuapp.com/discount")
//       .then((res) => res.json())
//       .then((data) => setDate(data));
//   }, []);

  return (
    <>
    <div className="w-50 m-auto mt-5">
      {/* <form onSubmit={handelSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            onBlur={handelBlur}
            name="name"
            type="text"
            className="form-control"
            placeholder="Enter your time"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Upload a image</label>
          <input
            onChange={handleFileChange}
            // name="file"
            type="file"
            className="form-control"
            placeholder="Enter your time"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form> */}

      <section className="tab-components">
        <div className="container-fluid">
          {/* ========== title-wrapper start ========== */}
          <div className="title-wrapper pt-30">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="title mb-30">
                  <h2>Video Upload</h2>
                </div>
              </div>
            </div>
            {/* end row */}
          </div>
          {/* ========== title-wrapper end ========== */}
          {/* ========== form-elements-wrapper start ========== */}
          <div className="form-elements-wrapper">
            <div className="row">
              <div className="col-lg-12">
                {/* input style start */}
                <div className="card-style mb-30">
                 
                  <form onSubmit={handleSubmit(onSubmit)} >
                  <div className="input-style-1">
                    <label>Video Name</label>
                    <input
                      type="text"
                      {...register("name")}
                      name="name"
                      className="form-control"
                      placeholder="Enter your Video Name"
                    />
                  </div>
                  <div className="input-style-1">
                    <label>Title</label>
                    <input
                      type="text"
                      {...register("title")}
                      name="title"
                      className="form-control"
                      placeholder="Enter your Title"
                    />
                  </div>
                  <div className="input-style-1">
                    <label>Video Link</label>
                    <input
                      type="text"
                      {...register("link")}
                      name="link"
                      className="form-control"
                      placeholder="Enter your Video Link"
                    />
                  </div>
                 
               

                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                  </form>
                  
                </div>
              
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <VideoCards></VideoCards>
    </>
  );
};

export default Video;
