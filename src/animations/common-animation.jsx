export const text_split_reveal = {
    initial: {
        y: '100%',
    },
    animate: (i = 0) => ({
        y: 0,
        transition: {
            ease: [.6, .01, -.05, .95],
            duration: 0.7,
            delay: i
        }
    })
}

export const common_reveal = {
    initial: {
        opacity: 0,
        y: 50,
    },
    animate: (i = 0) => ({
        y: 0,
        opacity: 1,
        transition: {
            ease: [.6, .01, -.05, .95],
            duration: 0.7,
            delay: i
        }
    })
}