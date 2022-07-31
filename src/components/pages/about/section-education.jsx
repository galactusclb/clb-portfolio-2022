import React from 'react'
import { motion } from 'framer-motion'

import style from 'assets/styles/modules/about-me/section-education.module.scss'
import { text_split_reveal } from 'animations/common-animation'

const SectionEducation = () => {

    return (
        <section className={`${style['section-main']} container`}>
            <div className="row">
                <div className={`${style['section-left']} col-lg-9`}>
                    <h3 className='split-reveal-overflow'>
                        <motion.span
                            variants={text_split_reveal}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}>

                            Education
                        </motion.span>
                    </h3>

                    <div className="clb-item-with-inline-img d-flex flex-row flex-nowrap mt-5">
                        <div className="item-img-wrapper"></div>
                        <div className="item-title-wrapper">
                            <h4>BSc. (Hons) Computer Science and Software Engineering</h4>
                            <h5>University of Bedfordshire, UK <span>( 2020-2021 )</span></h5>
                        </div>
                    </div>

                    <div className="clb-item-with-inline-img d-flex flex-row flex-nowrap mt-5">
                        <div className="item-img-wrapper"></div>
                        <div className="item-title-wrapper">
                            <h4>Higher National Diploma in Computer Science</h4>
                            <h5>Sri Lanka Institute of Information Technology, Sri Lanka <span>( 2018-2020 )</span></h5>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default SectionEducation 