import React from "react";

const Content = () => {
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
export default Content;
