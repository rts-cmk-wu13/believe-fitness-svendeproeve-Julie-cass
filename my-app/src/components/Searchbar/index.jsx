"use client"

import Link from "next/link";

import { useRef } from "react";
import { IoStarSharp } from "react-icons/io5";

import "./SearchBox.scss"
export default function SearchBox({ Classes }) {

    const scrollRef = useRef(null);


    const handleWheel = (e) => {
        if (scrollRef.current) {
            e.preventDefault();
            scrollRef.current.scrollLeft += e.deltaY;
        }
    };

    return (
        <>
            <section className="AllCLassesSection">
                           <h2>Popular classes</h2>

                <div className="ClassesScrollBox" ref={scrollRef} onWheel={handleWheel}>

                    {Classes.map((C) => (
                        <div className="ClassesDivBox" key={C.id}>
                            <Link href={`/classes/${C.id}`}>
                                <img src={C.asset.url} alt="" />

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