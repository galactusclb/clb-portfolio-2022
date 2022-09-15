import React from 'react'
import { motion } from 'framer-motion'

import style from 'assets/styles/modules/home/what-i-do.module.scss'
import { text_split_reveal } from 'animations/common-animation'
import { text_split_reveal_line } from 'animations/about-me/animation_hero'

const WhatIDo = () => {
    return (
        <section className={`container-fluid ${style['clb-section']} px-0`}>
            <div className={`${style['clb-big-tittle']} container`}>
                <h2 className='split-reveal-overflow'>
                    <motion.span
                        variants={text_split_reveal}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        custom={0.1}
                    >
                        Helping brands thrive
                    </motion.span>
                </h2>
                <h2 className='split-reveal-overflow'>
                    <motion.span
                        variants={text_split_reveal}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        custom={0.3}
                    >
                        in the digital world
                    </motion.span>
                </h2>
            </div>

            <div className={`${style['work-section']}`}>
                <div className="container">
                    <h3 className='split-reveal-overflow'>
                        <motion.span
                            variants={text_split_reveal}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            custom={0.2}
                        >
                            I can help you with ...
                        </motion.span>
                    </h3>

                    <div className={`row ${style['work-list']}`}>
                        <div className="col-md-4">
                            <h5 className='split-reveal-overflow'>
                                <motion.span
                                    variants={text_split_reveal}
                                    initial="initial"
                                    whileInView="animate"
                                    viewport={{ once: true }}
                                    custom={0.4}
                                >
                                    01
                                </motion.span>
                            </h5>

                            <h4 className='split-reveal-overflow'>
                                <motion.span
                                    variants={text_split_reveal}
                                    initial="initial"
                                    whileInView="animate"
                                    viewport={{ once: true }}
                                    custom={0.5}
                                >
                                    UI Design
                                </motion.span>
                            </h4>

                            <div className={style['h4-line-breaker']}></div>

                            <motion.p
                                variants={text_split_reveal_line}
                                initial="initial"
                                whileInView="animate"
                                viewport={{ once: true }}
                                custom={0.6}
                                className='reveal-text mt-5'>
                                A strong foundation is essential for any project. I deliver beautiful and intuitive designs that align with your brand's essence. I believe usability and aesthetics go hand-in-hand to make better products.
                            </motion.p>
                        </div>

                        <div className="col-md-4">
                            <h5 className='split-reveal-overflow'>
                                <motion.span
                                    variants={text_split_reveal}
                                    initial="initial"
                                    whileInView="animate"
                                    viewport={{ once: true }}
                                    custom={0.4 + 0.1}
                                >
                                    {/* viewport={{ once: true }} */}

                                    02
                                </motion.span>
                            </h5>
                            <h4 className='split-reveal-overflow'>
                                <motion.span
                                    variants={text_split_reveal}
                                    initial="initial"
                                    whileInView="animate"
                                    viewport={{ once: true }}
                                    custom={0.5 + 0.1}
                                >
                                    Web Development
                                </motion.span>
                            </h4>

                            <div className={style['h4-line-breaker']}></div>

                            <motion.p
                                variants={text_split_reveal_line}
                                initial="initial"
                                whileInView="animate"
                                custom={0.6 + 0.1}
                                viewport={{ once: true }}
                                className='reveal-text mt-5'>
                                I build scalable websites from scratch that fit seamlessly with design. My focus is on micro animations, transitions and interaction. For content management I use Kirby CMS.
                                {/* Using the latest web dev techs, I build pixel-perfect, fast and accessible websites. I specialise in creative interactions and transitions. */}
                            </motion.p>
                        </div>

                        <div className="col-md-4">
                            <h5 className='split-reveal-overflow'>
                                <motion.span
                                    variants={text_split_reveal}
                                    initial="initial"
                                    whileInView="animate"
                                    viewport={{ once: true }}
                                    custom={0.4 + 0.15}
                                >
                                    {/* viewport={{ once: true }} */}

                                    03
                                </motion.span>
                            </h5>
                            <h4 className='split-reveal-overflow'>
                                <motion.span
                                    variants={text_split_reveal}
                                    initial="initial"
                                    whileInView="animate"
                                    viewport={{ once: true }}
                                    custom={0.5 + 0.15}
                                >
                                    Full-Stack Development
                                </motion.span>
                            </h4>

                            <div className={style['h4-line-breaker']}></div>

                            <motion.p
                                variants={text_split_reveal_line}
                                initial="initial"
                                whileInView="animate"
                                viewport={{ once: true }}
                                custom={0.6 + 0.15}
                                className='reveal-text mt-5'>
                                A complete website from concept to implementation, that's what makes me stand out. My great sense for design and my development skills enable me to create kick-ass projects.
                                {/* This is my most preferred service as it allows the entire website creation—from concept to final site—to be seamless and ultra-fast. */}
                            </motion.p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhatIDo