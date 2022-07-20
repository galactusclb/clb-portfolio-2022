import React from 'react'

import style from 'assets/styles/modules/about-me/section-skill.module.scss'

const SectionSkill = () => {

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
                    <h3>Skills</h3>

                    <div className={`${style['skill-list']} d-flex flex-wrap mt-5`}>
                        {
                            skills?.map((skill) => {
                                return (
                                    <div className="clb-btn-rounded">
                                        {skill}
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionSkill