import Testimonials from "@/components/Carousel/Testimonial";
import HomeHeader from "@/components/HomeHeader";
import Navigation from "@/components/Navigation/Navigation";

import "./Home.scss"
import { getTestimonials } from "@/lib/testimonial";
import Newsletter from "@/components/newsletter";
import HomeNewsComp from "@/components/HomeNews";

export default async function Home() {
    const testimonial = await getTestimonials()

    return (
        <>
            <main>
                <div className="BackgrounImageHeaderHome">
                <Navigation />
                <HomeHeader />
</div>
<HomeNewsComp />
                <Newsletter />

                <Testimonials testimonial={testimonial} />
            </main>
            <footer>
                <div>
                    <h2>Believe Fitness</h2>
                    <h3>Train like a pro</h3>
                    <p>Rabalderstræde 48 ‧ 4000 Roskilde<span className="titleSecondLine">hello@believe-fitness.com</span></p>
                </div>
            </footer>
        </>
    )
}