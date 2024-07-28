import React, { useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import CursorFollower from "./CursorFollower";
import useLocoscroll from "./UseLocoscroll";

function Layout() {
  const [preLoader, setPreloader] = useState(true);
  // useLocoscroll(!preLoader);

  const [timer, setTimer] = useState(3);
  const id = useRef(null);

  const clear = () =>{
    window.clearInterval(id.current);
    setPreloader(false);
  }
  useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer === 1) {
          clear();
        }
        return prevTimer - 1;
      });
    }, 1000);

    return () => window.clearInterval(id.current);
  }, []);
  return (
    <>
      {preLoader ? (
        <div className="loader-wrapper absolute flex items-center justify-center bg-[#191919]">
          <h1 className="text-white text-3xl">loading...</h1>
        </div>
      ) : (
        <main id="main-container" data-scroll-container>
          <CursorFollower />
          <Header />
          <Outlet />
        </main>
      )}
    </>
  );
}

export default Layout;
