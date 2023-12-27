import Header from './components/Header'
import styled from "styled-components";
import Search from './components/Search';
import LastReleases from './components/LastReleases';

const AppContainer = styled.div`
  height: 100%;
  background-color: var(--light-gray);  
`; 

function App() {
  return (
    <AppContainer>
      <Header />
      <Search />
      <LastReleases />
    </AppContainer>
  )
}

export default App
