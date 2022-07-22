import About from "pages/About";
import Home from "pages/Home";

var RoutesMap = [
    {
        path: '/home',
        component: <Home />,
        layout: 'guest',
    },
    {
        path: '/about',
        component: <About />,
        layout: 'guest',
    }
]

export default RoutesMap;