import NavigationServer from "@/components/Navigation/NavigatonServer";

import SearchBar from "@/components/Searchbar/SearchBar";
import SearchContainer from "@/components/Searchbar/SearchContainer";
import { getAllClasses } from "@/lib/classes";

import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
export default async function Searchpage({ searchParams }) {
  const { query } = await searchParams;
  const Search = await getAllClasses();


  const filteredClasses = query
    ? Search.filter(item =>
      (item.className).toLowerCase().includes(query.toLowerCase()) ||
      (item.classDay).toLowerCase().includes(query.toLowerCase()) ||
      (item.classDescription).toLowerCase().includes(query.toLowerCase()) ||
      (item.trainer.trainerName).toLowerCase().includes(query.toLowerCase())
    )
    : Search;
console.log("fileredclasses", filteredClasses);



 
 
  return (
    <>
      <main>
        <span>
          <Link href="/classes"><FaArrowLeft size={30} color="#999" /> Search</Link>
          <NavigationServer />
        </span>

        <SearchBar />
        <h2>Popular classes</h2>
      
        <SearchContainer Classes={filteredClasses} />

        <h2>Popular Trainers</h2>
      </main>
    </>
  );
}