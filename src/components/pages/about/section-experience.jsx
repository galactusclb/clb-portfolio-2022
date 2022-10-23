import React from 'react'
import { motion } from 'framer-motion'

import style from 'assets/styles/modules/about-me/section-skill.module.scss'
import { common_reveal, text_split_reveal } from 'animations/common-animation'
import { li_animation, ul_animation } from 'animations/about-me/animaion_experience'

const SectionExperience = () => {

    return (
        <section className={`${style['section-main']} container px-4 px-sm-0`}>
            <div className="row">
                <div className={`${style['section-left']} col-lg-9`}>
                    <h3
                        className='split-reveal-overflow'>
                        <motion.span
                            variants={text_split_reveal}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            className='mt-3'>Experience
                        </motion.span>
                    </h3>

                    <motion.p variants={common_reveal}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className='mt-5'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condim.
                    </motion.p>

                    <div className="clb-item-with-inline-img d-flex flex-row flex-nowrap mt-5">
                        <motion.div
                            variants={common_reveal}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            className="item-img-wrapper">

                        </motion.div>

                        <div className="item-title-wrapper">
                            <h4 className='split-reveal-overflow'>
                                <motion.span
                                    variants={text_split_reveal}
                                    initial="initial"
                                    whileInView="animate"
                                    viewport={{ once: true }}
                                    custom={0.1} className='reveal'>

                                    Software Engineer
                                </motion.span>
                            </h4>
                            <h5 className='split-reveal-overflow  split-h5'>
                                <motion.span
                                    variants={text_split_reveal}
                                    initial="initial"
                                    whileInView="animate"
                                    viewport={{ once: true }}
                                    custom={0.2} className='reveal'>

                                    Nova Solutions (Pvt) Ltd
                                </motion.span>
                            </h5>
                        </div>
                    </div>

                    <ul className='clb-ul mt-4'>
                        <motion.li variants={common_reveal} initial="initial" whileInView="animate" custom={0.5 + 0} viewport={{ once: true }}><p >
                            Gained knowledge and implemented end-to-end testing for web applications.
                        </p></motion.li>
                        <motion.li variants={common_reveal} initial="initial" whileInView="animate" custom={0.5 + 0.13} viewport={{ once: true }}><p >
                            Designed user Interfaces and implemented the designs with code.
                        </p></motion.li>
                        <motion.li variants={common_reveal} initial="initial" whileInView="animate" custom={0.5 + 0.26} viewport={{ once: true }}><p >
                            Implemented and validated new functionalities on frontend in React JS based web applications.
                        </p></motion.li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default SectionExperience