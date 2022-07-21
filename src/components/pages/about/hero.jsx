import React from 'react'

import style from 'assets/styles/modules/about-me/hero.module.scss'

const AboutHero = () => {
    return (
        <div className={`${style['clb-main']} container row align-items-end mx-auto`}>
            <div className="col">
                <div className="row">
                    <div className={`${style['section-left']} col-lg-5 d-flex align-items-end`}>
                        <div className={`${style['img-wrapper']}`}>
                            {/* <img src="" alt="" srcset="" /> */}
                        </div>
                    </div>
                    <div className={`${style['section-right']} col-lg-7`}>
                        <div className={`${style['h1-wrapper']} d-flex flex-column align-items-end`}>
                            <h1>About</h1>
                            <h1>Me</h1>
                        </div>
                        <div className={`${style['section-bottom']} d-flex flex-column align-items-start`}>
                            <p>
                                I help companies from all over the world with tailor-made solutions. With each project,
                                I push my work to new horizons, always putting quality first.
                            </p>

                            <p className='mt-3'>Always exploring...</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AboutHero