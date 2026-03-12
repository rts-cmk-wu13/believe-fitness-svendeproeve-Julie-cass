"use client";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { FaSearch } from "react-icons/fa";


export default function SearchBar() {
    const searchParams = useSearchParams()
    const pathName = usePathname()
    const router = useRouter()
    const query = searchParams.get("query")

    console.log(query);


    const handleChange = (e) => {
        router.push(`${pathName}?query=${e.target.value}`)

    }

    return (
        <form className="SearchForm">
            <div className="SearchInputWrapper">
                 <FaSearch
          style={{ position: "absolute", left: "0.75rem", top: "50%", transform: "translateY(-50%)", color: "#9E9E9E",  pointerEvents: "none", fontSize: "1rem",
          }}
        />
            <input onChange={handleChange} type="search" name="query" placeholder="Search classes"/>
          </div>
        </form>
    )
}