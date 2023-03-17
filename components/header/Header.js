import { StyledContainer } from "@/styles/CommonStyles"
import NavList from "./NavList"
import NavLogo from "./NavLogo"

const { StyledHeader, StyledNavWrapper, StyledNavContent } = require("@/styles/HeaderStyles")

const Header = () => {
  return (
    <StyledHeader>
      <StyledContainer>

        <StyledNavWrapper>
          <NavLogo />

          <StyledNavContent>
            <NavList />
          </StyledNavContent>

        </StyledNavWrapper>

      </StyledContainer>
    </StyledHeader>
  )
}

export default Header