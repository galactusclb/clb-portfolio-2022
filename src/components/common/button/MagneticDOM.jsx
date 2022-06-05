import { useAnimation } from 'framer-motion';
import React, { forwardRef, useEffect, useRef } from 'react'

import useMousePosition from 'utils/useMousePosition';
import { distance } from 'utils/utils';

const MagneticDOM = forwardRef((props, ref) => {
    const { mouseX, mouseY } = useMousePosition();
    const textRef = useRef();
    const fillControls = useAnimation();

    useEffect(() => {
        let x = 0;
        let y = 0;

        // console.log(props);
        // console.log(ref);
        if (ref.current !== null) {
            const node = ref.current;

            // New values for the translations
            const rect = node.getBoundingClientRect();
            const distanceToTrigger = 200;

            const distanceMouseButton = distance(
                mouseX + window.scrollX,
                mouseY + window.scrollY,
                rect.left + rect.width / 2,
                rect.top + rect.height / 2
            );

            // Handle magnetic effect
            if (distanceMouseButton < distanceToTrigger) {
                // Translate button position on hover
                x = (mouseX + window.scrollX - (rect.left + rect.width / 2)) * 0.2;
                y = (mouseY + window.scrollY - (rect.top + rect.height / 2)) * 0.2;
                node.style.transform = `translate(${x / 4}px, ${y / 4}px)`;
                ref.current.style.transform = `translate(${x / 4}px, ${y / 4}px)`;
                ref.current.style.transition = `0.15s`;
            } else {
                // Restore initial position
                node.style.transform = `translate(0, 0)`;
                ref.current.style.transform = `translate(0, 0)`;
            }
        }

    }, [mouseX, mouseY, ref, textRef, fillControls])

    return (
        <div ref={ref} style={{ display: "inline-block" }} href={props.href}>
            <span ref={textRef}>
                {props.children}
            </span>
        </div>
    )
})

export default MagneticDOM