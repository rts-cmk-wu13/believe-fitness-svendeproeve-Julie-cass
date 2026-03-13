"use server"

import { z } from "zod"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

const registerSchema = z.object({
    userFirstName: z.string().min(1, "Indtast fornavn"),
    userLastName: z.string().min(1, "Indtast efternavn"),
    username: z.string().min(1, "Indtast et brugernavn"),
    password: z.string().min(1, "Indtast et password"),
    confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
    message: "Password matcher ikke",
    path: ["confirmPassword"]
})


export async function MakeUser(prevState, formData) {

    const formValues = {
        userFirstName: formData.get("userFirstName"),
        userLastName: formData.get("userLastName"),
        username: formData.get("username"),
        password: formData.get("password"),
        confirmPassword: formData.get("confirmPassword"),
    }

    console.log("Form values:", formValues)

    const result = registerSchema.safeParse(formValues)

    if (!result.success) {
        return {
            values: formValues,
            errors: z.flattenError(result.error).fieldErrors
        }
    }

    const response = await fetch("http://localhost:4000/api/v1/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: formValues.username,
            password: formValues.password,
            userFirstName: formValues.userFirstName,
            userLastName: formValues.userLastName
        })
    })

    if (!response.ok) {
        return {
            values: formValues,
            errors: { form: ["Kunne ikke oprette bruger"] }
        }
    }

    const data = await response.json()

    const cookieStore = await cookies()

    cookieStore.set("authToken", data.accessToken)
    cookieStore.set("username", data.username)

    redirect("/login")
}