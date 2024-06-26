import React from 'react'
import { motion } from "framer-motion";

import style from 'assets/styles/layouts/footer/footer.module.scss'
import useHover from 'utils/useHover';
import MagneticDOM2 from 'components/common/button/MagneticDOM_2';
import { useRef } from 'react';
import MagneticDOM from 'components/common/button/MagneticDOM';
import { text_split_reveal } from 'animations/common-animation';

const Footer = () => {
    const [hoverRef, isHovered] = useHover();

    return (
        <footer >
            {/* <MagneticDOM ref={hoverRef2} onClick={() => console.log('clicked 2')}>
                <motion.div className={`row justify-content-center align-items-center mt-5 clb-btn-circle`}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 1, delay: 2.2 }}>
                    <motion.span
                        className='text-center'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            ease: "easeInOut",
                            duration: 1,
                            delay: 2.8
                        }}>
                        About me
                    </motion.span>
                </motion.div>
            </MagneticDOM> */}

            <div className={`${style['clb-big-tittle']} container`}>
                <h2 className='split-reveal-overflow'>
                    <motion.span
                        variants={text_split_reveal}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}>
                        Let’s work
                    </motion.span>
                </h2>
                <h2 className='split-reveal-overflow'>
                    <motion.span
                        variants={text_split_reveal}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        custom={0.13}>
                        together 👋
                    </motion.span>
                </h2>
            </div>
            <div className={`${style['clb-contact-form']} container`}>
                <form action="">
                    <div className={`${style['form-item']}`}>
                        <h5 className='split-reveal-overflow'>
                            <motion.span
                                variants={text_split_reveal}
                                initial="initial"
                                whileInView="animate"
                                // viewport={{ once: true }}
                                custom={0.2}
                            >
                                01
                            </motion.span>
                        </h5>
                        <h4 className='split-reveal-overflow'>
                            <motion.span
                                variants={text_split_reveal}
                                initial="initial"
                                whileInView="animate"
                                // viewport={{ once: true }}
                                custom={0.25}
                            >
                                Your name
                            </motion.span>
                        </h4>

                        <input type="text" className={`form-control ${style['clb-form-input']}`} placeholder="John Doe *" />
                    </div>

                    <div className={`${style['form-item']}`}>
                        <h5>02</h5>
                        <h4>Your email</h4>

                        <input type="email" className={`form-control ${style['clb-form-input']}`} placeholder="John@doe.com *" />
                    </div>

                    <div className={`${style['form-item']} ${style['last']}`}>
                        <h5>03</h5>
                        <h4>Your message</h4>

                        <textarea className={`form-control ${style['clb-form-input']}`} placeholder="Lorem ipsum dolor, sit amet consectetur adipisicing elit *"
                            rows={4} />
                    </div>

                    <div className="">

                    </div>
                </form>

                <div className={`${style['footer-bottom']} d-flex justify-content-end`}>
                    {/* <MagneticDOM2 ref={ref} >
                        <button type='button' className={`clb-btn-circle row justify-content-center align-items-center mt-0`} onClick={() => console.log('clicked 2')}>
                            <span
                                className='text-center'>
                                Send it.
                            </span>
                        </button>
                    </MagneticDOM2> */}
                    <MagneticDOM ref={hoverRef} >
                        <button type='button' className={`clb-btn-circle row justify-content-center align-items-center mt-0`} onClick={() => console.log('clicked 2')}>
                            <span
                                className='text-center'>
                                Send it.
                            </span>
                        </button>
                    </MagneticDOM>

                </div>
            </div>
        </footer>
    )
}

export default Footer