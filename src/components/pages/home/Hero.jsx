import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion";

import style from 'assets/styles/modules/home/hero.module.scss'

const banner = {
    animate: {
        transition: {
            delayChildren: 0.4,
            staggerChildren: 0.1
        }
    }
}

const letterAnimation = {
    initial: {
        y: 400,
    },
    animate: {
        y: 0,
        transition: {
            ease: [.6, .01, -.05, .95],
            duration: 1
        }
    }
}

const Hero = () => {

    const [playMarquee, setPlayMarquee] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setPlayMarquee(true);
        }, 1800)
    }, []);

    return (
        <motion.div className={style['clb-main']} variants={banner}>

            <div className={`${style['clb-hero-img']}`}>
                <img src={`${process.env.PUBLIC_URL}/images/propic-800-min.png`} alt="" />
            </div>

            <div className="container-fluid">
                <div className={`${style['clb-hero-center']} row justify-content-end align-items-center`}>
                    <div className="col-lg-6">
                        <div
                            className=""
                        >
                            <motion.h4
                                initial={{
                                    opacity: 0,
                                    y: 80
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        ease: "easeInOut",
                                        duration: 1,
                                        delay: 1.6
                                    }
                                }}
                            >👋Hello, I'm</motion.h4>
                            <motion.h4
                                initial={{
                                    opacity: 0,
                                    y: 80
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        ease: "easeInOut",
                                        duration: 1,
                                        delay: 1.7
                                    }
                                }}
                            >Chanaka Lakshan</motion.h4>
                            <motion.p
                                initial={{
                                    opacity: 0,
                                    y: 80
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        ease: "easeInOut",
                                        duration: 1,
                                        delay: 1.8
                                    }
                                }}
                            >Full-Stack Web Developer</motion.p>
                        </div>

                        <motion.div className={`${style['abuot-me']} row justify-content-center align-items-center mt-5`}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 1, delay: 2.2 }}>
                            <motion.span
                                className='text-center'
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{
                                    ease: "easeInOut",
                                    duration: 1,
                                    delay: 2.8
                                }}>
                                About me
                            </motion.span>
                        </motion.div>
                    </div>
                </div>

            </div>
            <div className="">
                <BannerRowCenter playMarquee={playMarquee} />
            </div>
        </motion.div>
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
    <motion.span
        className={style['row-title']}
        variants={disabled ? null : banner}
        initial="initial"
        animate="animate"
    >
        {[...title].map((letter) => (
            <motion.span
                className={style['row-letter']}
                variants={letterAnimation}
            >
                {letter}
            </motion.span>
        ))}
    </motion.span>
);


export default Hero