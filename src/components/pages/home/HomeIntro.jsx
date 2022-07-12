import React from 'react'

import style from 'assets/styles/modules/home/home-intro.module.scss'

const HomeIntro = () => {
    return (
        <section className={`container ${style['clb-section']}`}>
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