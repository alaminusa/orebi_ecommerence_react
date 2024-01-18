

const Breadcrumb = ({children,className }) => {
  return (
    <div className={` ${className} pt-2 ml-16 first-letter:uppercase `}>{children}</div>
  )
}

export default Breadcrumb