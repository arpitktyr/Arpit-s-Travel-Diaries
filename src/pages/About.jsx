import React from "react";

const Home = () => {
  return (
    <>
      <div className="inner-banner">
        <section className="w3l-breadcrumb">
          <div className="container">
            <h4 className="inner-text-title font-weight-bold text-white mb-2">
              About Us
            </h4>
            <ul className="breadcrumbs-custom-path">
              <li>
                <a href="./">Home</a>
              </li>
              <li className="active">
                <span
                  className="fa fa-chevron-right mx-2"
                  aria-hidden="true"
                ></span>
                About Us
              </li>
            </ul>
          </div>
        </section>
      </div>

      <section className="w3l-text-6 py-5" id="about">
        <div className="text-6-mian py-md-4 py-3">
          <div className="container">
            <div className="row top-cont-grid align-items-center">
              <div className="col-lg-6 left-img pr-lg-4">
                <img
                  src="assets/images/about.jpg"
                  alt="about Banner"
                  className="img-responsive img-fluid"
                />
              </div>
              <div className="col-lg-6 text-6-info mt-lg-0 mt-4">
                <h3 className="title-style">About Us</h3>
                <p className="sub-title"> Arpit's Travel Diaries</p>
                <p className="mt-4">
                  Welcome to "Arpit's Travel Diaries," your ultimate destination
                  for immersive travel stories and adventures! Here, I share my
                  passion for exploring new places, cultures, and experiences.
                  Each weekend, I take you on a journey through my latest travel
                  escapades, providing a detailed account of the sights, sounds,
                  and flavors I've encountered along the way.
                  <br /> Why weekends, you ask? Well, during the weekdays, I
                  immerse myself in work, which leaves me feeling a bit "week."
                  But come the weekend, I'm revitalized and ready to embark on
                  new adventures, eager to capture and share every moment with
                  you. Whether you're an avid traveler or someone who loves
                  exploring the world from the comfort of your home, "Arpit's
                  Travel Diaries" promises to offer you a unique and personal
                  glimpse into the beauty and excitement of travel. <br />
                  Join me as I traverse stunning landscapes, dive into rich
                  cultures, and discover hidden gems around the globe. Let's
                  make every weekend a new adventure together!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
