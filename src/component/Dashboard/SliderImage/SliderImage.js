import { queryAllByAttribute } from "@testing-library/react";
import React, { useState } from "react";
import { toast } from 'react-toastify';
import Card from "../Card";
import Swal from "sweetalert2";

const SliderImage = () => {
  const [info, setInfo] = useState({});
  const [file, setFile] = useState(null);

  const handelBlur = (e) => {
    const newInfo = { ...info };
    newInfo[e.target.name] = [e.target.value];
    // console.log(newInfo);
    setInfo(newInfo);
  };
  const handleFileChange = (e) => {
    const newFile = e.target.files[0];
    // console.log(newFile)
    setFile(newFile);
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", info.name);
    formData.append("email", info.email);

    fetch("https://sleepy-depths-81993.herokuapp.com/slider", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        toast("Image  Add Successfully!");
        // alert("Image Add SuccessFully");
      })
      .catch((error) => {
        console.error(error);
        
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: "Please, try again",
          });
      
      });
  };

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
                  <h2>Slider Upload</h2>
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
                 
                  <form onSubmit={handelSubmit} >
                  <div className="input-style-1">
                    <label>Full Name</label>
                    <input
                      type="text"
                      onBlur={handelBlur}
                      name="name"
                      className="form-control"
                      placeholder="Enter your time"
                    />
                  </div>
                  <div className="input-style-1">
                    <label>Email</label>
                    <input
                      type="email"
                      onBlur={handelBlur}
                      name="email"
                      className="form-control"
                      placeholder="Enter your Email"
                    />
                  </div>
                  {/* end input */}
                  <div className="input-style-2">
                    <input
                      onChange={handleFileChange}
                      // name="file"
                      type="file"
                      className="form-control"
                      placeholder="Enter your time"
                    />
                    <span className="icon">
                      {" "}
                      <i className="lni lni-user" />{" "}
                    </span>
                  </div>
                  {/* end input */}

                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                  </form>
                  {/* end input */}
                </div>
                {/* end card */}
                {/* ======= input style end ======= */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <Card></Card>
    </>
  );
};

export default SliderImage;
