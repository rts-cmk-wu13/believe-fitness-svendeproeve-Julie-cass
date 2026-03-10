"use client"
 
import { useState } from "react"
import { z } from "zod/v4"
import "./contactForm.scss"

const contactSchema = z.object({
    name: z.string().min(2, "Name is required"),
    email: z.email().min(1, "Email is required"),
    besked: z.string().min(1, "Message is required")
})

export default function ContactForm() {
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState(false)
 
    function handleSubmit (event) {
        event.preventDefault();
 
        const form = event.target
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());
        console.log("Form submitted:", data);
 
        const result = contactSchema.safeParse(data)
 
        if (!result.success) {
            const errors = z.treeifyError(result.error)
            console.log(errors)
            setErrors(errors.properties)
            setSuccess(false)
        } else {
            setErrors({})
            setSuccess("Tak for din besked")
            form.reset()
        }
 
    }
   
    return (
        <>
            <section className="ContactFPcontainer">
                <h2 className="ContactFPtitle">Contact us</h2>
                <p>Ask us anything about Believe Fitness!</p>
                <div className="ContactFPbox">
                    <form className="ContactFPform" method="post" onSubmit={handleSubmit}>

                        <div className="ContactFPinputbox">
                            <input className="ContactFPinput" type="text" name="name" placeholder="Enter your name..." />
                        </div>

                        <div className="ContactFPinputbox">
                            <input className="ContactFPinput" type="text" name="email" placeholder="Enter your email..." />
                        </div>
                        <div className="ContactFPinputbox">
                            <input className="ContactFPinput messageInput" type="textArea" name="message" placeholder="Enter your Message..." />
                        </div>
                        <button className="ContactFPbtn" type="submit">Send Message</button>
                    </form>

                </div>
            </section>
        </>
    )
}