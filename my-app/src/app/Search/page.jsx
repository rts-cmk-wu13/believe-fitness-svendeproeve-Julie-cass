import NavigationServer from "@/components/Navigation/NavigatonServer";

import SearchBar from "@/components/Searchbar/SearchBar";
import SearchContainer from "@/components/Searchbar/SearchContainer";

import { getAllClasses } from "@/lib/classes";
import { getAllTrainers } from "@/lib/trainers";

import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";

export default async function Searchpage({ searchParams }) {
  const { query } = await searchParams;
  const Search = await getAllClasses();
  const Trainer = await getAllTrainers();


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
        <span id="Search" className="PageHeaderMenu">

        <Link href="/classes" className="back-link">
          <FaArrowLeft size={30} color="#999" />
          <h1>Search</h1>
        </Link>
        
        <NavigationServer />
      </span>


        <SearchBar />
      
        <SearchContainer Trainer={Trainer} Classes={filteredClasses} />
      </main>
    </>
  );
}