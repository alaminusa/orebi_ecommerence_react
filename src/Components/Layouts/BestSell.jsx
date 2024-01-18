import Container from '../Container'
import Heading from '../Heading'
import Flex from '../Flex'
import Product from '../Product'
import Pot from "../../assets/pot.png"
import Bagone from "../../assets/bagone.png"
import Itemone from "../../assets/itemone.png"
import Bagtwo from "../../assets/bagtwo.png"
import Hat from "../../assets/hat.png"
import Table from "../../assets/table.png"
import Headphone from "../../assets/headphone.png"
import Sunglass from "../../assets/sunglass.png"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const BestSell = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true
  };
  return (
    <section className='pb-[130px]'>
    <Container>
        <Heading text="Our Bestsellers" className="text-[39px] text-primaryColor font-dm font-bold pb-[48px]" as="h2"/>
        <Slider {...settings}>
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
          <div>
          <Product 
                imageUrl={Pot}
                href="#"
                tag="New"
                title="Basic Crew Neck Tee"
                price="$44.00"
                className="w-full"
            />
          </div>
          <div>
          <Product 
                imageUrl={Bagone}
                href="#"
                tag="New"
                title="Basic Crew Neck Tee"
                price="$44.00"
                className="w-full"
            />
          </div>
          <div>
          <Product 
                imageUrl={Itemone}
                href="#"
                tag="New"
                title="Basic Crew Neck Tee"
                price="$44.00"
                className="w-full"
            />
          </div>
          <div>
          <Product 
                imageUrl={Bagtwo}
                href="#"
                tag="New"
                title="Basic Crew Neck Tee"
                price="$44.00"
                className="w-full"
            />
          </div>  
        </Slider>
    </Container>
    </section>
  )
}

export default BestSell