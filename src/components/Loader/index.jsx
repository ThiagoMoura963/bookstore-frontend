import styled, { keyframes } from 'styled-components';

const loading = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const LoaderContainer = styled.div`
    width: 40px;
    height: 40px;
    border: 10px solid var(--highlight-color);
    border-radius: 50%;
    border-top-color: transparent;
    animation: ${loading} .6s linear infinite;
`;

const Loader = () => {
    return (
        <LoaderContainer />
    )
}

export default Loader;