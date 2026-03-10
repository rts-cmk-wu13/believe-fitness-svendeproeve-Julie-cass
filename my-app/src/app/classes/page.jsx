import AllClasses from "@/components/ClassesPages/AllClasses";
import NavigationServer from "@/components/Navigation/NavigatonServer";
import { getAllClasses } from "@/lib/classes";


export default async function ClassesPage() {

    const Classes = await getAllClasses();
    console.log(Classes);

    return (
        <>
            <div className="PageHeaderMenu">
                <h1 className="ClassesPageTitle">Popular classes</h1>
                <NavigationServer />
            </div>

            <AllClasses Classes={Classes} />

        </>
    )
}