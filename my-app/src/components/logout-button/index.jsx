"use client";

import LogoutAction from "./action";
import Link from "next/link";

export default function LogoutButton({ loggedIn }) {

    if (!loggedIn) {
        return <Link href="/login">Log ind</Link>;
    }

    return (
        <form action={LogoutAction}>
            <button type="submit">Log ud</button>
        </form>
    );
}