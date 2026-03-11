/* "use client"

import Link from "next/link";

import { useRef } from "react";

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
           <section className="SearchAllCLassesSection">      
                <div className="SearchClassesScrollBox" ref={scrollRef} onWheel={handleWheel}>
                    
                    {Classes.map((C) => (
                        <div className="SearchClassesDivBox" key={C.id}>
                            <Link href={`/classes/${C.id}`}>
                                <img src={C.asset.url} alt="" />
                            </Link>
                        </div>
                    ))}

                </div>
            </section>
        </>
    )
}*/