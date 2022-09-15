import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import style from 'assets/styles/modules/home/project-list.module.scss'
import { text_split_reveal } from 'animations/common-animation';
import { text_split_reveal_line } from 'animations/about-me/animation_hero';

const ProjectsList = () => {
    let navigate = useNavigate();

    const [categories, setcategories] = useState([
        {
            title: 'All',
            value: 'all',
            active: true
        },
        {
            title: 'Development',
            value: 'development',
            active: false
        },
        {
            title: 'UI design',
            value: 'ui_design',
            active: false
        },
        {
            title: 'Illustration',
            value: 'illustration',
            active: false
        }
    ])

    const [projects, setProjects] = useState([
        {
            type: 'development',
            project_title: 'Tastymock',
            project_tags: ['Concept project', 'UI design'],
            project_images: {
                img: 'tastymock.png',
                alt_text: 'tastymock-home'
            },
            project_brief: 'We did a complete redesign of Oxstreet online shop mobile experience: products exposure, catalogue, checkout and payment process.',
            navigate_url: '/project',
            is_featured: true
        },
        {
            type: 'ui_design',
            project_title: 'KOETA',
            project_tags: ['Client project', 'UI Design'],
            project_images: {
                img: 'koeta-home.webp',
                alt_text: 'koeta-home'
            },
            project_brief: 'We did a complete redesign of Oxstreet online shop mobile experience: products exposure, catalogue, checkout and payment process.',
            navigate_url: null,
            is_featured: true
        },
        {
            type: 'development',
            project_title: 'HiruWater',
            project_tags: ['Client project', 'Full-Stack Dev'],
            project_images: {
                img: 'hiruwater.png',
                alt_text: 'Hiruwater-home'
            },
            project_brief: 'We did a complete redesign of Oxstreet online shop mobile experience: products exposure, catalogue, checkout and payment process.',
            navigate_url: '/project',
        },
    ])


    const [filteredProjects, setFilteredProjects] = useState(projects)

    const onFilterProjects = (type = 'all') => {
        if (type == 'all') {
            // setFilteredProjects(projects)
            setFeaturedProjects()
        } else {
            setFilteredProjects(projects?.filter((item, index) => {
                return item?.type == type
            }))
        }

    }

    const setFeaturedProjects = () => {
        // setFilteredProjects(projects?.filter((item, index) => {
        //     return item?.is_featured == true
        // }))
        setFilteredProjects(projects)
    }

    // useEffect(() => {
    //     setFeaturedProjects()
    // })

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
                <div className={`${style['clb-project-category']} d-flex flex-row -flex-nowrap`} style={{ gap: "1.5rem" }}>
                    {
                        categories && categories?.map((item, key) => {
                            return (
                                <button className={`${item?.active && style['active']} btn`} key={key} onClick={() => { onFilterProjects(item?.value) }}>
                                    {item?.title}
                                </button>
                            )
                        })
                    }
                </div>

                <div className={`${style['clb-projects']}`} style={{ marginBottom: (projects?.length % 2 == 0) ? '400px' : '150px' }}>

                    {
                        filteredProjects && filteredProjects?.map((item, key) => {

                            return (
                                <div className={`${style['project-card']}`} key={key}>
                                    <div className={`${style['project-card-inner']}`}>
                                        <div className={`${style['project-card-header']} d-flex align-items-end justify-content-end`} style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/project-images/clb@2x-b7a156f86c4e9dd166cbcaba23dc53cb.jpg.webp)` }}>
                                            <div className={`${style['project-showcase']}`}>
                                                <motion.div
                                                    variants={text_split_reveal}
                                                    initial="initial"
                                                    whileInView="animate"
                                                    viewport={{ once: true }}
                                                    custom={0}
                                                >
                                                    <img src={`${process.env.PUBLIC_URL}/images/project-images/${item?.project_images?.img}`} alt={item?.project_images?.alt_text} />
                                                </motion.div>
                                            </div>
                                        </div>

                                        <div className={`${style['project-card-body']}`}>
                                            <h3 className='split-reveal-overflow'>
                                                <motion.span
                                                    variants={text_split_reveal}
                                                    initial="initial"
                                                    whileInView="animate"
                                                    viewport={{ once: true }}
                                                    custom={0.08}
                                                >
                                                    {item?.project_title}
                                                </motion.span>
                                            </h3>

                                            <div className={`${style['project-tags']} d-flex flex-row`}>
                                                {item?.project_tags?.length && item?.project_tags?.map((tag, tag_key) => {
                                                    return (
                                                        tag && (
                                                            <span className='split-reveal-overflow'>
                                                                <motion.span
                                                                    variants={text_split_reveal}
                                                                    initial="initial"
                                                                    whileInView="animate"
                                                                    viewport={{ once: true }}
                                                                    custom={0.12}
                                                                >#{tag}
                                                                </motion.span>
                                                            </span>
                                                        )
                                                    )
                                                })}
                                            </div>

                                            <div className={`${style['project-info']} row mt-5`}>
                                                <div className={`${style['project-info-left']} col`}>
                                                    <motion.p
                                                        variants={text_split_reveal_line}
                                                        initial="initial"
                                                        whileInView="animate"
                                                        viewport={{ once: true }}
                                                        custom={0.2}
                                                        className='reveal-text'>
                                                        {item?.project_brief}
                                                    </motion.p>
                                                </div>
                                                <div className={`${style['project-info-right']}`}>
                                                    {
                                                        item?.navigate_url && (

                                                            <button className="clb-btn-circle outline" style={{ width: 100, height: 100 }} onClick={() => {
                                                                navigate(item?.navigate_url)
                                                            }}>
                                                                View
                                                            </button>
                                                        )
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )

                        })
                    }

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