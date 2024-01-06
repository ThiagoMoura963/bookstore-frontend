import styled from "styled-components";
import Search from '../../components/Search';
import LastReleases from '../../components/LastReleases';

const HomeContainer = styled.div`
  height: 100%;
  background-color: var(--light-gray);  
`; 

function Home() {
  return (
    <HomeContainer>
      <Search />
      <LastReleases />
    </HomeContainer>
  )
}

export default Home
