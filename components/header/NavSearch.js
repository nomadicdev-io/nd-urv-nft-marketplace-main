import { StyledSearchForm } from "@/styles/HeaderStyles"
import { BiSearch } from 'react-icons/bi';

const NavSearch = () => {
  return (
    <StyledSearchForm>
        <input type={'text'} placeholder={'Search items'} />
        <button type="submit">
            <BiSearch />
        </button>
    </StyledSearchForm>
  )
}

export default NavSearch