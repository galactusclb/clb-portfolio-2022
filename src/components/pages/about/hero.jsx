import React from 'react'
import { motion } from 'framer-motion'

import style from 'assets/styles/modules/about-me/hero.module.scss'
import { text_split_reveal } from 'animations/about-me/animation_hero'
import SplitTextReveal from 'components/common/split-text-reveal/split-text-reveal'

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
                                    custom={1}
                                >Me</motion.span>
                            </h1>
                        </div>
                        <div className={`${style['section-bottom']} d-flex flex-column align-items-start`}>
                            <motion.p className='reveal-text'>
                                <SplitTextReveal>
                                    I help companies from all over the world with tailor-made solutions. With each project,
                                    I push my work to new horizons, always putting quality first.
                                </SplitTextReveal>
                            </motion.p>


                            <p className='mt-3'>Always exploring...</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AboutHero