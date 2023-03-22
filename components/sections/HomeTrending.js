import { StyledContainer, StyledGridWrapper } from "@/styles/CommonStyles"
import PageSection from "../PageSection"
import { SectionTItle } from "../SectionTItle"
import { ncp2,nde2,niv2, niv3, nrw2, nrw3, nde3, ncp3 } from "@/styles/constatns";
import { PrimaryButtonLink } from "../Buttons";

import { FiArrowRight } from 'react-icons/fi';
import NFTCard from "../cards/NFTCard";

const HomeTrending = () => {

  const data = [
    {
      id: '01',
      name: '',
      username: '',
      price: '',
      isVerified: true,
      likes: '',
      image: nde2
    },
    {
      id: '02',
      name: '',
      username: '',
      price: '',
      isVerified: true,
      likes: '',
      image: ncp2
    },
    {
      id: '03',
      name: '',
      username: '',
      price: '',
      isVerified: true,
      likes: '',
      image: niv2
    },
    {
      id: '04',
      name: '',
      username: '',
      price: '',
      isVerified: true,
      likes: '',
      image: niv3
    },
    {
      id: '05',
      name: '',
      username: '',
      price: '',
      isVerified: true,
      likes: '',
      image: nrw2
    },
    {
      id: '06',
      name: '',
      username: '',
      price: '',
      isVerified: true,
      likes: '',
      image: nrw3
    },
    {
      id: '07',
      name: '',
      username: '',
      price: '',
      isVerified: true,
      likes: '',
      image: nde3
    },
    {
      id: '08',
      name: '',
      username: '',
      price: '',
      isVerified: true,
      likes: '',
      image: ncp3
    },
  ];

  return (
    <PageSection>
        <StyledContainer>
            <SectionTItle title={'Trending Now'} justify={'space-between'}>
              <PrimaryButtonLink grey={true} href={'/collections'} title={'View All'}>
                  <i><FiArrowRight /></i>
              </PrimaryButtonLink>
            </SectionTItle>

            <StyledGridWrapper>
              {
                data.map((item)=> (
                  <NFTCard data={item} key={item.id} />
                ))
              }
            </StyledGridWrapper>
            
        </StyledContainer>
    </PageSection>
  )
}

export default HomeTrending