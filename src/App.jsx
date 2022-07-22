import { BrowserRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import './assets/styles/main.scss';

import Home from './pages/Home';
import About from "pages/About";
import GuestLayout from "layouts/GuestLayout";

function App() {
  // let routes = useRoutes([
  //   { path: "/", element: <Home /> },
  //   { path: "/about", element: <About /> },
  // ]);

  return (
    <>
      <BrowserRouter>
        <GuestLayout />
      </BrowserRouter>
    </>
  );
}

export default App;
