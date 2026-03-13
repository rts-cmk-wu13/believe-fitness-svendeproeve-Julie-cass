import Link from "next/link"
import { FaArrowLeft } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { IoStarSharp } from "react-icons/io5";


import NavigationServer from "../Navigation/NavigatonServer";

import "./SingleClass.scss"

export default function SingleClassComp({ Class }) {

    return (
        <>
            <section className="SingleClassSection">
                <div key={Class.id}>

                    {/* image */}
                    <div className="SingleClassImageBox">
                        <img src={Class.asset?.url || '/images/placeholder.jpg'} alt={Class.className} />

                        {/* infomation over image */}
                        <div className="SingleClassInfoBox">
                            <span>
                                <Link href="/classes"><FaArrowLeft size={30} color="#999" /></Link>
                                <NavigationServer />
                            </span>
                            <h1>{Class.className}</h1>
                            <div className="ratingSingleClass">
                                <div className="SingleClassInfoStars">
                                    <p><IoStarSharp /></p>
                                    <p><IoStarSharp /></p>
                                    <p><IoStarSharp /></p>
                                    <p><IoStarSharp /></p>
                                    <p><IoStarSharp /></p>
                                </div>
                                <button>RATE</button>
                            </div>
                        </div>

                    </div>

                    {/* infomation under image */}
                    <div className="UnderSingleClassImage">
                        <h3>{Class.classDay} - {Class.classTime}</h3>
                        <p>{Class.classDescription}</p>
                        <h2>Trainer</h2>
                        <div className="SingleClassTrainerBox">
                            <p className="SingleClassPfp"><IoMdPerson size={30} /></p>
                            <p>{Class.trainer.trainerName}</p>
                        </div>
                        <div className="SignUpBtn">
                            <button>SIGN UP</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}