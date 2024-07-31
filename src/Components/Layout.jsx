import React, { useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import CursorFollower from "./CursorFollower";
import Lenis from "lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

function Layout() {
  const lenis = new Lenis();

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  const [preLoader, setPreloader] = useState(true);

  const [timer, setTimer] = useState(3);
  const id = useRef(null);

  const clear = () => {
    window.clearInterval(id.current);
    setPreloader(false);
  };

  useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer((timer) => {
        if (timer === 1) {
          clear();
        }
        return timer - 1;
      });
    }, 500);

    return () => window.clearInterval(id.current);
  }, []);

  return (
    <>
      {preLoader ? (
        <div className="loader-wrapper absolute flex items-center justify-center bg-[#191919] w-full h-full">
          <h1 className="text-white text-3xl">loading...</h1>
        </div>
      ) : (
        <main id="main-container">
          <CursorFollower />
          <Header />
          <Outlet />
        </main>
      )}
    </>
  );
}

export default Layout;
