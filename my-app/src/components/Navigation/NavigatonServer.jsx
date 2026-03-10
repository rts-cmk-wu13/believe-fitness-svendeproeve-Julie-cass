"use server";

import { isUserLoggedIn } from "../logout-button/action";
import Navigation from "./Navigation";

export default async function NavigationServer() {
    const loggedIn = await isUserLoggedIn();

    return (
    <>

    <Navigation  loggedIn={loggedIn} />
    </>
);
}