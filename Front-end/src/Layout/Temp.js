<div>
              <h3 id="project" className="landing-page-lable">
                Projects
              </h3>
              {this.state.projectsLoading ? (
                <div className="container">
                  <div className="row">
                    <div className="d-flex justify-content-center">
                      <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div id="projects-wrapper">
                  {this.state.projects.map((project, index) => {
                    return (
                      <button
                        key={index}
                        style={{
                          backgroundImage: `url(${IMAGE}${project.thumbnail_name})`,
                          backgroundSize: "cover",
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "center",
                        }}
                        className="button"
                        value={project.id}
                        data-content={project.name}
                        onClick={openModalUpdateProject}
                      >
                        {/* {project.name} */}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
            <Modal
              isOpen={this.state.modalProjectIsOpen}
              onAfterOpen={afterOpenModalUpdateProject}
              onRequestClose={closeModalUpdateProject}
              style={customStyles}
              contentLabel="Project Modal"
            >
              <h2
                ref={(_subtitle) => (subtitle = _subtitle)}
                className="modal-title"
              >
                {this.state.currentProject.name}
                <i
                  className="fa-solid fa-rectangle-xmark close-icon"
                  onClick={closeModalUpdateProject}
                ></i>
              </h2>

              <Project
                currentProject={this.state.currentProject}
                videos={this.state.videos}
                images={this.state.images}
                loadingImages={this.state.loadingImages}
                loadingVideos={this.state.loadingVideos}
              />
            </Modal>