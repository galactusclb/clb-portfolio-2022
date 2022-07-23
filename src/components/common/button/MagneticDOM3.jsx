import { useAnimation } from 'framer-motion';
import React, { forwardRef, useEffect, useRef } from 'react'

import useMousePosition from 'utils/useMousePosition';
import { distance } from 'utils/utils';

const MagneticDOM3 = forwardRef((props, ref) => {
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
                x = (mouseX - (node?.offsetLeft + (node.clientWidth / 2))) * 0.2;
                y = (scrolledMouseY - (node.offsetTop + (node.clientHeight / 2))) * 0.2;

                node.style.transform = `translate(${x / 4}px, ${y / 4}px)`;
                ref.current.style.transform = `translate(${x / 4}px, ${y / 4}px)`;
                ref.current.style.transition = `0.15s`;
            } else {
                // Restore initial position
                node.style.transform = `translate(0, 0)`;
                ref.current.style.transform = `translate(0, 0)`;
                ref.current.style.transition = `0.15s`;
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

export default MagneticDOM3