import React from 'react'

import style from 'assets/styles/modules/home/home-intro.module.scss'
import MagneticDOM3 from 'components/common/button/MagneticDOM3'
import useHover from 'utils/useHover';

const HomeIntro = () => {
    const [hoverRef, isHovered] = useHover();

    return (
        <section className={`container ${style['clb-section']}`}>
            <MagneticDOM3 ref={hoverRef} >
                <button type='button' className={`clb-btn-circle row justify-content-center align-items-center mt-0`} onClick={() => console.log('clicked 2')}>
                    <span
                        className='text-center'>
                        Send it.
                    </span>
                </button>
            </MagneticDOM3>
            <h3>Hello there, 🤟</h3>
            <div className="row mt-5">
                <div className="col-lg-7">
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus, incidunt ducimus! Dolores repellendus beatae repudiandae. Assumenda illo ratione eius magnam iure amet unde similique, minima id ea, quis eos deleniti?
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, laboriosam! Magni tempore eos, aspernatur inventore in molestias at recusandae amet!
                    </p>
                </div>
                <div className="col-lg-3">
                    <p>
                        The combination of my passion for design, code & interaction positions me in a unique place in the web design world.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default HomeIntro