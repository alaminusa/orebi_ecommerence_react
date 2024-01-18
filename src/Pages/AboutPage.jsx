import Container from '../Components/Container'
import Heading from '../Components/Heading'
import Button from '../Components/Button'
import Flex from '../Components/Flex'
import Image from '../Components/Image'
import BlackTableClock from '../assets/BlackTableClock.png'
import TraditionalBusket from '../assets/TraditionalBusket.png'
import Paragraph from '../Components/Paragraph'
import { Link } from 'react-router-dom'
import Breadcrumb from '../Components/Breadcrumb'

const AboutPage = () => {
    
    let bread = window.location.pathname.replace("/", "").replace("-", " ");


  return (
    <>
    <Container>
        <Heading  text="About" as="h3" className="text-5xl font-bold font-dm text-primaryColor pt-32"/>
        <Link><Breadcrumb>{bread}</Breadcrumb></Link>
        
        <Flex className='justify-between'>
            <div className="relative">
                <Image src={BlackTableClock} alt="BlackTableClock.png" />
                <Button text="Our Brands" className="absolute left-[248px] bottom-[68px] bg-primaryColor text-center py-7 px-24 text-white
                 text-base font-dm font-bold"/>
            </div>
            <div className="relative">
                <Image src={TraditionalBusket} alt="TraditionalBusket.png" />
                <Button text="Our Stores" className="absolute left-[263px] bottom-[68px] bg-primaryColor text-center py-7 px-24 text-white
                 text-base font-dm font-bold"/>
            </div>
        </Flex>
        <Heading as="h2" text="Orebi is one of the world’s leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style." className="text-primaryColor text-[39px] font-dm font-normal leading-[52px] py-[112px]  tracking-wider"/>

        <Flex className='pb-[130px] justify-between'>
            <div className='w-[506px]'>
                <Heading as="h4" text="Our Vision" className="text-primaryColor text-[25px] font-dm font-bold leading-[36px] " />
                <Paragraph text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book." className="text-secondaryColor text-base leading-[30px] pt-3"/>
            </div>
            <div className='w-[506px]'>
                <Heading as="h4" text="Our Story" className="text-primaryColor text-[25px] font-dm font-bold leading-[36px] " />
                <Paragraph text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic." className="text-secondaryColor text-base leading-[30px] pt-3"/>
            </div>
            <div className='w-[506px]'>
                <Heading as="h4" text="Our Brands" className="text-primaryColor text-[25px] font-dm font-bold leading-[36px] " />
                <Paragraph text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley." className="text-secondaryColor text-base leading-[30px] pt-3"/>
            </div>
        </Flex>
     
        </Container>
    </>
  )
}

export default AboutPage