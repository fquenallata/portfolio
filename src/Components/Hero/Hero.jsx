import React from "react";

import Banner from "../../assets/img/Negro.png";
import { navigation } from "../../data";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section
      id="home"
      className=" lg:h-[85vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden"
    >
      <div className="container mx-auto h-full">
        <div className="flex items-center h-full pt-8">
          <div className="flex-1 flex flex-col items-center lg:items-start">
            <h1
              className="text-4xl  md:text-3xl lg:text-4xl font-bold md:tracking-wide"
              style={{
                fontFamily: "Roboto Mono, sans-serif",
                fontWeight: 590,
              }}
            >
              F r a n c o - Q u e n a l l a t a
            </h1>

            <p className="pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-2xl text-center lg:text-left">
              GM, I'm Fran. I enjoy building dynamic, creative products from
              start to finish. Focused on developing intuitive experiences that
              constantly grow and improve based on user metrics. <br />
              <b>
                <i>Got something in mind?</i>
              </b>
            </p>
            <Link
              to={navigation[3].href}
              activeClass="active"
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
              className="transition-all duration-300"
            >
              <button className="btn btn-md bg-accent hover:bg-accent-hover md:btn-lg transition-all text-2xl">
                {" "}
                Let's work together!{" "}
              </button>
            </Link>
          </div>
          <div className="hidden lg:flex flex-1 justify-end items-end h-full">
            <img src={Banner} alt="banner" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
