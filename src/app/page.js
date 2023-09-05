"use client";

import Image from "next/image";
import Introduction from "./Components/Introduction";
import Aboutme from "./Components/AboutMe";
import classes from "./page.module.css";
import Logo from "./myLogo.svg";

export default function Home() {
  return (
    <div className={classes.container}>
      <nav className={classes.navBar}>
        <Image src={Logo} className={classes.logo} />
        <div className={classes.rightNav}>
          <div className={classes.cta}>
            About <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={classes.cta}>
            Experience <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={classes.cta}>
            Work <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={classes.cta}>
            Contact <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      <section className={classes.child}>
        {" "}
        <Introduction />{" "}
      </section>
      <section className={classes.child}>
        <Aboutme />{" "}
      </section>
    </div>
  );
}
