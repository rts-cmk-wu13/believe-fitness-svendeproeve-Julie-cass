import LoginForm from "@/components/loginForm/LoginForm";

export default function LoginPage() {
    return (
        <>
            <main>
                <section className="LoginPageSec">
                    <h1 className="loginTitle">Log ind</h1>

                    <LoginForm />

                </section>
            </main>
        </>
    )
}