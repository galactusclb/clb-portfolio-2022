import React from 'react'

import style from 'assets/styles/modules/footer/footer.module.scss'

const Index = () => {
    return (
        <footer>
            <div className={`${style['clb-big-tittle']} container`}>
                <h2>
                    Let’s work
                    together
                </h2>
            </div>
            <div className={`${style['clb-contact-form']} container`}>
                <form action="">
                    <div className={`${style['form-item']}`}>
                        <h5>01</h5>
                        <h4>Your name</h4>

                        <input type="text" className={`form-control ${style['clb-form-input']}`} placeholder="John Doe *" />
                    </div>

                    <div className={`${style['form-item']}`}>
                        <h5>02</h5>
                        <h4>Your email</h4>

                        <input type="email" className={`form-control ${style['clb-form-input']}`} placeholder="John@doe.com *" />
                    </div>

                    <div className={`${style['form-item']} ${style['last']}`}>
                        <h5>03</h5>
                        <h4>Your message</h4>

                        <textarea className={`form-control ${style['clb-form-input']}`} placeholder="Lorem ipsum dolor, sit amet consectetur adipisicing elit *"
                            rows={4} />
                    </div>

                    <div className="d-flex justify-content-end">
                        <button className={`clb-btn-circle row justify-content-center align-items-center mt-5`}>
                            <span
                                className='text-center'>
                                Send it.
                            </span>
                        </button>
                    </div>
                </form>
            </div>
        </footer>
    )
}

export default Index