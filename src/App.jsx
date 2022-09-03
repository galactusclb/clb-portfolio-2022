import { useRef, useEffect } from "react";
import { BrowserRouter, useLocation } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import './assets/styles/main.scss';

import GuestLayout from "layouts/GuestLayout";
import { StoreContext } from "libs/providers/StoreContext";
import ScrollToTop from "helpers/ScrollToTop";
import useWindowSize from "hooks/useWindowSize";
import { useState } from "react";
import { useContext } from "react";

function App() {

  // ref
  const appRef = useRef()
  const scrollContainerRef = useRef()

  // for re-invoke setBodyHeight() function
  // const [InvokeBodyHeightFunc, setInvokeBodyHeightFunc] = useState(null)
  const { InvokeBodyHeightFunc, setInvokeBodyHeightFunc } = useContext(StoreContext)

  const size = useWindowSize()

  const Is_SKEW_ENABLED = true
  const SKEW_AMOUNT = 7.5

  const skewConfigs = {
    ease: 0.07,
    current: 0,
    previous: 0,
    rounded: 0
  }

  useEffect(() => {
    requestAnimationFrame(() => skewScrolling());
  }, []);

  //set the height of the body.
  useEffect(() => {
    setBodyHeight();
  }, [size.height, InvokeBodyHeightFunc]);



  const setBodyHeight = () => {
    document.body.style.height = `${scrollContainerRef.current.getBoundingClientRect().height
      }px`;
  };

  const skewScrolling = () => {
    skewConfigs.current = window.scrollY
    skewConfigs.previous += (skewConfigs.current - skewConfigs.previous) * skewConfigs.ease
    skewConfigs.rounded = Math.round(skewConfigs.previous * 100) / 100


    const difference = skewConfigs.current - skewConfigs.rounded
    const acceleration = difference / size.width
    const velocity = +acceleration
    const skew = velocity * SKEW_AMOUNT

    Is_SKEW_ENABLED ? (
      scrollContainerRef.current.style.transform = `translate3d(0, -${skewConfigs.rounded}px, 0) skewY(${skew}deg)`
    ) : (
      scrollContainerRef.current.style.transform = `translate3d(0, -${skewConfigs.rounded}px, 0)`
    )

    //loop vai raf
    requestAnimationFrame(() => skewScrolling());
  }

  return (
    // <TransitionProvider>
    <div ref={appRef} className='App'>
      <div ref={scrollContainerRef} className="scroll-container">
        <BrowserRouter>
          <ScrollToTop />
          <GuestLayout />
        </BrowserRouter>
      </div>
    </div>
    // </TransitionProvider>
  );
}

export default App;
