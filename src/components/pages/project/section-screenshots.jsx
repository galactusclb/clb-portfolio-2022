import React from 'react'

import style from 'assets/styles/modules/project/section-screenshots.module.scss'

const ProjectScreenshot = () => {
    return (
        <section className={`${style['clb-main']} container-fluid px-0`}>

            <div className="container">
                <div className={`${style['section-details']}`}>
                    <h3>Increasing the conversion rate</h3>

                    <p className=''>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet incidunt officiis est error. Facilis perspiciatis, repudiandae vitae iure quam sequi quis cum omnis esse doloremque? Veniam impedit non neque quis.</p>
                </div>
            </div>

            <div className={`${style['section-details']}`}>
                <img src={`${process.env.PUBLIC_URL}/images/project-images/micdrop-case-header.jpg`} alt="" className='img-fluid' />
            </div>


        </section>
    )
}

export default ProjectScreenshot