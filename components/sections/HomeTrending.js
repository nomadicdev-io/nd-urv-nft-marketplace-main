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
      name: 'Guardian of Helix Nebula',
      username: 'urbanvyali',
      price: '2.801',
      isVerified: true,
      likes: '',
      image: nde2
    },
    {
      id: '02',
      name: 'Cyber Pharaoh #45',
      username: 'nomadicdev',
      price: '4.256',
      isVerified: true,
      likes: '',
      image: ncp2
    },
    {
      id: '03',
      name: 'Parvati Devi #1',
      username: 'lostsailor',
      price: '1.875',
      isVerified: true,
      likes: '',
      image: niv2
    },
    {
      id: '04',
      name: 'Lord Hanuman #2',
      username: 'twentjogn',
      price: '2.371',
      isVerified: true,
      likes: '',
      image: niv3
    },
    {
      id: '05',
      name: 'Cyber Pharaoh #28',
      username: 'yippeirshad',
      price: '2.764',
      isVerified: true,
      likes: '',
      image: nrw2
    },
    {
      id: '06',
      name: 'Cyber Pharaoh #13',
      username: 'flokianish',
      price: '3.201',
      isVerified: true,
      likes: '',
      image: nrw3
    },
    {
      id: '07',
      name: 'Ruler of Cosmos',
      username: 'urbanvyali',
      price: '1.943',
      isVerified: true,
      likes: '',
      image: nde3
    },
    {
      id: '08',
      name: 'Cyber Pharaoh #02',
      username: 'nvdesigns',
      price: '3.620',
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