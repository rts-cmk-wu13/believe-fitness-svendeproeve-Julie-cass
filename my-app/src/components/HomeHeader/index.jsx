import "./HomeHeader.scss"
import Link from "next/link";

export default function HomeHeader(){

    return(
        <>
        <section className="HomeHeaderSection">
            {/* put backgorun imageon section */}
            <div className="HomeHeaderContent">
                <span className="TitleContainerHomeHeader">
                <h1>Welcome to<span className="titleSecondLine">Belive Fitness</span></h1>
</span>
                <div className="HomeHeaderBtnContainer">
                    <button><Link href="/classes">Classes</Link></button>
                    <button><Link href="/login">Log in</Link></button>
                </div>
            </div>

        </section>
        </>
    )
}