import { getUsersById } from "@/lib/user";
import { cookies } from "next/headers";
import Link from "next/link";
export default async function MemberCard() {
    const cookieStore = await cookies();
    const username = cookieStore.get("username")?.value;

    if (!username) return <p>Bruger ikke logget ind</p>;

    const user = await getUsersById(username);

    return (
        <>
            <section>
                <h2>Tilmeldte hold</h2>
                <Link href={"/NewClass"}>bonk</Link>
                {user.classes.map(C => (
                    <div key={C.id}>
                        <h3>{C.className}</h3>
                        <p>{C.classDay} - {C.classTime}</p>
                        <div>
                            <Link href={`/classes/${C.id}`}>SHOW CLASS</Link>
                            <button>LEAVE</button>
                        </div>
                    </div>
                ))}
            </section>
        </>
    );
}