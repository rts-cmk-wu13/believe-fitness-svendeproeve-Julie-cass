import MakeUserForm from "@/components/MakeUser";



export default function MakeUserPage() {

    return (
        <>
            <main>
                <div className="MakeUserTitleContainer">
                    <h1>Believe <span className="titleSecondLine"> Fitness</span></h1>
                    <div>
                        
                        <div className="secondLogoTitle">
                      <div className="Line"></div>  <h2>Train like a pro</h2>
                      </div>
                    </div>

                </div>
                <section className="MakeUserPageSec">
                <h2>Sign up as a new user</h2>
                    <MakeUserForm />
                </section>
            </main>
        </>
    )
}