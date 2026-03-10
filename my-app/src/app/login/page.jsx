import LoginForm from "@/components/loginForm/LoginForm";

export default function LoginPage() {
    return (
        <>
            <main>
                <div className="LoginTitleContainer">
                    <h1>Believe <span className="titleSecondLine"> Fitness</span></h1>
                    <div>
                        <span></span>
                        <h2>Train like a pro</h2>
                    </div>

                </div>
                <section className="LoginPageSec">
                    <h1 className="loginTitle">Log in with your credentials</h1>

                    <LoginForm />

                </section>
            </main>
        </>
    )
}