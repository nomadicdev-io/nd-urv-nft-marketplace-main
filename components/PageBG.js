import { StyledPageBG, StyledPageBGImage } from "@/styles/CommonStyles"
import bg from "@/public/bg.png"

const PageBG = () => {
  return (
    <StyledPageBG>
        <StyledPageBGImage 
            src={bg}
            alt="URV"
        />
    </StyledPageBG>
  )
}

export default PageBG