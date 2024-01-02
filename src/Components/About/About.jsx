import React from "react";

import Image from "../../assets/About.png";
import bg from "../../assets/bg.jpg";

function About() {
  const mainContainer = {
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    padding: "44px",
  };

  return (
    <section style={mainContainer} id="about">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-24 gap-7">
          <div className="flex flex-col items-center justify-center">
            <img
              className="object-cover max-w-full max-h-full mx-auto shadow-xl mb-2"
              src={Image}
              alt="img_about"
              style={{
                boxShadow: "5px -5px 10px rgba(0, 0, 0, 0.15)",
              }}
            />
          </div>

          <div className="flex flex-col items-ceter text-center lg:items-start lg:text-left">
            <div className="flex flex-col">
              <h2
                className="mb-4 text-proxima-nova-600 text-accent text-4xl"
                style={{
                  fontFamily: "proxima-nova, sans-serif",
                  fontWeight: 590,
                  color: "rgb(5 150 105)",
                  fontSize: "2rem",
                }}
              >
                About
              </h2>
              <hr className="mb-2 border-t border-gray-500 border-1" />
              <p className="mb-6">
                Full Stack Developer skilled in creating and optimizing websites
                and applications for end users in a scalable and modular manner.
                <br />
                <br />
                I like to investigate, solve problems, learn from others and
                contribute ideas in order to achieve optimal results, that is
                why in me you will find a developer with the ability to resolve
                conflicts, willing to listen to ideas and contribute all my
                knowledge to achieve the goals. proposed objectives.
                <br />
                <br />I am proficient in JavaScript, HTML, and CSS, with
                hands-on experience in technologies such as Node.js, Express,
                Sequelize, PostgreSQL, React.js, and Redux. Additionally, I am
                well-versed in version control systems, particularly Git.
              </p>
            </div>
            <a
              href="https://www.linkedin.com/in/franco-quenallata-2a2a11270/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn btn-md bg-accent hover:bg-accent-hover md:btn-lg transition-all">
                My CV
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
