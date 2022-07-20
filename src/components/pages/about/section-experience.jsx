import React from 'react'

import style from 'assets/styles/modules/about-me/section-skill.module.scss'

const SectionExperience = () => {

    const skills = [
        'Angular',
        'ReactJs',
        'NextJs',
        'NodeJs',
        'Laravel'
    ]

    return (
        <section className={`${style['section-main']} container`}>
            <div className="row">
                <div className={`${style['section-left']} col-lg-9`}>
                    <h3>Experience</h3>

                    <p className='mt-5'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condim.
                    </p>

                    <div className="clb-item-with-inline-img d-flex flex-row flex-nowrap mt-5">
                        <div className="item-img-wrapper"></div>
                        <div className="item-title-wrapper">
                            <h4>Software Engineer</h4>
                            <h5>Nova Solutions (Pvt) Ltd</h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionExperience