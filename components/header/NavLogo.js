import { StyledNavLogo } from "@/styles/HeaderStyles";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo-icon.svg";

const NavLogo = () => {
  return (
    <StyledNavLogo>
        <Link href={'/'}>
            <Image 
                src={logo}
                alt="URV"
            />
        </Link>
    </StyledNavLogo>
  )
}

export default NavLogo