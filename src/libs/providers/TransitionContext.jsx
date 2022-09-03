import { createContext, useContext, useState } from "react";

// export const TransitionContext = createContext(true)
// export const TransitionUpdateContext = createContext()

// export const usePageTransition = () => {
//     return useContext(TransitionContext)
// }

// export const usePageTransitionUpdate = () => {
//     return useContext(TransitionUpdateContext)
// }
export const Transition = createContext();

export const TransitionProvider = ({ children }) => {
    // const [isPageLoading, setPageLoading] = useState(TransitionContext)

    // const togglePageLoading = () => {
    //     console.log('sasas : ,' + isPageLoading);
    //     setPageLoading(false)
    // }

    const [isPageLoading, setPageLoading] = useState('initial');

    const TransitionContextValue = {
        isPageLoading,
        setPageLoading
    };

    // return (
    //     <TransitionContext.Provider value={isPageLoading}>
    //         <TransitionUpdateContext.Provider value={togglePageLoading}>
    //             {children}
    //         </TransitionUpdateContext.Provider>
    //     </TransitionContext.Provider>
    // )

    return (<Transition.Provider value={TransitionContextValue}>{children}</Transition.Provider>)
}