import React from 'react'

import style from 'assets/styles/modules/project/section-mobile.module.scss'

const ProjectMobile = () => {
    return (
        <section className={`${style['clb-main']} container-fluid px-0`}>

            <div className="container">
                <div className={`${style['section-details']}`}>
                    <h3>Increasing the conversion rate</h3>

                    <p className=''>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet incidunt officiis est error. Facilis perspiciatis, repudiandae vitae iure quam sequi quis cum omnis esse doloremque? Veniam impedit non neque quis.</p>
                </div>
            </div>

            <div className={`${style['section-mobile-screenshots']} container`}>
                <div className="row">
                    <div className={`${style['mobile-device']} col-lg-4`}>
                        <img src={`${process.env.PUBLIC_URL}/images/project-images/TastyMock_001.png`} alt="" className='img-fluid' />
                    </div>
                    <div className={`${style['mobile-device']} col-lg-4`}>
                        <img src={`${process.env.PUBLIC_URL}/images/project-images/TastyMock_002.png`} alt="" className='img-fluid' />
                    </div>
                    <div className={`${style['mobile-device']} col-lg-4`}>
                        <img src={`${process.env.PUBLIC_URL}/images/project-images/TastyMock_003.png`} alt="" className='img-fluid' />
                    </div>
                </div>
            </div>


        </section>
    )
}

export default ProjectMobile