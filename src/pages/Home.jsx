import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion'

import Loader from 'components/pages/home/Loader'
import Hero from 'components/pages/home/Hero'
import HomeIntro from 'components/pages/home/HomeIntro'
import WhatIDo from 'components/pages/home/WhatIDo'
import ProjectsList from 'components/pages/home/ProjectsList'


const Home = () => {

    const [loading, setLoading] = useState(false)

    // useEffect(() => {
    //     loading
    //         ? document.querySelector("body").classList.add("loading")
    //         : document.querySelector("body").classList.remove("loading")
    // })

    return (
        // <AnimateSharedLayout type="crossfade">
        //     <AnimatePresence>
        //         {
        //             loading ? (
        //                 <motion.div key='loader'>
        //                     <Loader setLoading={setLoading} />
        //                 </motion.div>
        //             ) : (
        <>
            <AnimatePresence>
                <motion.div initial={{
                    opacity: 1,
                    // ease: [.6, .01, -.05, .95],
                    duration: 1

                }}
                    animate={{
                        opacity: 1,

                    }}
                    exit={{
                        opacity: 0,
                        transition: {
                            // ease: [.6, .01, -.05, .95],
                            duration: 4
                        }
                    }}>
                    <Hero loading={loading} />
                    {/* // <div className='' style={{ position: "relative" }}>
                            //     {
                            //         !loading && (
                            //             <div className={`${style['clb-hero-img']}`}>
                            //                 <motion.img
                            //                     src={`${process.env.PUBLIC_URL}/images/propic-800-min.png`} alt=""
                            //                     layoutId='main-image-1'
                            //                     transition={{
                            //                         ease: [.6, 0.01, -0.05, 0.95],
                            //                         duration: 1.6
                            //                     }}
                            //                 />
                            //             </div>
                            //         )
                            //     }
                            // </div> */}

                    <HomeIntro />
                    <WhatIDo />
                    <ProjectsList />

                </motion.div>
            </AnimatePresence>
        </>

        //             )
        //         }
        //     </AnimatePresence>
        // </AnimateSharedLayout>
    )
}

export default Home