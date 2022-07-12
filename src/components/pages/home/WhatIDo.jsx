import React from 'react'

import style from 'assets/styles/modules/home/what-i-do.module.scss'

const WhatIDo = () => {
    return (
        <section className={`container-fluid ${style['clb-section']} px-0`}>
            <div className={`${style['clb-big-tittle']} container`}>
                <h2>
                    Helping brands thrive
                    in the digital world
                </h2>
            </div>

            <div className={`${style['work-section']}`}>
                <div className="container">
                    <h3>I can help you with ...</h3>

                    <div className={`row ${style['work-list']}`}>
                        <div className="col-4">
                            <h5>
                                01
                            </h5>

                            <h4>
                                UI Design
                            </h4>

                            <p className="mt-5">
                                With a solid track record in designing websites and apps, I deliver strong and user-friendly digital designs. Solid company branding is the foundation of any succesful website.
                            </p>
                        </div>

                        <div className="col-4">
                            <h5>
                                02
                            </h5>
                            <h4>
                                Web Development
                            </h4>

                            <p className="mt-5">
                                I build scalable websites from scratch that fit seamlessly with design. My focus is on micro animations, transitions and interaction. For content management I use Kirby CMS.
                            </p>
                        </div>

                        <div className="col-4">
                            <h5>
                                03
                            </h5>
                            <h4>
                                Full-Stack Development
                            </h4>

                            <p className="mt-5">
                                A complete website from concept to implementation, that's what makes me stand out. My great sense for design and my development skills enable me to create kick-ass projects.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhatIDo