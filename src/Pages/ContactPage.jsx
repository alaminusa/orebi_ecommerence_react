import Container from '../Components/Container'
import Heading from '../Components/Heading'
import Label from '../Components/Label'
import Input from '../Components/Input'
import Button from '../Components/Button'
import { Link } from 'react-router-dom'
import Breadcrumb from '../Components/Breadcrumb'

const ContactPage = () => {

  let bread = window.location.pathname.replace("/", "").replace("-", " ");

  return (
    <>
    <Container>
        <Heading  text="Contacts" as="h3" className="text-5xl font-bold font-dm text-primaryColor pt-32"/>
        <Link><Breadcrumb>{bread}</Breadcrumb></Link>
        <Heading text="Fill up a Form" as="h4" className="text-4xl font-bold font-dm text-primaryColor pt-36 pb-10"/>
    
    <div>
           <Label labelName="Name" className="pb-2.5"/>
           <Input inType="text" inPh="Your Name here" className="pb-4"/>
        </div>
        <div>
           <Label labelName="Email" className=" pt-6 pb-2.5"/>
           <Input inType="text" inPh="Your email here" className=" pb-4"/>
        </div>
        <div>
           <Label labelName="Message" className="pt-6 pb-2.5 "/>
           <textarea type="text" placeholder="Your message here"  className="w-1/2 font-dm text-base text-secondaryColor pb-20 focus:outline-none border-b-2 border-[#F0F0F0]"/>
        </div>
            <Button text="Post" className=" bg-primaryColor text-center py-4 px-20 text-white text-sm font-dm font-bold mt-8 mb-32"/>

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116754.20361548685!2d90.1790059368856!3d23.869438711678747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755ebd3d6df9569%3A0x277b3819d4da3e91!2sSavar!5e0!3m2!1sen!2sbd!4v1703510945244!5m2!1sen!2sbd" width="100%" height="572"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='mb-36'></iframe>
        </Container>
    </>
  )
}

export default ContactPage