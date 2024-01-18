

const Input = ({inType, inPh, className, inName, inValue}) => {
  return (
   
    <input type={inType} className={`${className} font-dm text-base text-secondaryColor focus:outline-none border-b-2 border-[#F0F0F0] `} placeholder={inPh} name={inName} value={inValue}/>

  )
}

export default Input