import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Unity = () => {
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
    { name: "C#", level: "Good" },
    { name: "English", level: "Good" },
    { name: "DoTween,Scroller", level: "Normal" },
    { name: "Git", level: "Normal" },
  ];
  const projects = [
    {
      time: "April 2022 - Now",
      name: "Green Beli",
      position: "Fresher Unity Developer",
      labelDescription: "Web Game - Turn Base",
      description:
        "Green Beli was founded in 2019 with a mission to reduce plastic waste, promote a green lifestyle and raise the community's environmental awareness through media campaigns.",
      labelWork: "Main work",
      works: ["Build new feature - coffee voucher.", "Fix bug."],
      labelSource: "Link game",
      source: "https://build-dev.d325gj1lpt9b8d.amplifyapp.com/",
      video: <iframe width="560" height="315" src="https://www.youtube.com/embed/UFI4nEUiwyg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
      imageFolder: "Unity/GreenBeli/",
      images: [
        "z3652566003725_7fb6be8c40749bb7040c4fe31338acb6.jpg",
        "z3652567179096_594b9f9d22bfab3fd41e5860d24cc118.jpg",
        "z3652567880787_c28ed0231aa07bf541b8b4de08ca77df.jpg",
        "z3652569597512_78db4853750bd9e156c946791c1d2317.jpg",
        "z3652570718086_e3f2d23fa2a08589d752f4817f32712c.jpg",
        "z3652571254623_f908029b719b471bbde195108d0fa94f.jpg",
        "z3652571915980_207e84579bfaf3c7f15fe19580ac349f.jpg",
      ],
    },
    {
      time: "May 2022 - July 2022",
      name: "Escape Plan 3D",
      position: "Unity Developer",
      labelDescription: "PC-Third person",
      description:
        "Main character - Elen. She need kill monster,boss and find the way to the ship",
      labelWork: "Main work",
      works: ["Design core game.", "Suport team.", "Fix bug."],
      labelSource: "Source code",
      source: "https://gitlab.com/teeltruong/escapeplan3dproject.git",
      video: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/CqPRpWpDY5g"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      ),
      imageFolder: "Unity/EscapePlan3D/",
      images: [
        "z3652597336688_ecfd9344e482379c4da414aafacbd5e0.jpg",
        "z3652598179635_130a6eed098661e852f15996ceb484ec.jpg",
        "z3652599309514_97b21c11ce9b2f50c621dfd0dd7462a4.jpg",
        "z3652600126468_e500a49b99ba3b5794d3b107c9a8cd0b.jpg",
        "z3652601018032_28e727ded97db8725722b46504f8fc72.jpg",
        "z3652601641906_7e84dc9ababc1f02647b0d0476f07612.jpg",
        "z3652602309058_8a436887df40ce2961bca0f4a4f6f75b.jpg",
        "z3652602753827_0fba5a0ec6505002402c863d35b4fd13.jpg",
        "z3652603506435_f96c18250cfd96415ee1d6b858e554a6.jpg",
        "z3652604224654_2e5a7b15bf127e67c1ab3dc80f569e8a.jpg",
        "z3652604756039_d01106cb4e9affc12f642ac78b8973ac.jpg",
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
                <div>{project.video}</div>
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
        <h5>EXPERIENT</h5>
        <hr id="hr-header" />
        <div className="row">
          <div className="col-3">Arpil 2021 - Now</div>
          <div className="col-9">
            <h4>Green Beli</h4>
            <h6>Unity Developer</h6>
            <div>
              <span>- Join build core game.</span>
            </div>
            <div>
              <span>- Learn from leader,improve skill.</span>
            </div>
            <div>
              <span>- Work with Game designer, Server developer.</span>
            </div>
          </div>
        </div>

        <hr />
      </div>

      <div className="experience-content">
        <h5>ADDITIONAL INFORMATION</h5>
        <hr id="hr-header" />
        <div>
          <span>- Be proactive, creative and studious.</span>
        </div>
        <div>
          <span>- Good problem-solving skills.</span>
        </div>
        <div>
          <span>- Good communication skills - English proficiency needed.</span>
        </div>
        <div>
          <span>
            - Work well both independently and as a member of a team to find out
            solutions for specific requirements.
          </span>
        </div>
        <div>
          <span>- Have the ability to work under high pressure also.</span>
        </div>
        <hr />
      </div>

      <div className="experience-content">
        <h5>EDUCATION</h5>
        <hr id="hr-header" />
        <div className="row">
          <div className="col-3">July 2021 - July 2022</div>
          <div className="col-9">
            <h4>Green Academy</h4>
            <h6>Unity Developer</h6>
            <span>Finished</span>
          </div>
        </div>

        <hr />
      </div>
    </div>
  );
};
export default Unity;
