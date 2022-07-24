import React, { useContext, useEffect } from 'react'
import style from 'assets/styles/layouts/page-loarder/page-loader.module.scss'
import { Transition } from 'libs/providers/TransitionContext';
import { AnimatePresence, motion } from 'framer-motion';

const PageLoader = ({ EndBackgroundColor = null }) => {
    const title = "less is more"
    const { setPageLoading } = useContext(Transition);

    useEffect(() => {
        const timer = setTimeout(() => {
            setPageLoading(false);
        }, 4800);
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
                            <div className={`${style['text']} ${style['text-6']}`}>{title}</div>
                            <div className={`${style['text']} ${style['text-7']}`}>{title}</div>
                            <div className={`${style['text']} ${style['text-8']}`}>{title}</div>
                            <div className={`${style['text']} ${style['text-9']}`}>{title}</div>
                            <div className={`${style['text']} ${style['text-10']}`}>{title}</div>
                            <div className={`${style['text']} ${style['text-11']}`}>{title}</div>
                        </div>
                    </div>

                </motion.div>
            </AnimatePresence>
        </>
    )
}

export default PageLoader