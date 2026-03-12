import Link from "next/link";
import { cookies } from "next/headers";

import { FaArrowLeft } from "react-icons/fa";
import CreateClassForm from "@/components/NewClassForm";
import NavigationServer from "@/components/Navigation/NavigatonServer";
import { getUsersById } from "@/lib/user";

export default async function MakeNewClassPage() {
    const cookieStore = await cookies()
    const role = cookieStore.get("role")?.value
    const userId = cookieStore.get("userId")?.value
    const user = getUsersById()

    return role !== "admin" ? (
        <>
            <p>you can't make a new class unless admin</p>
            <Link href={"/login"}>Go back to login if you're admin</Link>
        </>
    ) : (
        <>
            <span id="Search" className="PageHeaderMenu">

                <Link href="/classes" className="back-link">
                    <FaArrowLeft size={30} color="#999" />
                </Link>

                <NavigationServer />
            </span>

            <CreateClassForm userId={userId} user={user} />
        </>
    )

}