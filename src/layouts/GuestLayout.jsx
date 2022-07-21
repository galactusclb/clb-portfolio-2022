import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Footer from './footer/footer';
import Header from './header/header';

import routes from './RoutesMap';

const GuestLayout = () => {
    const getRoutes = (routes) => {
        return routes.map((prop, key) => {
            if (prop.layout === 'guest') {
                return <Route path={prop.path} element={prop.component} key={key} />;
            }
        });
    };

    return (
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

export default GuestLayout