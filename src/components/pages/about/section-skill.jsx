import React from 'react'
import { motion } from 'framer-motion'

import style from 'assets/styles/modules/about-me/section-skill.module.scss'
import MagneticDOM from 'components/common/button/MagneticDOM';
import useHover from 'utils/useHover';
import { useState } from 'react';
import { common_reveal, text_split_reveal } from 'animations/common-animation';
import { parent_animation } from 'animations/about-me/animaion_skill';

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
        <section className={`${style['section-main']} container px-4 px-sm-0`}>
            <div className="row">
                <div className={`${style['section-left']} col-lg-9`}>
                    <h3 className='split-reveal-overflow'>
                        <motion.span
                            variants={text_split_reveal}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            className=''>
                            Skills
                        </motion.span>
                    </h3>

                    <motion.div className={`${style['skill-list']} d-flex flex-wrap mt-5`}
                        variants={parent_animation}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                    >
                        {
                            skills?.map((skill, key) => {
                                return (
                                    <motion.div variants={common_reveal}
                                        initial="initial"
                                        whileInView="animate"
                                        custom={0.13 * key}
                                        viewport={{ once: true }}
                                        className="clb-btn-rounded" key={key}>
                                        {skill}
                                    </motion.div>
                                )
                            })
                        }
                    </motion.div>


                </div>
                <div className={`${style['section-right']} col-lg d-flex flex-column align-items-end align-items-sm-start`}>

                    <MagneticDOM ref={GG} >
                        <motion.button type='button' className={`clb-btn-circle row justify-content-center align-items-center mt-5`}
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 1, delay: 0.5 }}
                            viewport={{ once: true }}
                            onClick={() => console.log('clicked 2')}>

                            <motion.span className='text-center'
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                    ease: "easeInOut",
                                    duration: 1,
                                    delay: 0.8
                                }}>
                                View Projects
                            </motion.span>
                        </motion.button>
                    </MagneticDOM>
                </div>
            </div>
        </section>
    )
}

export default SectionSkill