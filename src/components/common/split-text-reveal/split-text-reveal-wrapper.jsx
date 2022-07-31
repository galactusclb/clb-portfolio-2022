import React, { forwardRef, useState } from 'react'
import { useRef } from 'react';
import { useEffect } from 'react';

const SplitTextRevealWrapper = forwardRef((props, ref) => {

    useEffect(() => {
        console.log(ref);
        // let revealText = document.querySelectorAll(".line");

    }, [props])


    return (
        <>
            {props?.children}
        </>
    )
})

export default SplitTextRevealWrapper