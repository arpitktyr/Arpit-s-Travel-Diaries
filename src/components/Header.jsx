import React, { useEffect, useState } from "react";

import whiteLogo from "./../assets/logo_crop.svg";
import blackLogo from "../assets/logo_black.svg";

const Header = () => {
  const [logo, setLogo] = useState(whiteLogo);

  useEffect(() => {
    const toggleSwitch = document.querySelector(
      '.theme-switch input[type="checkbox"]'
    );
    const currentTheme = localStorage.getItem("theme");
    const updateLogo = (theme) => {
      const siteHeader = document.getElementById("site-header");
      // Check if the site header has the 'nav-fixed' class
      if (siteHeader && siteHeader.classList.contains("nav-fixed")) {
        setLogo(theme === "dark" ? whiteLogo : blackLogo);
      } else {
        setLogo(whiteLogo);
      }
    };

    if (currentTheme) {
      document.documentElement.setAttribute("data-theme", currentTheme);
      updateLogo(currentTheme);

      if (currentTheme === "dark") {
        toggleSwitch.checked = true;
      }
    }

    const switchTheme = (e) => {
      const newTheme = e.target.checked ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);
      updateLogo(newTheme);
    };

    if (toggleSwitch) {
      toggleSwitch.addEventListener("change", switchTheme, false);
    }

    const scrollFunction = () => {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        document.getElementById("movetop").style.display = "block";
      } else {
        document.getElementById("movetop").style.display = "none";
      }
    };

    window.onscroll = function () {
      scrollFunction();
    };

    // const topFunction = () => {
    //   document.body.scrollTop = 0;
    //   document.documentElement.scrollTop = 0;
    // };

    // document.getElementById("movetop").onclick = topFunction;

    // Auto typing effect
    // const autoType = (elementClass, typingSpeed) => {
    //   const thhis = document.querySelector(elementClass);
    //   thhis.style.position = "relative";
    //   thhis.style.display = "inline-block";
    //   thhis.insertAdjacentHTML(
    //     "afterbegin",
    //     '<div class="cursor" style="right: initial; left:0;"></div>'
    //   );
    //   const textElement = thhis.querySelector(".text-js");
    //   const text = textElement.textContent.trim().split("");
    //   let amntOfChars = text.length;
    //   let newString = "";
    //   textElement.textContent = "|";
    //   setTimeout(() => {
    //     textElement.style.opacity = 1;
    //     textElement.previousElementSibling.removeAttribute("style");
    //     textElement.textContent = "";
    //     text.forEach((char, i) => {
    //       setTimeout(() => {
    //         newString += char;
    //         textElement.textContent = newString;
    //       }, i * typingSpeed);
    //     });
    //   }, 1500);
    // };

    // autoType(".type-js", 200);

    // Carousel initialization
    const initializeCarousel = () => {
      $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 0,
        responsiveClass: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplaySpeed: 1000,
        autoplayHoverPause: true,
        responsive: {
          0: {
            items: 1,
            nav: true,
          },
          480: {
            items: 2,
            nav: true,
            margin: 20,
          },
          667: {
            items: 2,
            nav: true,
            margin: 20,
          },
          1000: {
            items: 3,
            nav: true,
            margin: 20,
          },
        },
      });
    };

    $(document).ready(() => {
      initializeCarousel();

      // Navigation scroll effect
      $(window).on("scroll", () => {
        const scroll = $(window).scrollTop();
        if (scroll >= 80) {
          // console.log(currentTheme);
          setLogo(
            localStorage.getItem("theme") === "dark" ? whiteLogo : blackLogo
          );
          $("#site-header").addClass("nav-fixed");
        } else {
          $("#site-header").removeClass("nav-fixed");
          setLogo(whiteLogo);
        }
      });

      // Main navigation active class toggle
      $(".navbar-toggler").on("click", () => {
        $("header").toggleClass("active");
      });

      $(document).on("ready", () => {
        if ($(window).width() > 991) {
          $("header").removeClass("active");
        }
        $(window).on("resize", () => {
          if ($(window).width() > 991) {
            $("header").removeClass("active");
          }
        });
      });

      $(".navbar-toggler").click(() => {
        $("body").toggleClass("noscroll");
      });
    });

    // Cleanup function
    return () => {
      if (toggleSwitch) {
        toggleSwitch.removeEventListener("change", switchTheme, false);
      }
      window.onscroll = null;
      // document.getElementById("movetop").onclick = null;
      $(window).off("scroll");
      $(".navbar-toggler").off("click");
      $(window).off("resize");
      $(document).off("ready");
    };
  }, []);

  return (
    <div className="header-section">
      <header id="site-header" className="fixed-top">
        <div className="container p-lg-0">
          <nav className="navbar navbar-expand-lg stroke p-lg-0">
            <h1>
              <a className="navbar-brand only-for-mobile" href="./">
                {/* <i className="fa fa-book mr-2" aria-hidden="true"></i> */}
                <img
                  alt="Arpit's travel diaries logo"
                  src={logo}
                  title="Arpit's travel diaries"
                  style={{ width: "100%", marginRight: "10px" }}
                />
                Arpit's Travel Diaries
              </a>
            </h1>
            <a className="navbar-brand only-for-desktop" href="./">
              {/* {/* <img
                alt="Arpit's travel diaries logo"
                src="assets/logo.png"
                title="Arpit's travel diaries"
              /> */}
              <img
                alt="Arpit's travel diaries logo"
                src={whiteLogo}
                title="Arpit's travel diaries"
                style={{ width: "75%" }}
              />
              {/* <img
                alt="Arpit's travel diaries logo"
                src={logo2}
                title="Arpit's travel diaries"
              /> */}
            </a>
            <button
              className="navbar-toggler  collapsed bg-gradient"
              type="button"
              data-toggle="collapse"
              data-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon fa icon-expand fa-bars"></span>
              <span className="navbar-toggler-icon fa icon-close fa-times"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <a className="nav-link" href="/">
                    Home <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/about">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="./">
                    Travel Stories
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="./">
                    Contact Us
                  </a>
                </li>

                <div className="search-right">
                  <form
                    action="#search"
                    method="GET"
                    className="search-box d-flex align-items-center position-relative"
                  >
                    <div className="input-search">
                      <input
                        type="search"
                        placeholder="Enter Keyword"
                        name="search"
                        required="required"
                        autoFocus=""
                        className="search-popup"
                      />
                    </div>
                    <button type="submit" className="btn search-btn">
                      <i className="fa fa-search" aria-hidden="true"></i>
                    </button>
                  </form>
                </div>
              </ul>
            </div>
            <div className="cont-ser-position">
              <nav className="navigation">
                <div className="theme-switch-wrapper">
                  <label className="theme-switch" htmlFor="checkbox">
                    <input type="checkbox" id="checkbox" />
                    <div className="mode-container">
                      <i className="gg-sun"></i>
                      <i className="gg-moon"></i>
                    </div>
                  </label>
                </div>
              </nav>
            </div>
            <div className="cont-details mt-5">
              {/* <div className="d-flex text-disp-content">
                <i className="fa fa-clock-o mr-2" aria-hidden="true"></i>
                <div className="cont-right-dis">
                  <label>Sat-Sun: 08.00 - 19.00</label>
                  <p>Other Days: Closed</p>
                </div>
              </div> */}
              <div className="d-flex text-disp-content mt-4 pt-xl-2">
                <i
                  className="fa fa-volume-control-phone mr-2"
                  aria-hidden="true"
                ></i>
                <div className="cont-right-dis">
                  <label>Don't Call, Email us</label>
                  <p>w3.arpit@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="main-social-top mt-5 pt-xl-4 text-center">
              <ul>
                <li>
                  <a href="#facebook" className="facebook">
                    <span className="fa fa-facebook"></span>
                  </a>
                </li>
                <li>
                  <a href="#twitter" className="twitter">
                    <span className="fa fa-twitter"></span>
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="#instagram" className="instagram">
                    <span className="fa fa-instagram"></span>
                  </a>
                </li>
                <li>
                  <a href="#linkedin" className="linkedin">
                    <span className="fa fa-linkedin"></span>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
