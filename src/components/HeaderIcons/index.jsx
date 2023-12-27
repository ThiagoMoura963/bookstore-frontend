import { FaUserCircle, FaShoppingBag } from "react-icons/fa";
import styled from "styled-components";

const IconsContainer = styled.ul`
    display: flex;
    align-items: center;
`;

const Icons = styled.li`
    margin-right: 2.5rem;
    width: 1.5rem;
    list-style: none;
    cursor: pointer;
    transition: all .2s;    

    &:hover {
        color: var(--accent-color);
    }
`;

const HeaderIcons = () => {
    const icons = [FaUserCircle, FaShoppingBag];

    return (
        <IconsContainer>
            {icons.map((Icon, index) =>
                <Icons
                  key={index}
                >
                    <div>
                        <Icon size={40} /> 
                    </div>
                </Icons>
            )}
        </IconsContainer>
    )
}

export default HeaderIcons;