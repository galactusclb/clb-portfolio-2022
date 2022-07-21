import React from 'react'

import style from 'assets/styles/modules/header/header.module.scss'

const header = () => {
    return (
        <div className={`${style['clb-nav-bar']} d-flex align-items-center justify-content-between`}>
            <div className={`${style['div-name']}`}>
                <span>©</span> CLB
            </div>
        </div>

    )
}

export default header