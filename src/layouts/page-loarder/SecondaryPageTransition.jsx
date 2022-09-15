import React, { useContext, useEffect } from 'react'
import style from 'assets/styles/layouts/page-loarder/secondary-page-transition.module.scss'
import { StoreContext } from 'libs/providers/StoreContext';
import { AnimatePresence, motion } from 'framer-motion';

const SecondaryPageTransition = ({ EndBackgroundColor = null, title = "less is more" }) => {
    // title = "GET YOUR SH*T DONE"
    const { setPageLoading } = useContext(StoreContext);

    useEffect(() => {
        const timer = setTimeout(() => {
            setPageLoading(false);
        }, 3000);
        return () => clearTimeout(timer);
    });

    return (
        <>
            <AnimatePresence>
                <motion.div initial={{
                    opacity: 0,
                    height: "0%",
                    dur: 4
                }}
                    animate={{
                        opacity: 1,
                        height: "100vh"
                    }}
                    exit={{
                        // opacity: 0,
                        height: "0%",
                        dur: 4
                    }}>
                    <div className={`${style['end-background']} ${EndBackgroundColor == 'white' && style['white']}`}></div>
                    <div className={`${style['loader-wrapper']}`}>
                        <div className={`${style['text-wrapper']}`}>
                            <div className={`${style['text']} ${style['text-1']}`}>{title}</div>
                            <div className={`${style['text']} ${style['text-2']}`}>{title}</div>
                            <div className={`${style['text']} ${style['text-3']}`}>{title}</div>
                            <div className={`${style['text']} ${style['text-4']}`}>{title}</div>
                            <div className={`${style['text']} ${style['text-5']}`}>{title}</div>
                        </div>
                    </div>

                </motion.div>
            </AnimatePresence>
        </>
    )
}

export default SecondaryPageTransition