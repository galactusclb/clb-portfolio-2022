import React, { useState } from 'react'
import { motion } from 'framer-motion';

import style from 'assets/styles/modules/home/project-list.module.scss'
import useHover from 'utils/useHover';
import { useNavigate } from 'react-router-dom';
import { text_split_reveal } from 'animations/common-animation';

const ProjectsList = () => {
    let navigate = useNavigate();

    const [categories, setcategories] = useState([
        {
            title: 'All',
            active: true
        },
        {
            title: 'Development',
            active: false
        },
        {
            title: 'UI design',
            active: false
        },
        {
            title: 'Illustration',
            active: false
        }
    ])

    return (
        <section className={`container ${style['clb-section']} px-0`}>
            <div className={`${style['clb-big-tittle']} container`}>
                <h2 className='split-reveal-overflow'>
                    <motion.span
                        variants={text_split_reveal}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        custom={0}
                    >
                        Creating next level
                    </motion.span>
                </h2>
                <h2 className='split-reveal-overflow'>
                    <motion.span
                        variants={text_split_reveal}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        custom={0.1}
                    >
                        digital products
                    </motion.span>
                </h2>
            </div>
            <div className={`${style['clb-project-list']} container`}>
                <div className={`${style['clb-project-category']} d-flex`} style={{ gap: "1.5rem" }}>
                    {
                        categories && categories?.map((item, key) => {
                            return (
                                <button className={`${item?.active && style['active']} btn`}>
                                    {item?.title}
                                </button>
                            )
                        })
                    }
                </div>

                <div className={`${style['clb-projects']}`} >
                    <div className={`${style['project-card']}`} >
                        <div className={`${style['project-card-inner']}`}>
                            <div className={`${style['project-card-header']} d-flex align-items-end justify-content-end`} style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/project-images/clb@2x-b7a156f86c4e9dd166cbcaba23dc53cb.jpg.webp)` }}>
                                <div className={`${style['project-showcase']}`}>
                                    <img src={`${process.env.PUBLIC_URL}/images/project-images/koeta-home.webp`} alt="koeta-home" />
                                </div>
                            </div>

                            <div className={`${style['project-card-body']}`}>
                                <h3>Tastymock</h3>

                                <div className={`${style['project-tags']} d-flex flex-row`}>
                                    <span>#Concept project</span>
                                    <span>#UI design</span>
                                </div>

                                <div className={`${style['project-info']} row mt-5`}>
                                    <div className={`${style['project-info-left']} col`}>
                                        <p>We did a complete redesign of Oxstreet online shop mobile experience: products exposure, catalogue, checkout and payment process.</p>
                                    </div>
                                    <div className={`${style['project-info-right']}`}>
                                        <button className="clb-btn-circle outline" style={{ width: 100, height: 100 }} onClick={() => {
                                            navigate("/project")
                                        }}>
                                            View
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={`${style['project-card']}`} >
                        <div className={`${style['project-card-inner']}`}>
                            <div className={`${style['project-card-header']} d-flex align-items-end justify-content-end`} style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/project-images/clb@2x-b7a156f86c4e9dd166cbcaba23dc53cb.jpg.webp)` }}>
                                <div className={`${style['project-showcase']}`}>
                                    <img src={`${process.env.PUBLIC_URL}/images/project-images/koeta-home.webp`} alt="koeta-home" />
                                </div>
                            </div>

                            <div className={`${style['project-card-body']}`}>
                                <h3>Tastymock</h3>

                                <div className={`${style['project-tags']} d-flex flex-row`}>
                                    <span>#Concept project</span>
                                    <span>#UI design</span>
                                </div>

                                <div className={`${style['project-info']} row mt-5`}>
                                    <div className={`${style['project-info-left']} col`}>
                                        <p>We did a complete redesign of Oxstreet online shop mobile experience: products exposure, catalogue, checkout and payment process.</p>
                                    </div>
                                    <div className={`${style['project-info-right']}`}>
                                        <button className="clb-btn-circle outline" style={{ width: 100, height: 100 }}>
                                            View
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={`${style['project-card']}`} >
                        <div className={`${style['project-card-inner']}`}>
                            <div className={`${style['project-card-header']} d-flex align-items-end justify-content-end`} style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/project-images/clb@2x-b7a156f86c4e9dd166cbcaba23dc53cb.jpg.webp)` }}>
                                <div className={`${style['project-showcase']}`}>
                                    <img src={`${process.env.PUBLIC_URL}/images/project-images/koeta-home.webp`} alt="koeta-home" />
                                </div>
                            </div>

                            <div className={`${style['project-card-body']}`}>
                                <h3>Tastymock</h3>

                                <div className={`${style['project-tags']} d-flex flex-row`}>
                                    <span>#Concept project</span>
                                    <span>#UI design</span>
                                </div>

                                <div className={`${style['project-info']} row mt-5`}>
                                    <div className={`${style['project-info-left']} col`}>
                                        <p>We did a complete redesign of Oxstreet online shop mobile experience: products exposure, catalogue, checkout and payment process.</p>
                                    </div>
                                    <div className={`${style['project-info-right']}`}>
                                        <button className="clb-btn-circle outline" style={{ width: 100, height: 100 }}>
                                            View
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={`${style['project-card']}`} >
                        <div className={`${style['project-card-inner']}`}>
                            <div className={`${style['project-card-header']} d-flex align-items-end justify-content-end`} style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/project-images/clb@2x-b7a156f86c4e9dd166cbcaba23dc53cb.jpg.webp)` }}>
                                <div className={`${style['project-showcase']}`}>
                                    <img src={`${process.env.PUBLIC_URL}/images/project-images/koeta-home.webp`} alt="koeta-home" />
                                </div>
                            </div>

                            <div className={`${style['project-card-body']}`}>
                                <h3>Tastymock</h3>

                                <div className={`${style['project-tags']} d-flex flex-row`}>
                                    <span>#Concept project</span>
                                    <span>#UI design</span>
                                </div>

                                <div className={`${style['project-info']} row mt-5`}>
                                    <div className={`${style['project-info-left']} col`}>
                                        <p>We did a complete redesign of Oxstreet online shop mobile experience: products exposure, catalogue, checkout and payment process.</p>
                                    </div>
                                    <div className={`${style['project-info-right']}`}>
                                        <button className="clb-btn-circle outline" style={{ width: 100, height: 100 }}>
                                            View
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <MagneticDOM ref={hoverRef3} onClick={() => console.log('clicked 1')}>
                <motion.div className={` row justify-content-center align-items-center mt-5 clb-btn-circle`}
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
        </section>
    )
}

export default ProjectsList