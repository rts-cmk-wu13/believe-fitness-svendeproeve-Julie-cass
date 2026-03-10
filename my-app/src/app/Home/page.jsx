import Testimonials from "@/components/Carousel/Testimonial";
import HomeHeader from "@/components/HomeHeader";
import Navigation from "@/components/Navigation/Navigation";

import { getTestimonials } from "@/lib/testimonial";

export default async function Home() {
      const testimonial = await getTestimonials()
  
    return(
        <>
<main>
    <Navigation />
    <HomeHeader />
    <Testimonials testimonial={testimonial}/>         
</main>
        </>
    )
}