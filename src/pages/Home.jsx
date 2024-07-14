import React, { useEffect } from "react";

const Home = () => {
  return (
    <>
      <section className="w3l-main-slider" id="home">
        <div className="banner-content" id="demo-1">
          {/* <div
            id="demo-1"
            data-zs-src='["public/assets/images/banner1.jpg", "assets/images/banner2.jpg","assets/images/banner3.jpg","assets/images/banner4.jpg","assets/images/banner5.jpg"]'
            data-zs-overlay="dots"
          > */}

          <div className="main-banner">
            <div className="demo-inner-content">
              <div className="container">
                <div className="banner-info">
                  <h3>Beyond the Desk: Corporate Life to Travel Bliss</h3>
                  <p className="mt-1">
                    {/* Join Arpit as he shares his travels, whether it's a
                    spontaneous weekend trip or an extended journey. Discover
                    moments of joy, discovery, and inspiration that transcend
                    the usual corporate grind. */}
                    Discover the tales of my travels, from quick weekend
                    getaways to extended adventures. Each story captures unique
                    experiences and moments that offer a refreshing escape from
                    the usual corporate life. Join me in exploring the beauty,
                    culture, and excitement the world has to offer.
                  </p>
                  {/* <a className="btn btn-style mt-4" href="#appointment">
                    Make An Appointment
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="w3l-grids-block-5 py-5">
        <div className="container py-md-5 py-4">
          <h3 className="title-style">Our Latest Adventures</h3>
          <p className="sub-title">
            Join us for short trips and long travels stories. Find unforgettable
            moments along the way.
          </p>
          <div className="row mt-5">
            <div className="col-lg-4 col-sm-6">
              <div className="blog-card-single">
                <div className="grids5-info">
                  <a href="#blog">
                    <img src="assets/images/uttrakhand.jpg" alt="" />
                  </a>
                  <div className="blog-info">
                    <h5>
                      May 23, 2024 - <a href="blog-single">New</a>
                    </h5>
                    <h4>
                      <a href="#blog">Uttrakhand: Do-Dham</a>
                    </h4>
                    <p>
                      It is about completing the Kedarnath and Badrinath darshan
                      along adventures activities in Risikesh
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mt-sm-0 mt-4">
              <div className="blog-card-single">
                <div className="grids5-info">
                  <a href="#blog">
                    <img src="assets/images/udaipur.jpg" alt="" />
                  </a>
                  <div className="blog-info">
                    <h5>
                      Dec 31, 2023 - <a href="#">New</a>
                    </h5>
                    <h4>
                      <a href="#blog">Udaipur</a>
                    </h4>
                    <p>
                      4 days 5 nights travel experiences, where we cover all the
                      udaipur's famous places.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mt-lg-0 mt-4">
              <div className="blog-card-single">
                <div className="grids5-info">
                  <a href="#blog">
                    <img src="assets/images/jaipur.jpg" alt="" />
                  </a>
                  <div className="blog-info">
                    <h5>
                      Feb, 2023 - <a href="blog-single">New</a>
                    </h5>
                    <h4>
                      <a href="#blog">Jaipur</a>
                    </h4>
                    <p>
                      3 days 4 night travel experiences, where we mainly visit
                      all the famous places and forts.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-md-5 mt-4 text-center">
            <a className="btn btn-style mt-2" href="">
              View More
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
