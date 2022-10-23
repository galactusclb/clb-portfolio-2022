import React from 'react'
import { motion } from 'framer-motion'

import style from 'assets/styles/modules/project/project-hero.module.scss'
import useHover from 'utils/useHover';
import MagneticDOM from 'components/common/button/MagneticDOM';
import { text_split_reveal } from 'animations/projects/animation_hero';
import { useNavigate } from 'react-router-dom';

const ProjectHero = () => {
    const [hoverRef, isHovered] = useHover();

    let navigate = useNavigate();

    return (
        <div className={`${style['clb-main']} container-fluid px-0`}>
            {/* <div className={`${style['section-left']}`}>
                <img src={`${process.env.PUBLIC_URL}/images/project-images/clb@2x-b7a156f86c4e9dd166cbcaba23dc53cb.jpg.webp`} alt="koeta-home" className='' />
        </div>  */}
            <div className={`${style['section-right']} d-flex flex-column justify-content-end mx-auto`}>
                <div className={`${style['h2-wrapper']} d-flex flex-column`}>
                    <h2>
                        <motion.span
                            variants={text_split_reveal}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            custom={0.4}
                        >
                            Your favorite food, delivered
                        </motion.span>
                    </h2>
                </div>
                <div className={`${style['h1-wrapper']} d-flex flex-column mt-5`}>
                    <h1>
                        <motion.span
                            variants={text_split_reveal}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                        >
                            Tastymock
                        </motion.span>
                    </h1>
                </div>
                <div className={`${style['tags-list']} d-flex justify-content-center justify-content-sm-start mt-4`}>
                    <div className={`${style['tag']}`}>
                        <p>
                            <motion.span
                                variants={text_split_reveal}
                                initial="initial"
                                whileInView="animate"
                                viewport={{ once: true }}
                                custom={0.8}
                            >
                                #Concept project
                            </motion.span>
                        </p>
                    </div>
                    <div className={`${style['tag']}`}>
                        <p>
                            <motion.span
                                variants={text_split_reveal}
                                initial="initial"
                                whileInView="animate"
                                viewport={{ once: true }}
                                custom={1.1}
                            >
                                #UI design
                            </motion.span>

                        </p>
                    </div>
                </div>
                {/* <div className={`${style['section-bottom']} d-flex flex-column align-items-start`}>
                    <p>
                        Your favorite food, delivered
                    </p>
                </div> */}



            </div >
            <div className={`${style['floating-btn']} d-flex justify-content-end align-items-end`}>
                <span className='mx-auto'>
                    <MagneticDOM ref={hoverRef} >
                        <motion.button type='button' className={`clb-btn-circle row justify-content-center align-items-center mt-0`}
                            style={{ width: 180, height: 180 }}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ ease: 'easeIn', duration: 0.8, delay: 1.8 }}
                            onClick={() => {
                                navigate('/about')
                            }}>
                            <motion.span
                                className='text-center'
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{
                                    ease: "easeInOut",
                                    duration: 1,
                                    delay: 2.8
                                }}>
                                Live site
                            </motion.span>
                        </motion.button>
                    </MagneticDOM>
                </span>
            </div>


        </div >
    )
}

export default ProjectHero