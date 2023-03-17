import { StyledNavLink, StyledNavList } from "@/styles/HeaderStyles"
import { IconButton } from "../Buttons"
import { BiWallet, BiUser } from 'react-icons/bi';
import NavSearch from "./NavSearch";

const NavList = () => {
  return (
    <StyledNavList>
        <ul>
            <li>
                <StyledNavLink href={'/'} >
                    Home
                </StyledNavLink>
            </li>
            <li>
                <StyledNavLink href={'/collection'}>
                    Collections
                </StyledNavLink>
            </li>
            <li>
                <StyledNavLink href={'/exclusives'}>
                    Exclusives
                </StyledNavLink>
            </li>  

            <li>
                <NavSearch />
            </li>

            <li>
                <IconButton grey={true}>
                    <BiUser />
                </IconButton>
            </li>

            <li>
                <IconButton>
                    <BiWallet />
                </IconButton>
            </li>

        </ul>
    </StyledNavList>
  )
}

export default NavList