import About from "pages/About";
import Contact from "pages/Contact";
import Home from "pages/Home";
import Project from "pages/Project";

var RoutesMap = [
    {
        path: '/',
        component: <Home />,
        layout: 'guest',
    },
    {
        path: '/about',
        component: <About />,
        layout: 'guest',
    },
    {
        path: '/contact',
        component: <Contact />,
        layout: 'guest',
    },
    {
        path: '/project',
        component: <Project />,
        layout: 'guest',
    },
]

export default RoutesMap;