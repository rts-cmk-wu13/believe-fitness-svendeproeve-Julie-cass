"use client"


import Link from "next/link";

import { useRef } from "react";

import "./SearchBox.scss"
export default function SearchContainer({ Classes }) {



    const scrollRef = useRef("");

    /* for scroll */
    const handleWheel = (e) => {
        if (scrollRef.current) {
            e.preventDefault();
            scrollRef.current.scrollLeft += e.deltaY;
        }
    };

    return (
        <>
           <section className="SearchAllCLassesSection">  {/* this section is on my pge four times when i only need one */}        
                <div className="SearchClassesScrollBox" ref={scrollRef} onWheel={handleWheel}>
                    
                    {Classes.map((ClasSearch) => (
                        <div className="SearchClassesDivBox" key={ClasSearch.id}>
                            <Link href={`/classes/${ClasSearch.id}`}>
                                <img src={ClasSearch.asset.url} alt="" />
                            </Link>
                        </div>
                    ))}

                </div>
            </section>
        </>
    )
}