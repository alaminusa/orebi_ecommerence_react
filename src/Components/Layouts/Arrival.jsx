import Container from '../Container'
import Heading from '../Heading'
import Product from '../Product'
import Clock from "../../assets/clock.png"
import Watch from "../../assets/watch.png"
import Busket from "../../assets/busket.png"
import Toy from "../../assets/toy.png"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Hat from "../../assets/hat.png"
import Table from "../../assets/table.png"
import Headphone from "../../assets/headphone.png"
import Sunglass from "../../assets/sunglass.png"

const Arrival = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true
  };

  return (
    <section className='pb-[118px]'>
        <Container>
          {/* New Arrival part Header start */}
            <Heading text="New Arrivals" className="text-[39px] text-primaryColor font-dm font-bold pb-[48px]" as="h2"/>
            {/* New Arrival part Header start */}

            {/* Slider start */}
            <Slider {...settings}>
              {/* New Arrival part Product part start */}
              <div>
                {/* Product Component */}
                <Product 
                  imageUrl={Clock}
                  href="#"
                  tag="New"
                  title="Basic Crew Neck Tee"
                  price="$44.00"
                  className="w-full"
                />
              </div>
              <div>
                <Product 
                  imageUrl={Watch}
                  href="#"
                  tag="New"
                  title="Basic Crew Neck Tee"
                  price="$44.00"
                  className="w-full"
                />
             </div>
             <div>
              <Product 
                  imageUrl={Busket}
                  href="#"
                  tag="New"
                  title="Basic Crew Neck Tee"
                  price="$44.00"
                  className="w-full"
              />
             </div>
             <div>
              <Product 
                  imageUrl={Toy}
                  href="#"
                  tag="New"
                  title="Basic Crew Neck Tee"
                  price="$44.00"
                  className="w-full"
              />
             </div>
            <div>
              <Product 
                  imageUrl={Hat}
                  href="#"
                  tag="New"
                  title="Basic Crew Neck Tee"
                  price="$44.00"
                  className="w-full"
                />
            </div>
            <div>
              <Product 
                  imageUrl={Table}
                  href="#"
                  tag="New"
                  title="Basic Crew Neck Tee"
                  price="$44.00"
                  className="w-full"
              />
            </div>
            <div>
              <Product 
                imageUrl={Headphone}
                href="#"
                tag="New"
                title="Basic Crew Neck Tee"
                price="$44.00"
                className="w-full"
              />
            </div>
            <div>
              <Product
                imageUrl={Sunglass}
                href="#"
                tag="New"
                title="Basic Crew Neck Tee"
                price="$44.00"
                className="w-full"
              />
            </div>
            {/* New Arrival part Product part end */}
          </Slider>
          {/* Slider end */}
        </Container>
    </section>
  )
}

export default Arrival