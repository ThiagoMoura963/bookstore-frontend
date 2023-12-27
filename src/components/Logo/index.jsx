import { IoBookSharp } from "react-icons/io5";
import styled from "styled-components";

const LogoContainer = styled.div`
    display: flex;
    font-size: 1.8rem;

    .logo__icon {
        margin-right: 0.6rem;
    }

    span {
        font-weight: 700;
    }
`;


const Logo = () => {
    return (
        <LogoContainer>
            <IoBookSharp
                size={40}
                className="logo__icon"
            />
            <p>
                <span>Book</span>store
            </p>
        </LogoContainer>
    )
}

export default Logo;