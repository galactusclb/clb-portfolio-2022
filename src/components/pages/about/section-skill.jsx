import React from 'react'

import style from 'assets/styles/modules/about-me/section-skill.module.scss'
import MagneticDOM from 'components/common/button/MagneticDOM';
import useHover from 'utils/useHover';
import { useState } from 'react';

const SectionSkill = () => {

    const [GG, isHH] = useHover();

    const [skills, setSkills] = useState([
        'Angular',
        'ReactJs',
        'NextJs',
        'NodeJs',
        'Laravel'
    ])

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
                <div className={`${style['section-right']} col-lg`}>

                    <MagneticDOM ref={GG} >
                        <button type='button' className={`clb-btn-circle row justify-content-center align-items-center mt-5`} onClick={() => console.log('clicked 2')}>
                            <span className='text-center'>
                                View Projects
                            </span>
                        </button>
                    </MagneticDOM>
                </div>
            </div>
        </section>
    )
}

export default SectionSkill