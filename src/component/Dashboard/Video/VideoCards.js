import React, { useEffect, useState } from "react";

import VideoCard from "./VideoCard";

const VideoCards = () => {
  const [img, setImg] = useState([]);

  // {

  //   img.map(data =><Cards key={data_id} data={data}></Cards>)

  //  }

  useEffect(() => {
    fetch("https://sleepy-depths-81993.herokuapp.com/video")
      .then((res) => res.json())
      .then((data) => setImg(data));
  }, []);
  return (
    <>
      <section className="card-components main-wrapper">
        <div className="container-fluid">
          {/* ========== title-wrapper start ========== */}
          <div className="title-wrapper pt-30">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="title mb-30">
                  <h2>Slider collection</h2>
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
                      <li className="breadcrumb-item">
                        <a href="#0">UI Components</a>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Slider collection
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
          {/* ========== cards-styles start ========== */}
          <div className="cards-styles">
            {/* end row */}
            {/* ========= card-style-2 end ========= */}
            {/* ========= card-style-3 start ========= */}
            {img.length ===0 ? <div class="d-flex justify-content-center">
                            <div class="spinner-border" role="status">
                              <span class="visually-hidden">Loading...</span>
                            </div>
                          </div>:<>
            <div className="row">
              {/* end col */}
              {img.map((item) => (
                <VideoCard key={item._id} item={item}></VideoCard>
              ))}
              {/* end col */}
              {/* <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                <div className="card-style-3 mb-30">
                  <div className="card-content">
                    <h4><a href="#0">Card Title here </a></h4>
                    <p>
                      With supporting text below as a natural lead-in to
                      additional content. consectetur adipiscing elit. Integer
                      posuere erat a ante. With supporting text below as a
                      natural lead-in to additional content. consectetur
                      adipiscing elit. Integer posuere erat a ante.
                    </p>
                    <a href="#0" className="read-more">Read More</a>
                  </div>
                </div>
              </div> */}
              {/* end col */}

              {/* end col */}
            </div>
            {/* end row */}
            {/* ========= card-style-3 end ========= */}
</>
            }
          </div>
          {/* ========== cards-styles end ========== */}
        </div>
        {/* end container */}
      </section>
      {/* ========== card components end ========== */}
    </>
  );
};

export default VideoCards;
