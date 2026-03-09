"use client";

/* imports */

import "./loader.scss"
import "./btnAnimation.scss"
import Link from "next/link";
import { useEffect, useState } from "react";

/* images are made in scss file and put into an array */
const backgrounds = ["bg1", "bg2"];


/* function */
export default function Loader() {

  /* useState to store the data that changes */
  const [randomImage, setRandomImage] = useState("");

  /* after it loads it runs this code */
  useEffect(() => {
    const random = backgrounds[Math.floor(Math.random() * backgrounds.length)];
    setRandomImage(random);

    /* math generates a number and gets multiplied by length of array and 
    depending on what number is from that(so if closet to 0/1 then it's bg1) */
  }, []);


  return (
    <>
      <main>

        <section className={`background-image-container ${randomImage}`}>
          <div className="loader-content-container">
            <h1>Believe <span className="titleSecondLine"> Fitness</span></h1>
            <div>
              <span></span>
              <h2>Train like a pro</h2>
            </div>

          </div>

          <button className="BtnToHomeFromLoader">
            <Link
              href="/Home"
              className="btn-flip BtnToHomeFromLoader"
              data-front="Start training"
              data-back="Welcome">
            </Link>
          </button>
        </section>
      </main>
    </>
  );
}
