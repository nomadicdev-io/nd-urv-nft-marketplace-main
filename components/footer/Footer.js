import { StyledContainer } from "@/styles/CommonStyles"
import { StyledFooter, StyledFooterBottom, StyledFooterSocial, StyledFooterTop } from "@/styles/FooterStyles"
import Link from "next/link"
import { IconButtonLink } from "../Buttons"
import { FaDiscord, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import AppContainer from "./AppContainer";

const Footer = () => {

    const data = {
        description: 'UrbanVyali is an innovative NFT company that specializes in creating unique digital assets. Join us in revolutionizing the art world!'
    }

  return (
    <>  
        <AppContainer />
        
        <StyledFooter>
            <StyledContainer>
                <StyledFooterTop>
                    <div className="inner_grid">
                        <div className="footer_item">
                            <div className="footer_about">
                                <h4>About <strong>UrbanVyali</strong></h4>
                                <p>{data.description}</p>
                                <StyledFooterSocial>
                                    <li>
                                        <IconButtonLink grey={true} href={'/'} title={''}>
                                            <FaDiscord />
                                        </IconButtonLink>
                                    </li>
                                    <li>
                                        <IconButtonLink grey={true} href={'/'} title={''}>
                                            <FaTwitter />
                                        </IconButtonLink>
                                    </li>
                                    <li>
                                        <IconButtonLink grey={true} href={'/'} title={''}>
                                            <FaInstagram />
                                        </IconButtonLink>
                                    </li>
                                    <li>
                                        <IconButtonLink grey={true} href={'/'} title={''}>
                                            <FaYoutube />
                                        </IconButtonLink>
                                    </li>
                                </StyledFooterSocial>
                            </div>
                        </div>

                        <div className="footer_item">
                            <h4>Market Place</h4>

                            <ul>
                                <li><Link href={'/exclusives'} title={'Exclusives'}>Exclusives</Link></li>
                                <li><Link href={'/collections'} title={'Collections'}>Collections</Link></li>
                                <li><Link href={'/trending'} title={'Trending'}>Trending</Link></li>
                                <li><Link href={'/artists'} title={'Artists'}>Artists</Link></li>
                            </ul>
                        </div>

                        <div className="footer_item">
                            <h4>Resources</h4>

                            <ul>
                                <li><Link href={'/docs'} title={'Docs'}>Docs</Link></li>
                                <li><Link href={'/terms'} title={'Collections'}>Terms</Link></li>
                                <li><Link href={'/faq'} title={'Trending'}>FAQ</Link></li>
                                <li><Link href={'/privacy'} title={'Artists'}>Privacy</Link></li>
                            </ul>
                        </div>

                        <div className="footer_item">
                            <h4>Company</h4>

                            <ul>
                                <li><Link href={'/about'} title={'Exclusives'}>About</Link></li>
                                <li><Link href={'/career'} title={'Career'}>Career</Link></li>
                            </ul>
                        </div>
                    </div>
                </StyledFooterTop>

                <StyledFooterBottom>
                    <p>Copyright &copy; {new Date().getFullYear()} <strong>UrbanVyali</strong>. All rights reserved</p>
                </StyledFooterBottom>
            </StyledContainer>
        </StyledFooter>
    </>
  )
}

export default Footer