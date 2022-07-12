import React, { useEffect } from 'react'
import { motion } from 'framer-motion';

import style from 'assets/styles/modules/home/loader.module.scss'

const itemMain = {
    hidden: {
        opacity: 0,
        y: 200
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            ease: [0.6, 0.01, -0.05, 0.95],
            duration: 1.6
        }
    }
}

const Loader = ({ setLoading }) => {

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    });

    return (
        <div className='loader'>
            <motion.div
                className={`${style['clb-loading-div']} d-flex justify-content-center align-items-center`}
            // onAnimationComplete={() => setLoading(false)}
            >

                {/* <motion.div
                    className={style['clb-loading-hero']}
                    variants={itemMain}>
                    <motion.img
                        src={`${process.env.PUBLIC_URL}/images/propic-800-min.png`} alt=""
                        // initial={{ opacity: 0, y: 80 }}
                        // animate={{ opacity: 1, y: 0 }}
                        // transition={{
                        //     ease: [0.6, 0.01, -0.05, 0.95],
                        //     duration: 1.6
                        // }}
                        layoutId="main-image-1"
                    />
                </motion.div> */}
            </motion.div>
        </div>
    )
}

export default Loader