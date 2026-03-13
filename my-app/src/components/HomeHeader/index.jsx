import LogoutButton from "../logout-button";
import "./HomeHeader.scss"
import Link from "next/link";

export default function HomeHeader({ loggedIn }){

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
                   <LogoutButton  loggedIn={loggedIn} />
                </div>
            </div>

        </section>
        </>
    )
}