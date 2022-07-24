import { useAnimation } from 'framer-motion';
import React, { forwardRef, useEffect, useRef } from 'react'

import useMousePosition from 'utils/useMousePosition';
import { distance } from 'utils/utils';



const MagneticDOM2 = forwardRef((props, ref) => {
    const { mouseX, mouseY } = useMousePosition();
    const textRef = useRef();

    // console.log(rect);

    // const fillControls = useAnimation();

    // useEffect(() => {
    //     let x = 0;
    //     let y = 0;

    //     // console.log(props);
    //     // console.log(ref);
    //     if (ref.current !== null) {
    //         const node = ref.current;

    //         // New values for the translations
    //         const rect = node.getBoundingClientRect();
    //         const distanceToTrigger = 200;

    //         const distanceMouseButton = distance(
    //             mouseX + window.scrollX,
    //             mouseY + window.scrollY,
    //             rect.left + rect.width / 2,
    //             rect.top + rect.height / 2
    //         );

    //         const buttonRangePlus = distance(
    //             mouseX + window.scrollX + distanceToTrigger,
    //             mouseY + window.scrollY + distanceToTrigger,
    //             rect.left + rect.width / 2,
    //             rect.top + rect.height / 2
    //         );

    //         const buttonRangeMinus = distance(
    //             mouseX + window.scrollX - distanceToTrigger,
    //             mouseY + window.scrollY - distanceToTrigger,
    //             rect.left + rect.width / 2,
    //             rect.top + rect.height / 2
    //         );

    //         // console.log(distanceMouseButton, buttonRangePlus, buttonRangeMinus);
    //         // Handle magnetic effect
    //         // if (distanceMouseButton > buttonRangePlus && distanceMouseButton > buttonRangeMinus) {
    //         if (distanceMouseButton < distanceToTrigger) {

    //             // Translate button position on hover
    //             x = (mouseX + window.scrollX - (rect.left + rect.width / 2)) * 0.2;
    //             y = (mouseY + window.scrollY - (rect.top + rect.height / 2)) * 0.2;
    //             node.style.transform = `translate(${x / 4}px, ${y / 4}px)`;
    //             ref.current.style.transform = `translate(${x / 4}px, ${y / 4}px)`;
    //             ref.current.style.transition = `0.15s`;
    //         } else {
    //             // Restore initial position
    //             node.style.transform = `translate(0, 0)`;
    //             ref.current.style.transform = `translate(0, 0)`;
    //             ref.current.style.transition = `0.15s`;
    //         }
    //     }

    // }, [mouseX, mouseY, ref, textRef, fillControls])

    function calculateDistance(elem, mouseX, mouseY) {
        return Math.floor(Math.sqrt(Math.pow(mouseX - (elem?.offsetLeft + (elem.clientWidth / 2)), 2) + Math.pow(mouseY - (elem.offsetTop + (elem.clientHeight / 2)), 2)));
    }

    var mX, mY, distance;
    let element;

    useEffect(() => {
        element = document.getElementById('element');
        // console.log(element);


        if (ref.current !== null) {
            const node = ref.current;
            // console.log(node);
        }

        document.addEventListener("mousemove", function (e) {
            mX = e.pageX;
            mY = e.pageY;
            distance = calculateDistance(element, mX, mY);
            // console.log(distance);

            // magneticEffect()

            const node = ref.current;
            const rect = node.getBoundingClientRect();

            if (distance < 200) {

                // Translate button position on hover
                // const x = (mX + window.scrollX - (element?.offsetLeft + element.clientWidth / 2)) * 0.2;
                // const y = (mY + window.scrollY - (element.offsetTop + element.clientHeight / 2)) * 0.2;
                // element.style.transform = `translate(${x / 4}px, ${y / 4}px)`;
                // element.style.transform = `translate(${x / 4}px, ${y / 4}px)`;
                // element.style.transition = `0.15s`;

                // console.log(mX, mY, window.scrollX, window.scrollY);
                let x = (distance - (rect.left + rect.width / 2)) * 0.2;
                let y = (distance - (rect.top + rect.height / 2)) * 0.2;
                node.style.transform = `translate(${x / 4}px, ${y / 4}px)`;
                ref.current.style.transform = `translate(${x / 4}px, ${y / 4}px)`;
                ref.current.style.transition = `0.15s`;
            } else {
                // Restore initial position
                element.style.transform = `translate(0, 0)`;
                element.style.transform = `translate(0, 0)`;
                element.style.transition = `0.15s`;
            }
        });



    }, [distance])

    // magnetic effect
    // const magneticEffect = () => {
    //     if (distance < 200) {
    //         console.log("xd");

    //         // Translate button position on hover
    //         // const x = (mX + window.scrollX - (element?.offsetLeft + element.clientWidth / 2)) * 0.2;
    //         // const y = (mY + window.scrollY - (element.offsetTop + element.clientHeight / 2)) * 0.2;
    //         // element.style.transform = `translate(${x / 4}px, ${y / 4}px)`;
    //         // element.style.transform = `translate(${x / 4}px, ${y / 4}px)`;
    //         // element.style.transition = `0.15s`;

    //         x = (mouseX + window.scrollX - (rect.left + rect.width / 2)) * 0.2;
    //         y = (mouseY + window.scrollY - (rect.top + rect.height / 2)) * 0.2;
    //         node.style.transform = `translate(${x / 4}px, ${y / 4}px)`;
    //         ref.current.style.transform = `translate(${x / 4}px, ${y / 4}px)`;
    //         ref.current.style.transition = `0.15s`;
    //     } else {
    //         // Restore initial position
    //         element.style.transform = `translate(0, 0)`;
    //         element.style.transform = `translate(0, 0)`;
    //         element.style.transition = `0.15s`;
    //     }
    // }

    return (
        <div ref={ref} style={{ display: "inline-block" }} onClick={props?.onClick} id="element">
            <span ref={textRef}>
                {props.children}
            </span>
        </div>
    )
})

export default MagneticDOM2