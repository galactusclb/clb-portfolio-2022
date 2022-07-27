import React from 'react'

import style from 'assets/styles/modules/project/project-section-big-title.module.scss'

const SectionBigTitle = () => {
    return (
        <section className={`${style['clb-section']} container d-flex align-items-center justify-content-center`}>
            <div className={`${style['abstract-bg']}`}>
                <img src={`${process.env.PUBLIC_URL}/images/project-images/vecteezy_vector-abstract-marble-texture-fluid-art-zebra-effect-black_5412307.jpg`} alt="" className='' />
            </div>

            <h1>
                TastyMock
            </h1>
        </section>
    )
}

export default SectionBigTitle