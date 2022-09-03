import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import React, { useContext, useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom';

import Footer from './footer/footer';
import Header from './header/header';
import PageLoader from './page-loarder/PageLoader';
import { StoreContext } from 'libs/providers/StoreContext';

import routes from './RoutesMap';
import SecondaryPageTransition from './page-loarder/SecondaryPageTransition';

const GuestLayout = () => {
    // const [loading, setLoading] = useState(true)
    const { isPageLoading, setPageLoading, setInvokeBodyHeightFunc } = useContext(StoreContext);

    const location = useLocation()

    const getRoutes = (routes) => {
        return routes.map((prop, key) => {
            if (prop.layout === 'guest') {
                return <Route path={prop.path} element={prop.component} key={key} />;
            }
        });
    };

    const getPageTransitionText = (path) => {
        const routeObj = routes?.find((el, index) => {
            return el?.path == path
        })

        return routeObj?.page_transition_title
    }

    useEffect(() => {
        isPageLoading
            ? document.querySelector("body").classList.add("loading")
            : document.querySelector("body").classList.remove("loading")
    })

    useEffect(() => {
        // console.log('location state : ', location?.pathname);
        if (isPageLoading !== 'initial') {
            setPageLoading(true)
        }
    }, [location?.pathname])

    // for invoke skewScrollingFunction
    useEffect(() => {
        setInvokeBodyHeightFunc(`${location?.pathname} ${!isPageLoading}`)
    }, [location?.pathname, isPageLoading])

    return (
        <AnimateSharedLayout type="crossfade">
            <AnimatePresence exitBeforeEnter>

                {
                    (isPageLoading || isPageLoading === 'initial') ? (
                        <motion.div key='loader'>
                            {/* <PageLoader setLoading={setLoading} /> */}
                            {
                                isPageLoading === 'initial' ? (
                                    <PageLoader EndBackgroundColor={location?.pathname == '/about' && 'white'} />
                                ) : (
                                    <SecondaryPageTransition EndBackgroundColor={location?.pathname == '/about' && 'white'} title={getPageTransitionText(location?.pathname)} />
                                )
                            }
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