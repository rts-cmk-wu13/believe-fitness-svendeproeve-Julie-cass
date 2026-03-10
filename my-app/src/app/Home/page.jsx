import Testimonials from "@/components/Carousel/Testimonial";
import HomeHeader from "@/components/HomeHeader";
import Navigation from "@/components/Navigation/Navigation";

import "./Home.scss"
import { getTestimonials } from "@/lib/testimonial";
import Newsletter from "@/components/newsletter";
import HomeNewsComp from "@/components/HomeNews";
import ContactForm from "@/components/contact";
import NavigationServer from "@/components/Navigation/NavigatonServer";

export default async function Home() {
    const testimonial = await getTestimonials()

    return (
        <>
            <main>
                <div className="BackgrounImageHeaderHome">
                    <div className="PageHeaderMenu">

                        <HomeHeader />
                        <NavigationServer />
                    </div>
                </div>

                <HomeNewsComp />
                <Newsletter />

                <Testimonials testimonial={testimonial} />

                <ContactForm />
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