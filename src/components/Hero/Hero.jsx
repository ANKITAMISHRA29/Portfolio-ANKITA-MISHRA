import React, { useEffect, useState } from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const greetings = ["Hi", "नमस्ते", "হ্যালো", "ہیلو"];

  useEffect(() => {
    let typingTimeout;
    const handleTyping = () => {
      const i = loopNum % greetings.length;
      const fullText = greetings[i];

      if (isDeleting) {
        setDisplayText((prev) => fullText.substring(0, prev.length - 1));
      } else {
        setDisplayText((prev) => fullText.substring(0, prev.length + 1));
      }

      // When typing is complete, pause before starting to delete
      if (!isDeleting && displayText === fullText) {
        typingTimeout = setTimeout(() => setIsDeleting(true), 1000);
        setTypingSpeed(150);
      }
      // When deleting is complete, move to the next greeting
      else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(150);
      } else {
        typingTimeout = setTimeout(handleTyping, typingSpeed);
      }
    };

    typingTimeout = setTimeout(handleTyping, typingSpeed);

    // Clear timeout on cleanup to avoid memory leaks
    return () => clearTimeout(typingTimeout);
  }, [displayText, isDeleting, loopNum, typingSpeed, greetings]);

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>{displayText}, I'm Ankita Mishra</h1>
        <p className={styles.description}>
          My passion lies in meeting new people, solving complex problems, and driving growth within an organization through innovative strategies and insightful analysis. This is where I thrive, this is where I lead.
        </p>
        <a href="mailto:ankitamishra12d@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <div className={styles.giphyContainer}>
        <iframe
          src="https://giphy.com/embed/l4FGl1iHmW7KYVCCY"
          width="200%"
          height="1000%"
          frameBorder="0"
          className={styles.giphyEmbed}
          allowFullScreen
        ></iframe>
      </div>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
