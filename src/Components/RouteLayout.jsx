import Header from './Layouts/Header'
import Footer from './Layouts/Footer'
import { Outlet } from 'react-router-dom'
import Category from './Layouts/Category'

const RouteLayout = () => {
  return (
    <>
    <Header/>
    <Category />
    <Outlet />
    <Footer />
    </>
  )
}

export default RouteLayout