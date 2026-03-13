import Link from "next/link";
import { cookies } from "next/headers";

import { FaArrowLeft } from "react-icons/fa";
import CreateClassForm from "@/components/NewClassForm";
import NavigationServer from "@/components/Navigation/NavigatonServer";

import { getAllTrainers } from "@/lib/trainers";

export default async function MakeNewClassPage() {
    const cookieStore = await cookies()
    const role = cookieStore.get("role")?.value
    const trainers = await getAllTrainers()

    
    return role !== "admin" ? (
        <>
            <p>you can't make a new class unless admin</p>
            <Link href={"/login"}>Go back to login if you're admin</Link>
        </>
    ) : (
        <>
            <span id="Search" className="PageHeaderMenu">

                <Link href="/profile" className="back-link">
                    <FaArrowLeft size={30} color="#999" />
                </Link>

                <NavigationServer />
            </span>

            <CreateClassForm trainers={trainers} />
        </>
    )

}