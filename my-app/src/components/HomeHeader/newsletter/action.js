"use server"

import z, { success } from "zod";

const schema = z.object({
    email:z.string().min(1, "du skal udfylde dette felt"),

});

export default async function SignUpNewsAction(prevState, formData) {
   const email = formData.get("email");

   
const result = schema.safeParse({
    email
});

if(!result.success){
    return{
        success: false,
        values: {email},
        errors: z.flattenError(result.error).fieldErrors
    }
}

    const response = await fetch("http://localhost:4000/api/v1/newsletter", {
        method: "POST",
        body: formData
    });

    console.log("status", response.status);

    const data = await response.json();

    console.log("data", data);

    return {}
}