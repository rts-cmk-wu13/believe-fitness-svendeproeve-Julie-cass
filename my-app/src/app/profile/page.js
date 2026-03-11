import NavigationServer from "@/components/Navigation/NavigatonServer";

import "./profile.scss"

import { CardDashBoard } from "@/components/Profilecards/cards";
import { getUsersById } from "@/lib/user";
import { cookies } from "next/headers";

import { IoPerson } from "react-icons/io5";

export default async function Profilepage() {

    const cookieStore = await cookies()
    const userId = cookieStore.get('username')
    const user = await getUsersById(userId.value)


    return (
        <>
            <main>
                <div className="PageHeaderMenu">
             <h1 className="ProfilePageTitle">My Profile</h1>
                <NavigationServer />
                </div>
                <section>
                    <figure className="ProfileContainer">

                        <div className="ProfileNameBox">
                            <div className="ProfilePfp">
                            <p><IoPerson size={40} /></p>
                            </div>
                            <div className="ProfileUserInfoBox">
                                <h2 className="ProfileName">{user.userFirstName} {user.userLastName}</h2>
                                <p>{user.role}</p>
                            </div>
                        </div>

                        <div className="CardDashBoardContainer">
                            <CardDashBoard user={user} />
                        </div>
                    </figure>
                </section>
            </main>
        </>
    )
}