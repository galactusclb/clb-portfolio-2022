import { useRoutes } from "react-router-dom";

import './assets/styles/main.scss';

import Home from './pages/Home';

function App() {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
  ]);

  return routes;
}

export default App;
