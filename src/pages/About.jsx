import AboutHero from 'components/pages/about/hero'
import SectionExperience from 'components/pages/about/section-experience'
import SectionSkill from 'components/pages/about/section-skill'
import React from 'react'

const About = () => {
    return (
        <>
            <AboutHero />
            <SectionSkill />
            <SectionExperience />
        </>
    )
}

export default About