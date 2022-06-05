import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion";

import style from 'assets/styles/modules/home/hero.module.scss'
import { banner, letterAnimation } from 'animations/home/animation_hero';



const Hero = ({ loading }) => {

    const [playMarquee, setPlayMarquee] = useState(false);

    // magnetic button - start
    const lerp = (current, target, factor) => {
        return current * (1 - factor) + target * factor
    }

    let mousePosition = { x: 0, y: 0 }
    // let [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

    window.addEventListener("mouseover", (e) => {
        mousePosition.x = e.pageX
        mousePosition.y = e.pageY

        // console.log(e.pageX, e.pageY);
    })

    const calculateDistance = (x1, y1, x2, y2) => {
        return Math.hypot(x1 - x2, y1 - y2)
    }

    class MagneticObject {
        constructor(domElement) {
            this.domElement = domElement
            this.boundingClientRect = this.domElement.getBoundingClientRect()
            this.triggerArea = 200;
            this.interpolationFactor = 0.8;

            this.lerpingData = {
                x: { current: 0, target: 0 },
                y: { current: 0, target: 0 }
            }
            this.resize()
            this.render()
        }

        resize() {
            window.addEventListener("resize", (e) => {
                this.boundingClientRect = this.domElement.getBoundingClientRect()
            })
        }

        render() {
            const distanceFromMouseToCenter = calculateDistance(
                mousePosition.x,
                mousePosition.y,
                this.boundingClientRect.left + this.boundingClientRect?.width / 2,
                this.boundingClientRect.top + this.boundingClientRect?.height / 2,
            )
            console.log(distanceFromMouseToCenter);

            let targetHolder = { x: 0, y: 0 };

            if (distanceFromMouseToCenter < this.triggerArea) {
                // this.domElement.classList.add("focus");
                targetHolder.x =
                    (mousePosition.x -
                        (this.boundingClientRect.left +
                            this.boundingClientRect.width / 2)) *
                    0.1;
                targetHolder.y =
                    (mousePosition.y -
                        (this.boundingClientRect.top +
                            this.boundingClientRect.height / 2)) *
                    0.1;
                console.log(targetHolder);
            } else {
                // this.domElement.classList.remove("focus");
            }
            this.lerpingData["x"].target = targetHolder.x;
            this.lerpingData["y"].target = targetHolder.y;

            for (const item in this.lerpingData) {
                this.lerpingData[item].current = lerp(
                    this.lerpingData[item].current,
                    this.lerpingData[item].target,
                    this.interpolationFactor
                );
            }

            this.domElement.style.transform = `translate(${this.lerpingData["x"].current}px, ${this.lerpingData["y"].current}px)`;

            window.requestAnimationFrame(() => this.render())
        }
    }

    // magnetic button - end


    useEffect(() => {
        setTimeout(() => {
            // setPlayMarquee(true);
        }, 1800)

        const button = document.querySelector('.clb-magnetic-btn')
        new MagneticObject(button)
    }, []);

    return (
        <motion.div className={style['clb-main']} variants={banner}>

            {
                !loading && (
                    <div className={`${style['clb-hero-img']}`}>
                        <motion.img
                            src={`${process.env.PUBLIC_URL}/images/propic-800-min.png`} alt=""
                            layoutId='main-image-1'
                            transition={{
                                ease: [.6, 0.01, -0.05, 0.95],
                                duration: 1.6
                            }}
                        />
                    </div>
                )
            }

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

                        <motion.div className={`${style['abuot-me']} row justify-content-center align-items-center mt-5 clb-magnetic-btn`}
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
            <div className={`${style['clb-hero-bottom']}`}
            // style={{
            //     backgroundImage: `url(${process.env.PUBLIC_URL}/images/propic-800-min.png)`,
            //     backgroundRepeat: "no-repeat",
            //     backgroundPosition: "left -6px bottom -80px",
            //     backgroundSize: "79vh"
            // }}
            >
                <div className={`${style['clb-hero-bottom-inner']}`}>
                    <BannerRowCenter playMarquee={playMarquee} />
                    <div className={`${style['clb-bottom-div']}`}>
                        <BannerRowCenter playMarquee={playMarquee} customClass="outline-text" />
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

const BannerRowCenter = ({ playMarquee, customClass = null }) => {
    return (
        <div className={`d-flex flex-row flex-nowrap marquee row-title ${playMarquee && "animate"} ${style['marquee-text']} ${style[customClass]}`}
        // style={{
        //     backgroundImage: `url(${process.env.PUBLIC_URL}/images/propic-800-min.png)`,
        //     backgroundRepeat: "no-repeat",
        //     backgroundPosition: "left -6px bottom -80px",
        //     backgroundSize: "79vh"
        // }}
        >
            <div className="marquee__inner" >
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
    // style={{
    //     backgroundImage: `url(${process.env.PUBLIC_URL}/images/propic-800-min.png)`,
    //     backgroundRepeat: "no-repeat",
    //     backgroundPosition: "left -6px bottom -80px",
    //     backgroundSize: "79vh"
    // }}

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