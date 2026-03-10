"use client";

import Link from "next/link";
import { HiMenuAlt3 } from "react-icons/hi";
import { useState } from "react";
import LogoutButton from "../logout-button";

import "./Navigation.scss";

export default function Navigation({ loggedIn }) {
    const [isOpen, setIsOpen] = useState(false);

    const openNav = () => setIsOpen(true);
    const closeNav = () => setIsOpen(false);

    return (
        <>
            <div className={`overlay ${isOpen ? "open" : ""}`} id="myNav">
                <button className="closeBtn" onClick={closeNav}>
                    &times;
                </button>

                <nav className="overlay-content">
                    <Link href="/Home">Home</Link>
                    <Link href="/classes">Popular classes</Link>
                    <Link href="/Search">Search</Link>
                    <Link href="/profile">My Profile</Link>

                    <LogoutButton loggedIn={loggedIn} />
                </nav>
            </div>

            <span className="openBtn" onClick={openNav}>
               <p><HiMenuAlt3 size={30} color="#999"/></p> 
            </span>
        </>
    );
}