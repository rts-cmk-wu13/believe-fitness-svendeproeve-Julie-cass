"use client";

import Link from "next/link";
import { IoStarSharp } from "react-icons/io5";

import "./AllClasses.scss"

import { useState, useEffect, useRef } from "react";

export default function AllClasses({ Classes }) {
    const scrollRef = useRef(null);
    /* useState to store the data that changes */
    const [randomClass, setRandomClass] = useState(null);


    /* after it loads it runs this code */
    useEffect(() => {
        if (Classes.length > 0) {
            const random = Math.floor(Math.random() * Classes.length);
            setRandomClass(Classes[random]);
        }

        /* math generates a number and gets multiplied by length of array and 
      depending on what number is from that(so if closet to 0/1 then it's bg1) */
    }, [Classes]);

    if (!randomClass) return <div>Loading...</div>;


    /* for scroll */
const handleWheel = (e) => {
    if (!scrollRef.current) return;

    if (e.deltaY !== 0) {
        e.preventDefault();
        scrollRef.current.scrollLeft += e.deltaY;
    }
};


    return (
        <>
            <section className="AllCLassesSection">
                <div className="BigIMageContainer">
                    <Link href={`/classes/${randomClass.id}`}>
                    <img src={randomClass.asset?.url ||  '/images/placeholder.jpg'} alt={randomClass.className}  />
                        <div className="BigImageMiniInfoContainer">
                            <p>{randomClass.className}</p>
                            <div className="BigImageMiniInfoStars">
                                <p><IoStarSharp /></p>
                                <p><IoStarSharp /></p>
                                <p><IoStarSharp /></p>
                                <p><IoStarSharp /></p>
                                <p><IoStarSharp /></p>
                            </div>
                        </div>
                    </Link>
                </div>

                <h3 className="ScrollBarTitle">Classes for you</h3>
                <div className="ClassesScrollBox" ref={scrollRef} onWheel={handleWheel}>
                    {Classes.map((C) => (
                        <div className="ClassesDivBox" key={C.id}>
                            <Link href={`/classes/${C.id}`}>
<img src={C.asset?.url ||  '/images/placeholder.jpg'} alt={C.className} />

                                <div className="MiniInfoContainer">
                                    <p>{C.className}</p>
                                    <div className="MiniInfoStars">
                                        <p><IoStarSharp /></p>
                                        <p><IoStarSharp /></p>
                                        <p><IoStarSharp /></p>
                                        <p><IoStarSharp /></p>
                                        <p><IoStarSharp /></p>
                                    </div>
                                </div>

                            </Link>
                        </div>
                    ))}

                </div>
            </section>
        </>

    )
}