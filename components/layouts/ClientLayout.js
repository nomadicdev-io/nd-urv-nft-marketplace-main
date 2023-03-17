import Header from "../header/Header"
import PageBG from "../PageBG"

const ClientLayout = ({children}) => {
  return (
    <>
        <PageBG />
        <Header />
        {children}
    </>
  )
}

export default ClientLayout