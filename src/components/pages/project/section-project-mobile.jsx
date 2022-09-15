import React from 'react'

import style from 'assets/styles/modules/project/section-mobile.module.scss'

const ProjectMobile = () => {
    return (
        <section className={`${style['clb-main']} container-fluid px-0`}>

            <div className="container">
                <div className={`${style['section-details']}`}>
                    <h3>Enhanced Mobile Experience</h3>

                    <p className=''>In user testing, we found out that users were frustrated by the old menu design. The new nav gives registered users one-click access to the leagues and teams that matter to them. Live games are also featured prominently in the new design.</p>
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