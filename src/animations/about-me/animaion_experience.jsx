export const ul_animation = {
    initial: {
        // x: 30,
        // opacity: 0
    },
    animate: (i = 0) => ({
        // x: 0,
        // opacity: 1,
        transition: {
            // staggerChildren: 0.4,
            delayChildren: 0.5,
            delay: 1
        }
    })
}

export const li_animation = {
    initial: {
        x: 30,
        opacity: 0
    },
    animate: (i = 0) => ({
        x: 0,
        opacity: 1,
        transition: {
            delay: i
        }
    })
}