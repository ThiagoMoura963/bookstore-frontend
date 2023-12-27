import styled from "styled-components";

const OptionsContainer = styled.ul`
    display: flex;
`;

const Options = styled.li`
    font-size: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 .4rem;
    cursor: pointer;
    min-width: 7.5rem;
    transition: all .2s;

    &:hover {
        color: var(--highlight-color);
    }
`;

const HeaderOptions = () => {
    const options = ["Categoria", "Favorito", "Minha estante"];

    return (
        <OptionsContainer>
            {options.map((option, index) => 
                <Options 
                  key={index}
                >
                {option.toUpperCase()}
            </Options>    
            )}
        </OptionsContainer>
    )
}

export default HeaderOptions;