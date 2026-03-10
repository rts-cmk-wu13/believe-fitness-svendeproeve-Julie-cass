"use client";

import "./Testimonial.scss"
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
 
export default function CarouselCards({ testimonial = [] }){
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

  const goToPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const goToNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <>
      <div className="testimonial">


        <div className="testimonial_viewport" ref={emblaRef}>

          <div className="testimonial_container">

            {testimonial.map((T, index) => (
              <div className="testimonial_slide" key={index}>
                <p className="testimonialContent" key={T.id}>{T.text}</p>
                <h3 className="testmonialName">{T.name}</h3>
                <p className="testmonialOccupation">{T.occupation}</p>

              </div>
            ))}

          </div>


        </div>
        <div className="testimonialBtnBox">
          <button className="testimonial_prev" onClick={goToPrev}>
            <IoIosArrowBack />
          </button>
          <button className="testimonial_next" onClick={goToNext}>
            <IoIosArrowForward />
          </button>
        </div>
      </div>
    </>
  );
}