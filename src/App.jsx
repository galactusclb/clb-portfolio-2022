import { BrowserRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import './assets/styles/main.scss';

import Home from './pages/Home';
import About from "pages/About";
import GuestLayout from "layouts/GuestLayout";
import { TransitionProvider } from "libs/providers/TransitionContext";
import ScrollToTop from "helpers/ScrollToTop";

function App() {
  // let routes = useRoutes([
  //   { path: "/", element: <Home /> },
  //   { path: "/about", element: <About /> },
  // ]);

  return (
    <>
      <TransitionProvider>
        <BrowserRouter>
          <ScrollToTop />
          <GuestLayout />
        </BrowserRouter>
      </TransitionProvider>
    </>
  );
}

export default App;
