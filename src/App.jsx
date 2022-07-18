import { useRoutes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import './assets/styles/main.scss';

import Home from './pages/Home';
import About from "pages/About";

function App() {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
  ]);

  return routes;
}

export default App;
