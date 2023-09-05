import ComputersCanvas from "./Computer";
import classes from "./page.module.css";
import * as THREE from "three";
import { createNoise2D } from "simplex-noise";

function Introduction() {
  return (
    <div className={classes.main}>
      <div className={classes.Video3d}>
        <ComputersCanvas />
      </div>
      <div className={classes.introContainer}>
        <h1 className={classes.introText}> Prateek</h1>
        <h1 className={classes.subPart}>Balchandani </h1>
        <h1 className={classes.introText2}>
          {" "}
          I'm a passionate frontend developer with 2+ years of experience in
          creating engaging and user-friendly web applications. I specialize in
          HTML, CSS, JavaScript, and various frontend frameworks like React and
          Next.js.
        </h1>
      </div>
    </div>
  );
}

export default Introduction;
