import { useAnimation } from 'framer-motion';
import React, { forwardRef, useEffect, useRef } from 'react'

import useMousePosition from 'utils/useMousePosition';
import { distance } from 'utils/utils';

const MagneticDOM = forwardRef((props, ref) => {
    let LERP_AMOUNT = props?.lerp ?? 0.8;


    const { mouseX, mouseY, scrolledMouseX, scrolledMouseY } = useMousePosition();
    const textRef = useRef();
    const fillControls = useAnimation();

    function getMousePositionDistanceFromDomElement(elem) {
        return Math.floor(Math.sqrt(Math.pow(scrolledMouseX - (elem?.offsetLeft + (elem.clientWidth / 2)), 2) + Math.pow(scrolledMouseY - (elem.offsetTop + (elem.clientHeight / 2)), 2)));
        // return 0;
    }

    useEffect(() => {
        let x = 0;
        let y = 0;

        if (ref.current !== null) {
            const node = ref.current;

            // New values for the translations
            const rect = node.getBoundingClientRect();
            const distanceToTrigger = 200;


            const distanceMouseButton = getMousePositionDistanceFromDomElement(node)

            // Handle magnetic effect
            if (distanceMouseButton < distanceToTrigger) {
                // Translate button position on hover
                x = (mouseX - (node?.offsetLeft + (node.clientWidth / 2))) * LERP_AMOUNT;
                y = (scrolledMouseY - (node.offsetTop + (node.clientHeight / 2))) * LERP_AMOUNT;

                node.style.transform = `translate(${x / 4}px, ${y / 4}px)`;
                ref.current.style.transform = `translate(${x / 4}px, ${y / 4}px)`;
                ref.current.style.transition = `0.3s`;
            } else {
                // Restore initial position
                node.style.transform = `translate(0, 0)`;
                ref.current.style.transform = `translate(0, 0)`;
                ref.current.style.transition = `0.4s`;
            }
        }

    }, [mouseX, mouseY, ref, textRef, fillControls])

    return (
        <div ref={ref} style={{ display: "inline-block" }} onClick={props?.onClick}>
            <span ref={textRef}>
                {props.children}
            </span>
        </div>
    )
})

export default MagneticDOM