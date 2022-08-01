import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import React, { useContext, useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom';

import Footer from './footer/footer';
import Header from './header/header';
import PageLoader from './page-loarder/PageLoader';
import { Transition } from 'libs/providers/TransitionContext';

import routes from './RoutesMap';

const GuestLayout = ({ setInvokeBodyHeightFunc }) => {
    // const [loading, setLoading] = useState(true)
    const { isPageLoading, setPageLoading } = useContext(Transition);

    const location = useLocation()

    const getRoutes = (routes) => {
        return routes.map((prop, key) => {
            if (prop.layout === 'guest') {
                return <Route path={prop.path} element={prop.component} key={key} />;
            }
        });
    };

    useEffect(() => {
        isPageLoading
            ? document.querySelector("body").classList.add("loading")
            : document.querySelector("body").classList.remove("loading")
    })

    useEffect(() => {
        // console.log('location state : ', location?.pathname);
        // setPageLoading(true)
    }, [location?.pathname])

    // for invoke skewScrollingFunction
    useEffect(() => {
        setInvokeBodyHeightFunc(`${location?.pathname} ${!isPageLoading}`)
    }, [location?.pathname, isPageLoading])

    return (
        <AnimateSharedLayout type="crossfade">
            <AnimatePresence exitBeforeEnter>

                {
                    isPageLoading ? (
                        <motion.div key='loader'>
                            {/* <PageLoader setLoading={setLoading} /> */}
                            <PageLoader EndBackgroundColor={location?.pathname == '/about' && 'white'} />
                        </motion.div>
                    ) : (
                        <>
                            <Header />
                            <Routes location={location} key={location.pathname}>
                                {getRoutes(routes)}
                                <Route from="/" to="/" />
                                <Route from="*" to="/auth/login" />
                            </Routes>
                            <Footer />
                        </>
                    )
                }

            </AnimatePresence>
        </AnimateSharedLayout>
    )
}

export default GuestLayout