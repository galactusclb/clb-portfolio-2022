import React from 'react'

import style from 'assets/styles/modules/project/section-screenshots.module.scss'

const ProjectScreenshot = () => {
    return (
        <section className={`${style['clb-main']} container-fluid px-0`}>

            <div className="container  px-4  px-sm-0">
                <div className={`${style['section-details']}`}>
                    <h3>Simple, Clean & More Sales</h3>

                    <p className=''>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet incidunt officiis est error. Facilis perspiciatis, repudiandae vitae iure quam sequi quis cum omnis esse doloremque? Veniam impedit non neque quis.</p>
                </div>
            </div>

            <div className={`${style['section-container-fluid-bg']}`}>
                <img src={`${process.env.PUBLIC_URL}/images/project-images/tastymock-screenshot-collection-Dark.png`} alt="" className='img-fluid' />
            </div>


        </section>
    )
}

export default ProjectScreenshot