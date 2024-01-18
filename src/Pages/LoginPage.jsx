import Container from '../Components/Container'
import Heading from '../Components/Heading'
import Label from '../Components/Label'
import Input from '../Components/Input'
import Button from '../Components/Button'
import Paragraph from '../Components/Paragraph'
import Flex from '../Components/Flex'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Breadcrumb from '../Components/Breadcrumb'
// import { FaRegSquare } from "react-icons/fa";

const LoginPage = () => {
    let [all, setAll] = useState([])
    useEffect(()=>{
      async function all(){
         let data = await axios.get("https://restcountries.com/v3.1/all");
         setAll(data.data)
         }
         all()
       },[]);

       let bread = window.location.pathname.replace("/", "").replace("-", " ");
   
  return (
    <>
    <Container>
        <Heading  text="Login" as="h3" className="text-5xl font-bold font-dm text-primaryColor pt-32"/>
        <Link to="/">Home ><Breadcrumb>{bread}</Breadcrumb></Link>
        <Paragraph text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the." className="text-secondaryColor text-base font-dm font-normal pt-[130px] pr-[950px] border-b border-borderBotColor pb-16"/>
        <Heading text="Returning Customer" as="h4" className="text-4xl font-bold font-dm text-primaryColor pt-[57px] pb-10"/>
    
        <Flex>
        <div className='w-[508px]'>
           <Label labelName="Email address" className="pb-2.5"/>
           <Input inType="email" inPh="company@domain.com" className="pb-4"/>
        </div>
        <div className='w-[508px]'>
           <Label labelName="Password" className="pb-2.5"/>
           <Input inType="password" inPh="Password" className="pb-4"/>
        </div>
        </Flex>
        <Button text="Log in" className=" bg-white text-center py-4 px-20 text-primaryColortext-sm font-dm font-bold border border-black hover:bg-primaryColor hover:text-white mt-12 mb-32"/>

        <Heading text="New Customer" as="h4" className="text-4xl font-bold font-dm text-primaryColor pt-[57px]"/>
       
        <Paragraph text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the." className="text-secondaryColor text-base font-dm font-normal pt-7 pr-[950px] border-b border-borderBotColor pb-16"/>

         <Button text="Continue" className=" bg-white text-center py-4 px-20 text-primaryColortext-sm font-dm font-bold border border-black hover:bg-primaryColor hover:text-white mt-12 mb-32"/>
       
    </Container>
    </>
  )
}

export default LoginPage