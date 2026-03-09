"use client";


import Link from "next/link"
import { useState } from "react";

import "./Navigation.scss"

export default function Navigation() {
    const [isOpen, setIsOpen] = useState()

    const openNav = () => setIsOpen(true);
    const closeNav = () => setIsOpen(false);


    return (
        <>
            <div
                className=
                {`overlay ${isOpen ? 'open' : ''}`}
                id="myNav">

                <button
                    className="closeBtn" onClick={closeNav}>
                    &times;
                </button>

                <div className="overlay-content">
                    <Link href="/">Home</Link>
                    <Link href="/">Popular classes</Link>
                    <Link href="/">Search</Link>
                    <Link href="/">My Profile</Link>
                    <Link href="/">Log out</Link>
                </div>

            </div>
            <span className="openBtn" onClick={openNav}>
                open
            </span>
        </>
    )
}