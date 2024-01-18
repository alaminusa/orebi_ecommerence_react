import { useEffect, useRef} from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Bars from '../Icons/Bars'
import Paragraph from '../Paragraph'
import List from '../List'
import { FaUser, FaCaretDown, FaShoppingCart, FaSearch ,  FaTimes} from "react-icons/fa"
import Image from '../Image'
import CartPopup from '../../assets/CartPopup.png'
import Price from '../Price'
import Button from '../Button'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../../Slices/counterSlice'

const Category = () => {
  const data = useSelector((state)=>state.alamin.value);
  let disPatch =useDispatch()
  

  const dropRef = useRef(null);
  const btnRef = useRef(null);
  const dropRefOne = useRef(null);
  const btnRefOne = useRef(null);
  const dropRefTwo = useRef(null);
  const btnRefTwo = useRef(null);

  let handleClick = (dropRefCmn, btnRefCmn) => {
    const dropStyle = dropRefCmn.current.style;

    if (dropStyle.display === "block") {
      dropStyle.display = "none";
    } else {
      dropStyle.display = "block";
    }
  };

  let handleClickOutSite = (event, dropRefCmn, btnRefCmn) => {
    if (
      dropRefCmn.current &&
      !dropRefCmn.current.contains(event.target) &&
      !btnRefCmn.current.contains(event.target)
    ) {
      dropRefCmn.current.style.display = "none";
    }
  };

  useEffect(() => {
    document.addEventListener("click", (event) => {
      handleClickOutSite(event, dropRef, btnRef);
    });
    document.addEventListener("click", (event) => {
      handleClickOutSite(event, dropRefOne, btnRefOne);
    });
    document.addEventListener("click", (event) => {
      handleClickOutSite(event, dropRefTwo, btnRefTwo);
    });
    return () => {
      document.removeEventListener("click", (event) => {
        handleClickOutSite(event, dropRef, btnRef);
      });
      document.removeEventListener("click", (event) => {
        handleClickOutSite(event, dropRefOne, btnRefOne);
      });
      document.removeEventListener("click", (event) => {
        handleClickOutSite(event, dropRefTwo, btnRefTwo);
      });
    };
  }, []);



  return (
    <section className='py-6 bg-categoryBgColor border-y border-borderColor relative'>
        <Container>
            <Flex className='items-center'>
                {/* Catagory Left Bar part start */}
                <div className='w-1/4'>
                    <Flex className='items-center'>
                      <div onClick={() => {
                  handleClick(dropRef, btnRef);
                }}
                ref={btnRef}>
                      <Link to="#"><Bars className="cursor-pointer"/></Link>
                      </div>
                        
                        <div ref={dropRef} className="bg-primaryColor w-64 text-sm font-dm absolute top-20 left-40 hidden z-50">
                            <ul className='text-catagoryMenuText'>
                                <List to="#" text="Accesories" className="border-b border-catagoryMenuBorder block py-4 pl-5 hover:text-white hover:pl-8 hover:font-bold cursor-pointer duration-500"/>
                                <List to="#" text="Furniture" className="border-b border-catagoryMenuBorder block py-4 pl-5 hover:text-white hover:pl-8 hover:font-bold cursor-pointer duration-500"/>
                                <List to="#" text="Electronics" className="border-b border-catagoryMenuBorder block py-4 pl-5 hover:text-white hover:pl-8 hover:font-bold cursor-pointer duration-500"/>
                                <List to="#" text="Clothes" className="border-b border-catagoryMenuBorder block py-4 pl-5  hover:text-white hover:pl-8 hover:font-bold cursor-pointer duration-500"/>
                                <List to="#" text="Bags" className="border-b border-catagoryMenuBorder block py-4 pl-5 hover:text-white hover:pl-8 hover:font-bold cursor-pointer duration-500"/>
                                <List to="#" text="Home appliances" className="border-b border-catagoryMenuBorder block py-5 pl-5 hover:text-white hover:pl-8 hover:font-bold cursor-pointer duration-500"/>
                            </ul>
                        </div>
                       <Link to='#'> <Paragraph text='Shop by Category' className='pl-3 text-primaryColor text-sm'/></Link>
                    </Flex>
                </div>
                {/* Catagory Left Bar part end */}

                {/* Searchbox part start */}
                <div className='w-1/2'>
                    <Flex className='items-center text-center justify-center'>
                    <input type='text' placeholder='Search Products' className='w-[600px] py-4 pl-5 outline-transparent placeholder:text-placeholderColor placeholder:text-sm placeholder:font-dm placeholder:font-normal'/>
                    <Link to="#"><FaSearch className='ml-[-30px]'/></Link>
                    </Flex>
                </div>
                 {/* Searchbox part end */}

                 {/* Catagory right-side Icon part start */}
                <div className='w-1/4'>
                    <Flex className='justify-end'>
                        <div  onClick={() => {
                    handleClick(dropRefOne, btnRefOne);
                  }}
                  ref={btnRefOne}>
                        <FaUser className="cursor-pointer"/>
                        </div>
                        <Link to="#"><FaCaretDown className="cursor-pointer"/></Link>
                        <div ref={dropRefOne} className="bg-white w-48 text-primaryColor text-sm font-dm text-center absolute top-20 right-52 hidden z-50">
                               
                            <ul className='text-black'>
                            <List to="/login" text="Login" className="border border-solid border-borderTwo block py-4 hover:bg-userHoverBg hover:text-white  hover:font-bold cursor-pointer duration-500"/>

                            <List to="/signup" text="Sign up" className="border border-solid border-borderTwo block py-4
                                hover:bg-userHoverBg   hover:text-white hover:font-bold  cursor-pointer duration-500"/>
                               
                               
                            </ul>
                        </div>
                        <div onClick={() => {
                    handleClick(dropRefTwo, btnRefTwo);
                  }}
                  ref={btnRefTwo}><FaShoppingCart className='ml-10 cursor-pointer'/></div>
                        <div ref={dropRefTwo} className="bg-white w-[360px]  border border-solid border-borderTwo absolute top-20 right-36 hidden z-50">
                               <Link to="#"><Image  src={CartPopup} alt="CartPopup.png" className="w-full relative "/></Link>
                               <Link to="#"><FaTimes className='absolute top-14 right-5'/></Link>
                              
                               <div className='text-2xl text-center flex justify-center pt-2 w-3/4'> 
                               <Paragraph text="Qty:" className="px-2 "/>
                               <Button text="-" onClick={()=>disPatch(decrement())} className="bg-white inline-block py-2 leading-none px-2 border border-gray-200 text-primaryColor text-xl font-dm font-bold hover:bg-primaryColor hover:text-white rounded"/>
                               <div className='w-[70px] border border-solid border-gray-200 mx-1 hover:border-teal-300'>
                               <Paragraph text={data} className="bg-white inline-block py-2 leading-none px-4 mx-1  text-primaryColor text-lg font-dm font-extrabold rounded "/>
                               </div>
                                <Button text="+" onClick={()=>disPatch(increment())} className="bg-white inline-block py-2 leading-none px-2 border border-solid border-gray-200 text-primaryColor text-xl font-dm font-bold hover:bg-primaryColor hover:text-white rounded"/>
                               </div>

                               <Flex className='gap-x-1 py-3.5 pl-5'>
                               <Paragraph text="Subtotal:" className='text-secondaryColor text-base'/>
                               <Price text="$44.00" className="text-primaryColor text-base font-dm font-bold "/>
                               </Flex>
                              <Flex className='px-5 justify-between pb-5'>
                                <Button text="View Cart" className="bg-white py-4 px-10 border border-solid border-userHoverBg text-primaryColor text-sm font-dm font-bold hover:bg-primaryColor hover:text-white"/>
                                <Button text="Checkout" className="bg-white py-4 px-10 border border-solid border-userHoverBg text-primaryColor text-sm font-dm font-bold hover:bg-primaryColor hover:text-white"/>
                               
                              </Flex>

                        </div>
                    </Flex>
                </div>
                 {/* Catagory right-side Icon part end */}
            </Flex>
        </Container>
    </section>
  )
}

export default Category