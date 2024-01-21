
import pic16 from '../../assets/img3.png'
import pic from '../../assets/img4.png'
import pic2 from '../../assets/img04.jpg'
import pic1 from "../../assets/img (124).jpg"
import pic3 from '../../assets/img (125).jpg'
import pic11 from '../../assets/img.webp'
import pic5 from '../../assets/img5.png'
import pic6 from '../../assets/img6.png'
import pic7 from '../../assets/img010.webp'
import pic8 from '../../assets/img011.webp'
import pic9 from '../../assets/img012.webp'
import pic10 from '../../assets/img013.jpg'
import pic4 from '../../assets/img7.png'
import pic12 from '../../assets/img14.jpg'
import pic13 from '../../assets/img16.webp'
import pic14 from '../../assets/img15.webp'
import pic15 from '../../assets/img17.webp'








import React from "react";
import { TECarousel, TECarouselItem } from "tw-elements-react";

export default function CarouselWithControls(): JSX.Element {
  return (
    <div className='mt-20'>
      <TECarousel showControls ride="carousel">
        <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
          <TECarouselItem
            itemID={1}
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <div className="flex flex-grow">
            <img
              src={pic12}
              className="h-[250px] w-[320px] lg:w-[341px] xs:w-[190px] xl:h-[250px] xl:w-[360px] sm:w-full"
              alt="..."
            />
            <img
              src={pic16}
              className="h-[250px] w-[320px] lg:w-[341px] xs:w-[190px] xl:h-[300px] xl:w-[360px] sm:hidden "
              alt="..."
            />
            <img
              src={pic2}
              className="h-[250px] w-[320px] lg:w-[341px] xs:w-[190px] xl:h-[300px] xl:w-[360px] "
              alt="..."
            />
            <img
              src={pic3}
              className="h-[250px] w-[320px] lg:hidden xl:h-[300px] xl:w-[360px]"
              alt="..."
            />
            </div>
            
          </TECarouselItem>
          <TECarouselItem
            itemID={2}
            className="relative float-left hidden -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <div className="flex  flex-1">
            <img
              src={pic4}
              className="h-[250px] w-[320px] lg:w-[341px] xs:w-[190px] xl:h-[300px] xl:w-[360px] sm:w-full "
              alt="..."
            />
            <img
              src={pic}
              className="h-[250px] w-[320px] lg:w-[341px] xs:w-[190px] xl:h-[300px] xl:w-[360px] sm:hidden "
              alt="..."
            />
            <img
              src={pic6}
              className="h-[250px] w-[320px] lg:w-[341px] xs:w-[190px] xl:h-[300px] xl:w-[360px] sm:hidden"
              alt="..."
            />
            <img
              src={pic7}
              className="h-[250px] lg:hidden w-[320px] xl:h-[300px] xl:w-[360px] sm:hidden"
              alt="..."
            />
            </div>
          </TECarouselItem>
          <TECarouselItem
            itemID={3}
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <div className="flex flex-grow">
            <img
              src={pic5}
              className="h-[250px] w-[320px] lg:w-[341px] xs:w-[190px] xl:h-[300px] xl:w-[360px] sm:w-full"
              alt="..."
            />
            <img
              src={pic10}
              className="h-[250px] w-[320px] lg:w-[341px] xs:w-[190px] xl:h-[300px] xl:w-[360px] sm:hidden "
              alt="..."
            />
            <img
              src={pic9}
              className="h-[250px] w-[320px] lg:w-[341px] xs:w-[190px] xl:h-[300px] xl:w-[360px] sm:hidden "
              alt="..."
            />
            <img
              src={pic11}
              className="h-[250px] w-[320px] lg:hidden xl:h-[300px] xl:w-[360px] sm:hidden "
              alt="..."
            />
            </div>
          </TECarouselItem>
          <TECarouselItem
            itemID={4}
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <div className="flex flex-grow">
            <img
              src={pic8}
              className="h-[250px] w-[320px] lg:w-[341px] xs:w-[190px] xl:h-[300px] xl:w-[360px] sm:w-full "
              alt="..."
            />
            <img
              src={pic15}
              className="h-[250px] w-[320px] lg:w-[341px] xs:w-[190px] xl:h-[300px] xl:w-[360px] sm:hidden "
              alt="..."
            />
            <img
              src={pic14}
              className="h-[250px] w-[320px] lg:w-[341px] xs:w-[190px] xl:h-[300px] xl:w-[360px] sm:hidden "
              alt="..."
            />
            <img
              src={pic1}
              className="h-[250px] w-[320px] lg:hidden xl:h-[300px] xl:w-[360px] sm:hidden"
              alt="..."
            />
            </div>
          </TECarouselItem>
        </div>
      </TECarousel>
    </div>
  );
}