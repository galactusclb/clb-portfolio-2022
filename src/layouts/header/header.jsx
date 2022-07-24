import React from 'react'

import style from 'assets/styles/layouts/header/header.module.scss'
import { useNavigate } from 'react-router-dom';

const Header = () => {
    let navigate = useNavigate();

    return (
        <header className=''>
            <div className={`${style['clb-nav-bar']} container d-flex align-items-center justify-content-between`}>
                <div className={`${style['div-name']}`} onClick={() => {
                    navigate("/")
                }}>
                    <span>©</span>CLB
                </div>

                <div className={`${style['clb-nav-links']} d-flex`}>
                    <div className={`${style['nav-link-item']}`} onClick={() => {
                        navigate("/")
                    }}>
                        Home
                    </div >
                    <div className={`${style['nav-link-item']}`} onClick={() => {
                        navigate('/about')
                    }}>
                        About
                    </div >
                    <div className={`${style['nav-link-item']}`} onClick={() => {
                        navigate("/contact", { replace: true })
                    }}>
                        Contact
                    </div >
                </div>
            </div>
        </header>
    )
}

export default Header