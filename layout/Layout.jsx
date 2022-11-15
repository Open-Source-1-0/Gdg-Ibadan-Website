import { useRef, useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import Sidenav from "../components/Sidenav/Sidenav";
import styles from "./Layout.module.scss";


const locomotiveScroll =
  typeof window !== "undefined" ? require("locomotive-scroll").default : null;

const Layout = ({ children }) => {
  const MainContainer = useRef(null);
  let locoScroll;

  useEffect(() => {
    if (!MainContainer.current) return;
    // @ts-ignore
    locoScroll = new locomotiveScroll({
      el: document.querySelector("#home"),
      smooth: true,
      mobile: {
        smooth: true,
      },
      tablet: {
        smooth: true,
      },
      reloadOnContextChange: true,
      inertia: 0.3,
      class: "is-reveal",
      offset: 0,
      multiplier: 0.65,
    });

    // update locomotive scroll
    window.addEventListener("load", () => {
      const getTop = document.querySelector("#home");
      locoScroll.update();
      locoScroll.scrollTo(getTop);
    });
  }, []);
  return (
    <div id="home" data-scroll-container ref={MainContainer}>
      <Navbar />
      <Sidenav />
      <div className={styles.container}>{children}</div>
    </div>
  );
};

export default Layout;