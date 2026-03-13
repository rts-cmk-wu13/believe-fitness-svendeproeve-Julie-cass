"use client";

import LogoutAction from "./action";
import Link from "next/link";

export default function LogoutButton({ loggedIn }) {

    if (!loggedIn) {
        return <button><Link href="/login">Log ind</Link></button>;
    }

    return (
        <form action={LogoutAction}>
            <button type="submit">Log ud</button>
        </form>
    );
}