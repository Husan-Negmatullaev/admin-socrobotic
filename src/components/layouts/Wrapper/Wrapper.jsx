import React from "react";
import SimpleBar from "simplebar-react";
import clsx from "clsx";
import { Outlet } from "react-router-dom";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { SideBar } from "../sidebar";

import "simplebar-react/dist/simplebar.min.css";
import styles from "./Wrapper.module.scss";

const Wrapper = () => {
  const scrollBarRef = React.useRef();

  React.useEffect(() => {
    const { current } = scrollBarRef;
    current.contentEl.classList.add("scrollbar_content");
  }, []);

  return (
    <SimpleBar ref={scrollBarRef} className="scrollbar">
      <div className="wrapper">
        <Header />
        <main className="page">
          <SideBar />
          <div className={clsx(styles.content, "container")}>
            <Outlet />
          </div>
        </main>
        <Footer />
      </div>
    </SimpleBar>
  )
}

export default Wrapper;