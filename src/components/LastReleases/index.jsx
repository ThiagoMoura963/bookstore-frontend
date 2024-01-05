import { recommendBooks } from '../SearchData';
import { Title } from '../Title';
import RecommendCard from "../RecommendCard";
import bookImage from '../../assets/book2.png';
import styled from 'styled-components';

const LastReleasesContainer = styled.section`
    display: flex;
    flex-direction: column;
    padding-bottom: 1.25rem;
`;

const NewBooksContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 4rem;
    gap: 1rem;
    flex-wrap: wrap;
`;

const LastReleases = () => {
   return (
       <LastReleasesContainer>
           <Title
               color="var(--highlight-color)"
               fontSize="36px"
           >
               ÚLTIMOS LANÇAMENTOS
           </Title>
           <NewBooksContainer>
               {recommendBooks.map( book => (
                   <img 
                     key={book.id} 
                     src={book.src} 
                     alt={book.name}
                     style={{ width: '250px' }}
                    />
               ))}
           </NewBooksContainer>

           <RecommendCard 
             title= "Talvez você se interesse por:"
             subtitle="Angular 11"
             description="Construindo uma aplicação com a plataforma Google"            
             img={bookImage}
           />
       </LastReleasesContainer>
   )
}
export default LastReleases;