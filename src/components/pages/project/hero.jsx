import React from 'react'

import style from 'assets/styles/modules/project/project-hero.module.scss'
import useHover from 'utils/useHover';
import MagneticDOM from 'components/common/button/MagneticDOM';

const ProjectHero = () => {
    const [hoverRef, isHovered] = useHover();

    return (
        <div className={`${style['clb-main']} container-fluid px-0`}>
            {/* <div className={`${style['section-left']}`}>
                <img src={`${process.env.PUBLIC_URL}/images/project-images/clb@2x-b7a156f86c4e9dd166cbcaba23dc53cb.jpg.webp`} alt="koeta-home" className='' />
        </div>  */}
            <div className={`${style['section-right']} d-flex flex-column justify-content-end`}>
                <div className={`${style['h1-wrapper']} d-flex flex-column`}>
                    <h1>Tastymock</h1>
                </div>
                <div className={`${style['tags-list']} d-flex mt-4`}>
                    <div className={`${style['tag']}`}>
                        #Concept project
                    </div>
                    <div className={`${style['tag']}`}>
                        #UI design
                    </div>
                </div>
                <div className={`${style['section-bottom']} d-flex flex-column align-items-start`}>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur, nemo veritatis, quia eius, cum laudantium quasi deserunt quis inventore accusantium veniam.
                    </p>
                </div>



            </div >
            <div className={`${style['floating-btn']} d-flex justify-content-end align-items-end`}>
                <MagneticDOM ref={hoverRef} >
                    <button type='button' className={`clb-btn-circle row justify-content-center align-items-center mt-0`} style={{ width: 180 }} onClick={() => console.log('clicked 2')}>
                        <span
                            className='text-center'>
                            Live site
                        </span>
                    </button>
                </MagneticDOM>
            </div>


        </div >
    )
}

export default ProjectHero