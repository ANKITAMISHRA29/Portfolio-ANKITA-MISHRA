import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/me.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in building responsive
                and optimized sites.Also I have worked with various tools like flowbite,bootstrap,wordpress to enhance the site view and performance
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Intermediate Python</h3>
              <p>
                I am good with intermediate experience of python.
<br></br>
                My coding platform profile :
<br></br>
                <a href="https://www.hackerrank.com/profile/ankitamishra12d">Hackerrank</a><br></br>
<a href="https://leetcode.com/ankitamishra37617/">Leetcode</a>
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Communication</h3>
              <p>
              I am recognized for my oratory prowess, I've clinched awards in various speaking contests, embodying the essence of a natural communicator.
My leadership narrative has been shaped by pivotal roles, including NCC LCPL with coveted B and C certificates. 
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};