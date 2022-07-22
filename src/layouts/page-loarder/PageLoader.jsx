import React, { useContext, useEffect } from 'react'
import style from 'assets/styles/layouts/page-loarder/page-loader.module.scss'
import { Transition } from 'libs/providers/TransitionContext';

const PageLoader = ({ EndBackgroundColor = null }) => {

    const { setPageLoading } = useContext(Transition);

    useEffect(() => {
        const timer = setTimeout(() => {
            setPageLoading(false);
        }, 4500);
        return () => clearTimeout(timer);
    });

    return (
        <>
            <div className={`${style['end-background']} ${EndBackgroundColor == 'white' && style['white']}`}></div>
            <div className={`${style['loader-wrapper']}`}>
                <div className={`${style['text-wrapper']}`}>
                    <div className={`${style['text']} ${style['text-1']}`}>less is more</div>
                    <div className={`${style['text']} ${style['text-2']}`}>less is more</div>
                    <div className={`${style['text']} ${style['text-3']}`}>less is more</div>
                    <div className={`${style['text']} ${style['text-4']}`}>less is more</div>
                    <div className={`${style['text']} ${style['text-5']}`}>less is more</div>
                    <div className={`${style['text']} ${style['text-6']}`}>less is more</div>
                    <div className={`${style['text']} ${style['text-7']}`}>less is more</div>
                    <div className={`${style['text']} ${style['text-8']}`}>less is more</div>
                    <div className={`${style['text']} ${style['text-9']}`}>less is more</div>
                    <div className={`${style['text']} ${style['text-10']}`}>less is more</div>
                    <div className={`${style['text']} ${style['text-11']}`}>less is more</div>
                </div>
            </div>
        </>
    )
}

export default PageLoader