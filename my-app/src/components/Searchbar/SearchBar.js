"use client";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

//navn
//dag
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
            <input onChange={handleChange} type="search" name="query" />
            <button type="submit">search</button>
        </form>
    )
}