import NavigationServer from "@/components/Navigation/NavigatonServer";

export default function Searchpage() {
  

/*
 const { query } = await searchParams
    console.log(query);

const filteredActivities = query
  ? ACTIVITY.filter(activity =>
      activity.name.toLowerCase().includes(query.toLowerCase()) ||
      activity.weekday.toLowerCase().includes(query.toLowerCase())
    )
  : ACTIVITY; */

console.log(filteredActivities);

    return (
        <>
            <main>
                <NavigationServer />
          <h1>bonk</h1>
            </main>
        </>
    )
}