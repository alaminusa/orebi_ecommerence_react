import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import Logo from '../../assets/logo.png'
import List from '../List'

const Header = () => {
  return (
    <nav className='py-8'>
      <Container>
        <Flex>
          {/*Navbar Logo part start */}
          <div  className='w-[5%]'>
            <Image src={Logo} />
          </div>
           {/*Navbar Logo part End */}

           {/* Navbar Menu part start */}
          <div className='w-[95%]'>
            <ul className='flex pl-[543px] gap-x-10'>
              <List to="/" text="Home" className="text-secondaryColor hover:text-primaryColor inline-block hover:font-bold duration-500"/>
              <List to="/shop" text="Shop" className="text-secondaryColor hover:text-primaryColor inline-block hover:font-bold duration-500"/>
              <List to="/about" text="About" className="text-secondaryColor hover:text-primaryColor inline-block hover:font-bold duration-500"/>
              <List to="/contacts" text="Contacts" className="text-secondaryColor hover:text-primaryColor inline-block hover:font-bold duration-500"/>
              <List to="/" text="Journal" className="text-secondaryColor hover:text-primaryColor inline-block hover:font-bold duration-500"/>
              
            </ul>
          </div>
          {/* Navbar Menu part End */}
        </Flex>
      </Container>
    </nav>
  )
}

export default Header