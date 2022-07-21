import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import Footer from './footer/footer';
import Header from './header/header';
import PageLoader from './page-loarder/PageLoader';

import routes from './RoutesMap';

const GuestLayout = () => {
    const [loading, setLoading] = useState(true)

    const getRoutes = (routes) => {
        return routes.map((prop, key) => {
            if (prop.layout === 'guest') {
                return <Route path={prop.path} element={prop.component} key={key} />;
            }
        });
    };

    useEffect(() => {
        loading
            ? document.querySelector("body").classList.add("loading")
            : document.querySelector("body").classList.remove("loading")
    })

    return (
        <AnimateSharedLayout type="crossfade">
            <AnimatePresence>
                {
                    loading ? (
                        <motion.div key='loader'>
                            <PageLoader setLoading={setLoading} />
                        </motion.div>
                    ) : (
                        <>
                            <Header />
                            <Routes>
                                {getRoutes(routes)}
                                <Route from="/" to="/home" />
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