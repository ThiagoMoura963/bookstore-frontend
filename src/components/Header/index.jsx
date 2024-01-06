import Logo from '../Logo';
import HeaderOptions from '../HeaderOptions'; 
import HeaderIcons from '../HeaderIcons';
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
  font-family: var(--secundary-font);
  color: var(--white);
  display: flex;
  padding: 1rem 0;
  justify-content: center;
  background-color: var(--base-color);
  justify-content: space-around;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
`;

const StyledLink = styled(Link)`
    color: var(--white);
    text-decoration: none;
    transition: all .2s;

    &:hover {
        color: var(--highlight-color);
    }
`;


const Header = () => {
    return (
        <HeaderContainer>
            <StyledLink to="/">
                <Logo />
            </StyledLink>
            <HeaderOptions />
            <HeaderIcons />
        </HeaderContainer>
    )
}

export default Header;