import React, { useState } from "react";
import ProductList from "../ProductList/ProductList";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const ProductAdd = () => {
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
    formData.append("subject", info.subject);
    formData.append("price", info.price);
    formData.append("publisher", info.publisher);
    formData.append("link", info.link);

    fetch("https://sleepy-depths-81993.herokuapp.com/items", {
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
      console.log(formData)
  };
 

  return (
    <>
      <div className="main-wrapper">
        <div className="container-fluid">
          {/* ========== title-wrapper start ========== */}
          <div className="title-wrapper pt-30">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="title d-flex align-items-center flex-wrap mb-30">
                  <h2 className="mr-40">Product ADD</h2>
                  <button
                    className="main-btn primary-btn btn-hover btn-sm  "
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <i className="lni lni-plus mr-5" /> ADD Product
                  </button>
                  <div
                    className="modal fade"
                    id="exampleModal"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="form-elements-wrapper">
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="w-75 m-auto mt-5">
                                <h2 className="text-center">Product Add</h2>
                                <form onSubmit={handelSubmit}>
                                  <div class="mb-3">
                                    <label class="form-label">Subject</label>
                                    <input
                                      onBlur={handelBlur}
                                      name="subject"
                                      type="text"
                                      class="form-control"
                                      placeholder="Product subject"
                                      required
                                    />
                                  </div>
                                  <div class="mb-3">
                                    <label class="form-label">
                                      {" "}
                                      Upload a Image
                                    </label>
                                    <input
                                      onChange={handleFileChange}
                                      type="file"
                                      class="form-control"
                                      placeholder="Enter your image url"
                                      required
                                    />
                                  </div>
                                  <div class="mb-3">
                                    <label class="form-label">
                                      Product Name
                                    </label>
                                    <input
                                      onBlur={handelBlur}
                                      name="name"
                                      type="text"
                                      class="form-control"
                                      placeholder="Enter your product Name"
                                      required
                                    />
                                  </div>
                                  <div class="mb-3">
                                    <label class="form-label">Price</label>
                                    <input
                                      onBlur={handelBlur}
                                      name="price"
                                      type="number"
                                      class="form-control"
                                      placeholder="Enter product price"
                                      required
                                    />
                                  </div>
                                  <div class="mb-3">
                                    <label class="form-label">Publisher</label>
                                    <input
                                      onBlur={handelBlur}
                                      name="publisher"
                                      type="text"
                                      class="form-control"
                                      placeholder="Enter your Publisher name"
                                      required
                                    />
                                  </div>
                                  <div class="mb-3">
                                    <label class="form-label">Link</label>
                                    <input
                                      onBlur={handelBlur}
                                      name="link"
                                      type="text"
                                      class="form-control"
                                      placeholder="Enter your Link"
                                      required
                                    />
                                  </div>

                                  <button
                                    type="submit"
                                    class="btn btn-primary w-100 mb-5"
                                  >
                                    Submit
                                  </button>
                                </form>

                                <div></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
                        Product
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
          {/* Invoice Wrapper Start */}
          <div className="invoice-wrapper">
            <ProductList></ProductList>
          </div>
          {/* Invoice Wrapper End */}
        </div>
        {/* end container */}
        {/* ========== section end ========== */}
      </div>

      {/* <div className="w-50 m-auto mt-5">
        <h2 className="text-center">Product Add</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div class="mb-3">
            <label class="form-label">Subject</label>
            <input
              {...register("subject")}
              type="text"
              class="form-control"
              placeholder="Product subject"
            />
          </div>
          <div class="mb-3">
            <label class="form-label"> Upload a Image</label>
            <input
              {...register("img")}
              type="file"
              class="form-control"
              placeholder="Enter your image url"
            />
          </div>
          <div class="mb-3">
            <label class="form-label">Product Name</label>
            <input
              {...register("name")}
              type="text"
              class="form-control"
              placeholder="Enter your product Name"
            />
          </div>
          <div class="mb-3">
            <label class="form-label">Price</label>
            <input
              {...register("price")}
              type="number"
              class="form-control"
              placeholder="Enter product price"
            />
          </div>
          <div class="mb-3">
            <label class="form-label">Publisher</label>
            <input
              {...register("publisher")}
              type="text"
              class="form-control"
              placeholder="Enter your Publisher name"
            />
          </div>
          <div class="mb-3">
            <label class="form-label">Link</label>
            <input
              {...register("url")}
              type="text"
              class="form-control"
              placeholder="Enter your Link"
            />
          </div>

          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>

        <div></div>
      </div> */}
    </>
  );
};

export default ProductAdd;
