import styled from "styled-components";

const Input = styled.input`
    border: none;
    height: 3rem;  
    width: 100%; 
    padding: 0 3rem; 
    border-radius: 50px; 
    font-size: 1rem;
    font-family: var(--secundary-font);
    color: var(--base-color);
    background: transparent;
    
    &:focus {
        outline: none
    }
`;

const InputContainer = styled.div`
    display: flex;
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
    align-items: center;
    border-radius: 50px;
    padding: 1rem, 0 .3rem 1.25rem;
    background: var(--white);
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;

const InputDefault = ({ placeholder, onChange, children }) => {
    return (
        <InputContainer>
            <Input 
              placeholder={`${placeholder}...`}
              onChange={onChange}
            />
            { children }
        </InputContainer>
    )
}

export default InputDefault;