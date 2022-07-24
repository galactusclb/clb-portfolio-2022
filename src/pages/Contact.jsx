import MagneticDOM from 'components/common/button/MagneticDOM'
import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import useHover from 'utils/useHover';

const Contact = () => {
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
                    {/* <MagneticDOM ref={hoverRef} >
                        <button type='button' className={`clb-btn-circle row justify-content-center align-items-center mt-0`} onClick={() => console.log('clicked 2')}>
                            <span
                                className='text-center'>
                                Send Contact.
                            </span>
                        </button>
                    </MagneticDOM> */}
                </motion.div>
            </AnimatePresence>
        </>
    )
}

export default Contact