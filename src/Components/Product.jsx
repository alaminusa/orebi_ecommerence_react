import Image from './Image'
import Heading from './Heading'
import Flex from './Flex'
import Badge from './Badge'
import Price from './Price'
import Paragraph from './Paragraph'
import { FaHeart } from "react-icons/fa";
import { FaArrowsRotate } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom'


const Product = ({imageUrl,alt,title,price,tag,href,className}) => {
  
  return (
    <div className= "w-[370px] group">
       <div className='relative overflow-hidden'>
         <Link to={href}><Image src={imageUrl} alt={alt} className={className}/></Link>
       
         <Badge text={tag} className='absolute top-[20px] left-[26px] py-2 px-7'/>

        <div className='w-full bg-white py-6 absolute bottom-[-160px] group-hover:bottom-0 duration-500'>
            <div>
              <Flex className="items-center justify-end mr-4 gap-4">
                <Paragraph text="add to Wish List" className=" text-secondaryColor text-base"/> <FaHeart />
              </Flex>
            </div>
            <div className='py-5'>
              <Flex className="items-center justify-end mr-4 gap-4">
                <Paragraph text="Compare" className=" text-secondaryColor text-base"/> <FaArrowsRotate />
              </Flex>
            </div>
            <div>
              <Flex className="items-center justify-end mr-4 gap-4">
                <Paragraph text="Add to Cart" className=" text-base font-dm  text-primaryColor font-bold"/> <FaShoppingCart />
              </Flex>
            </div>
        </div>
       </div>
          
        <Flex className='justify-between pt-[18px]'>
          <Heading text={title} as='h5' className="text-primaryColor text-[20px] font-dm font-bold"/>
          <Price price={price} className="text-secondaryColor font-normal text-base"/>
        </Flex> 
    </div>
  )
}

export default Product