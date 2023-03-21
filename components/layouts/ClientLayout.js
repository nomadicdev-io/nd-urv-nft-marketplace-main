import Footer from "../footer/Footer"
import Header from "../header/Header"
import PageBG from "../PageBG"

const ClientLayout = ({children}) => {
  return (
    <>
        <PageBG />
        <Header />
        {children}
        <Footer />
    </>
  )
}

export default ClientLayout