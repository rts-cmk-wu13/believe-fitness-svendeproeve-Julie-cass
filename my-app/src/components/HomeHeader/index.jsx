import Newsletter from "./newsletter";


export default function HomeHeader(){

    return(
        <>
        <section>
            {/* put backgorun imageon section */}
            <div>
                <h1>Welcome to<span className="titleSecondLine">Belive Fitness</span></h1>

                <div>
                    <button>classes</button>
                    <button>Log in</button>
                </div>
            </div>

            <Newsletter />
        </section>
        </>
    )
}