import React from 'react'
import { motion } from 'framer-motion'

import style from 'assets/styles/modules/home/home-intro.module.scss'
import { text_split_reveal } from 'animations/common-animation'
import { text_split_reveal_line } from 'animations/about-me/animation_hero'

const HomeIntro = () => {
    return (
        <section className={`container ${style['clb-section']} px-4`}>
            <h3 className='split-reveal-overflow'>
                <motion.span
                    variants={text_split_reveal}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    custom={0.1}
                >
                    Hello there, 🤟
                </motion.span>
            </h3>
            <div className="row mt-5">
                <div className="col-lg-7">
                    <motion.p
                        variants={text_split_reveal_line}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        custom={0.5}
                        className='reveal-text'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus, incidunt ducimus! Dolores repellendus beatae repudiandae. Assumenda illo ratione eius magnam iure amet unde similique, minima id ea, quis eos deleniti?
                    </motion.p>
                    <motion.p
                        variants={text_split_reveal_line}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        custom={0.8}
                        className='reveal-text'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, laboriosam! Magni tempore eos, aspernatur inventore in molestias at recusandae amet!
                    </motion.p>
                </div>
                <div className="col-lg-3">
                    <motion.p
                        variants={text_split_reveal_line}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        custom={1.3}
                        className='reveal-text'>
                        The combination of my passion for design, code & interaction positions me in a unique place in the web design world.
                    </motion.p>
                </div>
            </div>
        </section>
    )
}

export default HomeIntro