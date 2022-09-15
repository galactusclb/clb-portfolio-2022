import React from 'react'

import style from 'assets/styles/modules/project/project-hero.module.scss'

const ProjectSection_1 = () => {
    return (
        <div className={`container-fluid px-0`}>
            <div className={`clb-meta-wrap`}>
                <div className="container">
                    <div className={`row section-wrapper v2`}>
                        <div className="col-3">
                            <h5>
                                Type
                            </h5>

                            <h4 className="mt-4">
                                Concept project
                            </h4>


                        </div>

                        <div className="col-3">
                            <h5>
                                Expertise
                            </h5>
                            <h4 className="mt-4">
                                Development
                            </h4>
                        </div>

                        <div className="col-3">
                            <h5>
                                Platforms
                            </h5>
                            <h4 className="mt-4">
                                Web,iOS and API
                            </h4>
                        </div>

                        <div className="col-3">
                            <h5>
                                Interested?
                            </h5>

                            <h4 className="mt-4">
                                <a href="" className='clb-link-text'>
                                    <span className='inner-text'>
                                        Try TastyMock
                                    </span>

                                    <div className="clb-link-lines">
                                        <div className="clb-link-lines_bg"></div>
                                        <div className="clb-link-lines_solid"></div>
                                    </div>

                                </a>
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectSection_1