import About from "pages/About";
import Contact from "pages/Contact";
import Home from "pages/Home";

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
    }
]

export default RoutesMap;