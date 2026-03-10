import Image from "next/image";
import "./HomeNews.scss"

export default function HomeNewsComp(){

const NewsContent = [
    {Title:"New Member Lounge Opens", icon: "/images/News1.png", content: "Believe Fitness unveils a cozy member lounge with fresh juices, recovery seating, and free Wi-Fi. It's the perfect spot to relax before or after your workout." },
    {Title:"Early-Morning Bootcamp Returns", icon: "/images/News2.png", content: "Believe Fitness brings back its energizing sunrise bootcamp, inviting members to jumpstart their mornings with high-intensity workouts, structured coaching, and a supportive group atmosphere designed to boost consistency, stamina, and overall performance." },
    { Title:"Spring Challenge: Train for 30 Days", icon: "/images/News3.png", content: "Believe Fitness relaunches a motivating 30-day challenge encouraging members to join daily workouts, track progress, and compete for prizes while building healthier habits and discipline." },
    { Title:"Tech Upgrade: Smart Check-In", icon: "/images/News4.png", content: "The center introduces a new smart check-in system using QR codes. It speeds up entry, reduces waiting time, and improves the overall experience for all members." }
  ];

    return(
        <>
        <section className="HomeNewsSection">
            <h2>News</h2>

             {NewsContent.map((News, index) => (
        <div className="HomeNewsContainer" key={index}>
       <h3 className="NewsTitle">{News.Title}</h3>
              <Image src={News.icon} alt="News PIcture"
               width={400} height={250} className="NewsImage" />
             <p>{News.content}</p>
        </div>
      ))}
        </section>
        </>
    )
}