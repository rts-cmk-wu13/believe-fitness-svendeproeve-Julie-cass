import CarouselCards from "./CarouselCard";


export default function Testimonials({ testimonial }) {
  return (
   <>
   <section className="TestimonialSecContainer">
    <div className="TestimonialDivBox">
   <h2 className="testmonialTitle">A word from <span className="titleSecondLine">other Believers</span></h2>

   <CarouselCards testimonial={testimonial}  />
  
    </div>
    </section>
    </>
  );
}