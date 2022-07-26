import React from 'react'

import style from 'assets/styles/modules/project/project-hero.module.scss'

const ProjectSection_1 = () => {
    return (
        <div className={`container-fluid px-0`}>
            <div className={`three-divided-section`}>
                <div className="container">
                    <div className={`row section-wrapper`}>
                        <div className="col-4">
                            <h5>
                                Type
                            </h5>

                            <h4>
                                {/* Type */}
                            </h4>

                            <p className="mt-5">
                                Concept project
                            </p>
                        </div>

                        <div className="col-4">
                            <h5>
                                02
                            </h5>
                            <h4>
                                Web Development
                            </h4>

                            {/* <p className="mt-5">
                                I build scalable websites from scratch that fit seamlessly with design. My focus is on micro animations, transitions and interaction. For content management I use Kirby CMS.
                            </p> */}
                        </div>

                        <div className="col-4">
                            <h5>
                                03
                            </h5>
                            <h4>
                                Full-Stack Development
                            </h4>

                            {/* <p className="mt-5">
                                A complete website from concept to implementation, that's what makes me stand out. My great sense for design and my development skills enable me to create kick-ass projects.
                            </p> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectSection_1