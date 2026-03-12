"use client"

import SearchBox from ".";

import "./SearchBox.scss"
import TrainerSearchComp from "./SearchTrainers";
export default function SearchContainer({ Classes, Trainer }) {


    return (
        <>
        <section className="SearchPageSecContainer">
      <SearchBox Classes={Classes}/>

      <TrainerSearchComp Trainer={Trainer}/>
       </section>
        </>
    )
}