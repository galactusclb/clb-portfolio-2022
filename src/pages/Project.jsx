import ProjectHero from 'components/pages/project/hero';
import ProjectSection_1 from 'components/pages/project/section_1';
import ProjectSection_2 from 'components/pages/project/section_2';
import ProjectScreenshot from 'components/pages/project/section-screenshots';
import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import useHover from 'utils/useHover';
import SectionBigTitle from 'components/pages/project/section-big-title';

const Project = () => {
    const [hoverRef, isHovered] = useHover();

    return (
        <>
            <AnimatePresence>
                <motion.div initial={{
                    opacity: 0,
                    // ease: [.6, .01, -.05, .95],
                    duration: 4

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
                    <ProjectHero />
                    <SectionBigTitle />
                    <ProjectSection_1 />
                    <ProjectScreenshot />
                    <ProjectSection_2 />
                </motion.div>
            </AnimatePresence>
        </>
    )
}

export default Project