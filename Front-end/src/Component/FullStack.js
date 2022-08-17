import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FullStack = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
  };
  const skills = [
    { name: "React js", level: "Good" },
    { name: "SQL server", level: "Good" },
    { name: "Laravel API", level: "Good" },
    { name: "English", level: "Good" },
    { name: "C#", level: "Good" },
  ];
  const projects = [
    {
      time: "June 2022 - August 2022",
      name: "VNHP-Health-Care",
      position: "Full-Stack",
      labelDescription: "Web Application",
      description:
        "This project is about health care. Customer can register,login,view product, buy health service,online booking appoinment,pay bill online",
      labelWork: "Main work",
      works: [
        "Design Database",
        "User profile,register,login. Admin (doctor) view history,create new bill.",
        "Suport team",
        ,
      ],
      labelSource: "Source code",
      source:
        "https://gitlab.com/vnhp-group/fitness-lifestyle-tech-wiz/-/tree/developer",
      video: "",
      imageFolder: "FullStack/HealthCare/",
      images: [
        "z3651715456221_73ff811c077f17cf410645c2d8ab7540.jpg",
        "z3651715591345_540d8d9dd5b3a8e4ca697a49d13451a9.jpg",
        "z3651715995366_47cec96bc0650adb24bb3450e1615650.jpg",
        "z3651716104861_188cb44c3e7d923e7c1dc91332286124.jpg",
        "z3651718295738_fada528650615438065982c4d2657e41.jpg",
        "z3651718459598_b0d474abf2e09843c3ff7359c5226372.jpg",
        "z3651718541875_f9a89ad27849c9c28c9f6f5ce81e2710.jpg",
        "z3651718612663_3fe4718434cc1f20242535625165839c.jpg",
        "z3651718673216_743a275eb902ead41ba2bcf09bf1fb63.jpg",
        "z3651718935092_e1d9ae52636deeba1259ec58c6578588.jpg",
        "z3651718945108_5e16b3d73bbcc6bdcde5efac697c6e73.jpg",
      ],
    },
    {
      time: "June 2022 - July 2022",
      name: "VNHP-Online-Aution",
      position: "Full-Stack",
      labelDescription: "Web Application",
      description:
        "This project is about online aution. Customer can register,login,view product, online aution(realtime),online payment",
      labelWork: "Main work",
      works: [
        "Design Database",
        "User page: register,login,profile",
        "Suport team",
      ],
      labelSource: "Source code",
      source:
        "https://github.com/phongvan-1412/VNHP-Online-Auction/tree/develop",
      video: "",
      imageFolder: "FullStack/OnlineAution/",
      images: [
        "z3651706290432_439d23d45dd8788a2cd9814d6967ea7f.jpg",
        "z3651706411849_55a518d38080be6340e9a2d9386059b9.jpg",
        "z3651708092831_a5162437ecdb8a1ea71c6f84de6c8f7e.jpg",
        "z3651708254310_29adc1651755bcb3259af2f5246b7cfa.jpg",
      ],
    },
  ];
  return (
    <div className="container card-body">
      <div className="experience-content">
        <h5>SKILLS</h5>
        <hr id="hr-header" />
        {skills.map((skill, index) => {
          return (
            <div key={index}>
              <span>
                <b>{skill.name}:</b>
              </span>
              {"    "}
              <span className="skill-level">{skill.level}</span>
            </div>
          );
        })}
        <hr />
      </div>
      <div className="experience-content">
        <h5>PROJECT</h5>
        <hr id="hr-header" />

        {projects.map((project, index) => {
          return (
            <div className="row" key={index}>
              <div className="col-3">
                <b>{project.time}</b>
              </div>
              <div className="col-9">
                <div>
                  <h5>{project.name}</h5>
                </div>

                <div>
                  <b>{project.position}</b>
                </div>
                <div>
                  <b>{project.labelDescription}</b>
                </div>
                <div>-{project.description}</div>
                <div>
                  <b>{project.labelWork}</b>
                </div>
                <div>
                  {project.works.map((work, index) => {
                    return <div key={index}>-{work}</div>;
                  })}
                </div>
                <div>
                  <b>{project.labelSource}</b>
                </div>
                <div>
                  <a
                    href={project.source}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Link
                  </a>
                </div>
                <div>
                  <b>Video</b>
                </div>
                <div>
                  <a href={project.video}>Link</a>
                </div>
                <div>
                  <b>Images</b>
                </div>
                <div>
                  <Slider {...settings}>
                    {project.images.map((image, index) => {
                      return (
                        <img
                          className="project-images"
                          key={index}
                          src={require("../Image/" +
                            project.imageFolder +
                            image)}
                        />
                      );
                    })}
                  </Slider>
                </div>
                <hr />
              </div>
            </div>
          );
        })}
      </div>

      <div className="experience-content">
        <h5>ADDITIONAL INFORMATION</h5>
        <hr id="hr-header" />
        <div>
          <span>- Proactivity, creativity,studious.</span>
        </div>
        <div>
          <span>- Good problem-solving skills.</span>
        </div>
        <div>
          <span>- Good communication skills - English proficiency needed</span>
        </div>
        <div>
          <span>
            - Good skill with react back-end,laravel API,C# and Sql Server
          </span>
        </div>
        <div>
          <span>
            - Good work both independently and in teams on solutions for
            specified requirements
          </span>
        </div>
        <hr />
      </div>

      <div className="experience-content">
        <h5>EDUCATION</h5>
        <hr id="hr-header" />
        <div className="row">
          <div className="col-3">Jul 2021 - Now</div>
          <div className="col-9">
            <h4>Aptech</h4>
            <h6>Full-Stack Developer</h6>
            <span>I am currently study semester 2 in Aptech</span>
          </div>
        </div>

        <hr />
      </div>
    </div>
  );
};
export default FullStack;
