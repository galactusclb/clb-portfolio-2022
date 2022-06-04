import React from 'react'
import style from 'assets/styles/modules/home/project-list.module.scss'

const ProjectsList = () => {
    return (
        <section className={`container ${style['clb-section']} px-0`}>
            <div className={`${style['clb-big-tittle']} container`}>
                <h2>
                    Creating next level
                    digital products
                </h2>
            </div>
            <div className={`${style['clb-project-list']} container`}>
                <div className={`${style['clb-project-category']} d-flex`} style={{ gap: "1.5rem" }}>
                    <button className={`${style['active']} btn`}>
                        All
                    </button>
                    <button className={`btn`}>
                        Development
                    </button>
                    <button className={`btn`}>
                        UI design
                    </button>
                    <button className={`btn`}>
                        Illustration
                    </button>
                </div>

                <div className={`${style['clb-projects']}`} >
                    <div className={`${style['project-card']}`} >
                        <div className={`${style['project-card-inner']}`}>
                            <div className={`${style['project-card-header']} d-flex align-items-end justify-content-end`} style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/project-images/clb@2x-b7a156f86c4e9dd166cbcaba23dc53cb.jpg.webp)` }}>
                                <div className={`${style['project-showcase']}`}>
                                    <img src={`${process.env.PUBLIC_URL}/images/project-images/koeta-home.webp`} alt="koeta-home" />
                                </div>
                            </div>

                            <div className={`${style['project-card-body']}`}>
                                <h3>Tastymock</h3>

                                <div className={`${style['project-tags']} d-flex flex-row`}>
                                    <span>#Concept project</span>
                                    <span>#UI design</span>
                                </div>

                                <div className={`${style['project-info']} row mt-5`}>
                                    <div className={`${style['project-info-left']} col`}>
                                        <p>We did a complete redesign of Oxstreet online shop mobile experience: products exposure, catalogue, checkout and payment process.</p>
                                    </div>
                                    <div className={`${style['project-info-right']}`}>
                                        <button className="clb-btn-circle" style={{ width: 120, height: 120 }}>
                                            View
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={`${style['project-card']}`} >
                        <div className={`${style['project-card-inner']}`}>
                            <div className={`${style['project-card-header']} d-flex align-items-end justify-content-end`} style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/project-images/clb@2x-b7a156f86c4e9dd166cbcaba23dc53cb.jpg.webp)` }}>
                                <div className={`${style['project-showcase']}`}>
                                    <img src={`${process.env.PUBLIC_URL}/images/project-images/koeta-home.webp`} alt="koeta-home" />
                                </div>
                            </div>

                            <div className={`${style['project-card-body']}`}>
                                <h3>Tastymock</h3>

                                <div className={`${style['project-tags']} d-flex flex-row`}>
                                    <span>#Concept project</span>
                                    <span>#UI design</span>
                                </div>

                                <div className={`${style['project-info']} row mt-5`}>
                                    <div className={`${style['project-info-left']} col`}>
                                        <p>We did a complete redesign of Oxstreet online shop mobile experience: products exposure, catalogue, checkout and payment process.</p>
                                    </div>
                                    <div className={`${style['project-info-right']}`}>
                                        <button className="clb-btn-circle" style={{ width: 120, height: 120 }}>
                                            View
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={`${style['project-card']}`} >
                        <div className={`${style['project-card-inner']}`}>
                            <div className={`${style['project-card-header']} d-flex align-items-end justify-content-end`} style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/project-images/clb@2x-b7a156f86c4e9dd166cbcaba23dc53cb.jpg.webp)` }}>
                                <div className={`${style['project-showcase']}`}>
                                    <img src={`${process.env.PUBLIC_URL}/images/project-images/koeta-home.webp`} alt="koeta-home" />
                                </div>
                            </div>

                            <div className={`${style['project-card-body']}`}>
                                <h3>Tastymock</h3>

                                <div className={`${style['project-tags']} d-flex flex-row`}>
                                    <span>#Concept project</span>
                                    <span>#UI design</span>
                                </div>

                                <div className={`${style['project-info']} row mt-5`}>
                                    <div className={`${style['project-info-left']} col`}>
                                        <p>We did a complete redesign of Oxstreet online shop mobile experience: products exposure, catalogue, checkout and payment process.</p>
                                    </div>
                                    <div className={`${style['project-info-right']}`}>
                                        <button className="clb-btn-circle" style={{ width: 120, height: 120 }}>
                                            View
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={`${style['project-card']}`} >
                        <div className={`${style['project-card-inner']}`}>
                            <div className={`${style['project-card-header']} d-flex align-items-end justify-content-end`} style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/project-images/clb@2x-b7a156f86c4e9dd166cbcaba23dc53cb.jpg.webp)` }}>
                                <div className={`${style['project-showcase']}`}>
                                    <img src={`${process.env.PUBLIC_URL}/images/project-images/koeta-home.webp`} alt="koeta-home" />
                                </div>
                            </div>

                            <div className={`${style['project-card-body']}`}>
                                <h3>Tastymock</h3>

                                <div className={`${style['project-tags']} d-flex flex-row`}>
                                    <span>#Concept project</span>
                                    <span>#UI design</span>
                                </div>

                                <div className={`${style['project-info']} row mt-5`}>
                                    <div className={`${style['project-info-left']} col`}>
                                        <p>We did a complete redesign of Oxstreet online shop mobile experience: products exposure, catalogue, checkout and payment process.</p>
                                    </div>
                                    <div className={`${style['project-info-right']}`}>
                                        <button className="clb-btn-circle" style={{ width: 120, height: 120 }}>
                                            View
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProjectsList