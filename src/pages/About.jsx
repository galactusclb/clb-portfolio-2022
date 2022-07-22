import AboutHero from 'components/pages/about/hero'
import SectionEducation from 'components/pages/about/section-education'
import SectionExperience from 'components/pages/about/section-experience'
import SectionSkill from 'components/pages/about/section-skill'
import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'

const About = () => {
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
                    <AboutHero />
                    <SectionSkill />
                    <SectionExperience />
                    <SectionEducation />
                </motion.div>
            </AnimatePresence>
        </>
    )
}

export default About