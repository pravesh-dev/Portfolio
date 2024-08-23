import React, { useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import CursorFollower from "./CursorFollower";
import Lenis from "lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

function Layout() {
  const lenis = useRef(null);

  useEffect(() => {
    lenis.current = new Lenis({
      lerp: 0.1,
      smooth: true,
    });

    const handleRaf = (time) => {
      lenis.current.raf(time);
      requestAnimationFrame(handleRaf);
    };

    lenis.current.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.current.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    requestAnimationFrame(handleRaf);

    return () => {
      lenis.current.destroy();
      gsap.ticker.remove(handleRaf);
    };
  }, []);

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
    }, 100);

    return () => window.clearInterval(id.current);
  }, []);

  return (
    <>
      {preLoader ? (
        <div className="loader-wrapper absolute flex items-center justify-center bg-[#191919] w-full h-screen">
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
