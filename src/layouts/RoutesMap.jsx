import About from "pages/About";
import Contact from "pages/Contact";
import Home from "pages/Home";
import Project from "pages/Project";

var RoutesMap = [
    {
        path: '/',
        component: <Home />,
        layout: 'guest',
        page_transition_title: 'Index 0',
    },
    {
        path: '/about',
        component: <About />,
        layout: 'guest',
        page_transition_title: "About"
    },
    {
        path: '/contact',
        component: <Contact />,
        layout: 'guest',
        page_transition_title: "Contact"
    },
    {
        path: '/project',
        component: <Project />,
        layout: 'guest',
        page_transition_title: "Project"
    },
]

export default RoutesMap;