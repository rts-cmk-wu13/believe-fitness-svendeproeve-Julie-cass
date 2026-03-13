import LoginForm from "@/components/loginForm/LoginForm";
import Link from "next/link";
export default function LoginPage() {
    return (
        <>
            <main>
                <div className="LoginTitleContainer">
                  <h1>Believe <span className="titleSecondLine"> Fitness</span></h1>
                    <div>
                        
                        <div className="secondLogoTitle">
                      <div className="Line"></div>  <h2>Train like a pro</h2>
                      </div>
                    </div>

                </div>
                <section className="LoginPageSec">
                    <h1 className="loginTitle">Log in with your credentials</h1>

                    <LoginForm />

                    <div>
                        <p>Are You not yet a Believer? <span className="titleSecondLine">
                            <Link href="/MakeUser">Sign up here</Link> to start training like a pro.</span> </p>
                    </div>
                </section>
            </main>
        </>
    )
}