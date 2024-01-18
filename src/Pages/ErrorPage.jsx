import Container from "../Components/Container"
import Heading from "../Components/Heading"
import Paragraph from "../Components/Paragraph"
import Flex from "../Components/Flex"
import Button from "../Components/Button"

import { FaSearch } from "react-icons/fa"
import { Link } from "react-router-dom"

const ErrorPage = () => {

  return (
    <>
    <Container>
    <Heading text="404" as="h2" className="text-[200px] font-dm font-bold text-primaryColor"/>
    <Paragraph className="text-base font-dm text-secondaryColor w-[644px] py-10" text="The page you were looking for couldn't be found. The page could be removed or you misspelled the word while searching for it. Maybe try a search?"/>
    <div className='w-[643px]'>
        <Flex className='items-center text-center justify-center'>
            <input type='text' placeholder='Type to search' className='w-[643px] py-4 outline-transparent placeholder:text-placeholderColor placeholder:text-sm placeholder:font-dm placeholder:font-normal'/>
            <Link to="#"><FaSearch className='ml-[-30px]'/></Link>
        </Flex>
    </div>
    <Link to="http://localhost:5173/">
        <Button text="Back to Home" className=" bg-white text-center py-4 px-20 text-primaryColortext-sm font-dm font-bold border border-black hover:bg-primaryColor hover:text-white mt-12 mb-32"/>
    </Link>
    </Container>
    </>
  )
}

export default ErrorPage