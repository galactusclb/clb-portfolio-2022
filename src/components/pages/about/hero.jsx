import React from 'react'
import { motion } from 'framer-motion'

import style from 'assets/styles/modules/about-me/hero.module.scss'
import { text_split_reveal, text_split_reveal_line } from 'animations/about-me/animation_hero'
import { useRef } from 'react'

const AboutHero = () => {
    const textRef = useRef()

    return (
        <div className={`${style['clb-main']} container row align-items-end mx-auto`}>
            <div className="col">
                <div className="row">
                    <div className={`${style['section-left']} col-lg-5 d-flex align-items-end`}>
                        <div className={`${style['img-wrapper']}`}>
                            <motion.div
                                variants={text_split_reveal}
                                initial="initial"
                                animate="animate"
                                custom={1.6}
                            >
                                <img src={`${process.env.PUBLIC_URL}/images/about-me.png`} alt="" srcset="" />
                            </motion.div>
                        </div>
                    </div>
                    <div className={`${style['section-right']} col-lg-7`}>
                        <div className={`${style['h1-wrapper']} d-flex flex-column align-items-end`}>
                            <h1>
                                <motion.span
                                    variants={text_split_reveal}
                                    initial="initial"
                                    animate="animate"
                                >About</motion.span>
                            </h1>
                            <h1>
                                <motion.span
                                    variants={text_split_reveal}
                                    initial="initial"
                                    animate="animate"
                                    custom={0.13}
                                >Me</motion.span>
                            </h1>
                        </div>
                        <div className={`${style['section-bottom']} d-flex flex-column align-items-start`}>
                            {/* <SplitTextRevealWrapper ref={textRef}> */}
                            <motion.p
                                variants={text_split_reveal_line}
                                initial="initial"
                                animate="animate"
                                custom={0.7}
                                className='reveal-text'>
                                {/* <SplitWordReveal> */}
                                I help companies from all over the world with tailor-made solutions. With each project,
                                I push my work to new horizons, always putting quality first.
                                {/* </SplitWordReveal> */}
                            </motion.p>
                            {/* </SplitTextRevealWrapper> */}


                            <p className='split-reveal-overflow'>
                                <motion.span
                                    variants={text_split_reveal}
                                    initial="initial"
                                    animate="animate"
                                    custom={1.2}
                                    className='mt-3'>Always exploring...</motion.span>

                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AboutHero