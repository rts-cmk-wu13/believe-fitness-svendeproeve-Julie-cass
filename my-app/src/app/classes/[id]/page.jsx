

import { getClassById } from "@/lib/classes";
import SingleClassComp from "@/components/ClassesPages/SingleClass";

export default async function SingleClassPage({ params }) {
    const { id } = await params;
    const Class = await getClassById(id);

    return (
        <>
            <main>
              

                <SingleClassComp Class={Class} />
            </main>
        </>
    )
}