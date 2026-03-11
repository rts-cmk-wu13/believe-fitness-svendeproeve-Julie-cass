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
            <section className="PfpClassSection">
                <h2>Tilmeldte hold</h2>
                {user.classes.map(C => (
                    <div className="PfpClassContainer" key={C.id}>
                        <h3>{C.className}</h3>
                        <p>{C.classDay} - {C.classTime}</p>
                        <div className="PfpClassBtnContainer">
                            <Link className="PfpLinkToClass" href={`/classes/${C.id}`}>SHOW CLASS</Link>
                            <button className="PfpLeaveClass">LEAVE</button>
                        </div>
                    </div>
                ))}
            </section>
        </>
    );
}