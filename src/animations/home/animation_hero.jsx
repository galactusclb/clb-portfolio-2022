export const banner = {
    animate: {
        transition: {
            delayChildren: 0.4,
            staggerChildren: 0.1
        }
    }
}

export const hero_img = {
    initial: {
        x: -100
    },
    animate: {
        x: 0
    }
}

export const letterAnimation = {
    initial: {
        y: 400,
    },
    animate: {
        y: 0,
        transition: {
            ease: [.6, .01, -.05, .95],
            duration: 1
        }
    }
}