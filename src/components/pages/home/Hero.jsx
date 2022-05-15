import React from 'react'

import style from 'assets/styles/modules/home/hero.module.scss'

const Hero = () => {
    return (
        <div className={style['clb-main']}>

            <div className={`${style['clb-hero-img']}`}>
                <img src={`${process.env.PUBLIC_URL}/images/propic-800-min.png`} alt="" />
            </div>

            <div className="container-fluid">
                <div className={`${style['clb-hero-center']} row justify-content-end align-items-center`}>
                    <div className="col-lg-6">
                        <h4>👋Hello, I'm</h4>
                        <h4>Chanaka Lakshan</h4>
                        <p>Full-Stack Web Developer</p>

                        <div className={`${style['abuot-me']} row justify-content-center align-items-center mt-5`}>
                            About me
                        </div>
                    </div>
                </div>

            </div>

            <BannerRowCenter playMarquee={true} />
        </div>
    )
}

const BannerRowCenter = ({ playMarquee }) => {
    return (
        <div className={`d-flex flex-row flex-nowrap marquee row-title ${playMarquee && "animate"} ${style['marquee-text']}`}>
            <div className="marquee__inner">
                <AnimatedLetters title={"Lakshan"} disabled />
                <AnimatedLetters title={"Chanaka"} />
                <AnimatedLetters title={"Lakshan"} disabled />
                <AnimatedLetters title={"Chanaka"} disabled />
            </div>
        </div>
    );
};

const AnimatedLetters = ({ title, disabled }) => (
    <span className={style['row-title']}>
        {[...title].map((letter) => (
            <span className={style['row-letter']}>
                {letter}
            </span>
        ))}
    </span>
);


export default Hero