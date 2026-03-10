"use client"
import { useActionState } from "react"
import SignUpNewsAction from "./action"

import "./newsletter.scss"

export default function Newsletter() {
    const [formState, formAction, isPending] = useActionState(SignUpNewsAction, {})

    return (
        <section className="newsletterSecContainer">
            <h2 className="newsletterTitle">Nyhedsbrev</h2>
            <p className="newsletterText">Få direkte besked når vi har sæsonstart
                eller afholder arrangementer.</p>

          
                <form className="newsletterForm" action={formAction}>
                    <div className="newsletterInputBox">
                        <input className="newsletterInput" type="text" name="email" placeholder="Enter your email..." />
                    </div>
                    <button className="newsletterSubminBtn" type="submit">SIGN UP</button>
                </form>
        
        </section>
    )
}

