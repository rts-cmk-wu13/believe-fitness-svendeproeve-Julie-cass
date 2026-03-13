"use client"

import { useActionState } from "react"
import { MakeUser } from "./action"

import "./MakeUser.scss"


const initialState = {
    values: {
        userFirstName: "",
        userLastName: "",
        username: "",
        password: "",
        confirmPassword: ""
    },
    errors: undefined
}

export default function MakeUserForm() {

    const [state, formAction, isPending] = useActionState(MakeUser, initialState)

    return (
        <form className="MakeUserForm" action={formAction} noValidate>

            <div className="MakeUserErrorBox">
                <p className="error">{state.errors?.userFirstName?.[0]}</p>
                <p className="error">{state.errors?.username?.[0]}</p>
                <p className="error">{state.errors?.password?.[0]}</p>
                <p className="error">{state.errors?.confirmPassword?.[0]}</p>
            </div>

            {/* First name */}
            <div className="MakeUserInputBox">
                <input className="MakeUserInput" placeholder="Enter your name..." type="text" name="userFirstName"
                />
            </div>

            {/* Last name */}
            <div className="MakeUserInputBox">
                <input className="MakeUserInput" placeholder="Enter your Surname..." type="text" name="userLastName"
                />
            </div>

            {/* Username */}
            <div className="MakeUserInputBox">
                <input className="MakeUserInput" placeholder="Enter your email..." type="text" name="username"
                />
            </div>

            {/* Password */}
            <div className="MakeUserInputBox">
                <input className="MakeUserInput" placeholder="Enter your password..." type="password" name="password"
                />
            </div>

            {/* Confirm password */}
            <div className="MakeUserInputBox">
                <input className="MakeUserInput" placeholder="Repeat your password..." type="password" name="confirmPassword"
                />
            </div>

            <button className="MakeUserSubmitBtn" type="submit" disabled={isPending}>
                {isPending ? "SIGNING UP..." : "SIGN UP"}
            </button>

        </form>
    )
}