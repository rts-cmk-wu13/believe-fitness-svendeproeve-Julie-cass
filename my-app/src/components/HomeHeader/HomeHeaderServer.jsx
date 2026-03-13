"use server";

import HomeHeader from ".";
import { isUserLoggedIn } from "../logout-button/action";


export default async function HomeHeaderServer() {
    const loggedIn = await isUserLoggedIn();

    return (
    <>
<HomeHeader  loggedIn={loggedIn}  />
    
    </>
);
}