import { Title } from "../Title";
import styled from "styled-components";

const Card = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 1rem auto;
    width: 100%;
    max-width: 700px;
    padding: 2.5rem 1.25rem;
    background-color: var(--white);
    border-radius: 10px;
    font-family: var(--primary-font);
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`

const Button = styled.button`
   display: block;
   background-color: var(--base-color);
   border: none;
   color: var(--white);
   padding: .625rem 0;
   font-size: 1rem;
   text-align: center;
   width: 100%;
   font-weight: 700;
   cursor: pointer;
   font-family: var(--secundary-font);
   border: 2px solid var(--base-color);
   transition: .2s all;

   &:hover {
    background-color: transparent;
    border: 2px solid var(--base-color);
    color: var(--base-color);
   }
`
const Description = styled.p`
   max-width: 450px;
   font-weight: 500;
   margin-right: 2rem;
   text-align: justify;
`
const Subtitle = styled.h4`
    color: var(--highlight-color);
    font-size: 18px;
    font-weight: bold;
    margin: 15px 0;
`
const BookImg = styled.img`
    width: 150px;
`

const RecommendCard = ({ title, subtitle, description, img }) => {
    return (
        <Card>
            <div>
                <Title
                    fontSize="1.5rem"
                    color="var(--accent-color)"
                    alignment="left"
                >
                    {title}
                </Title>
                <Subtitle>{subtitle}</Subtitle>
                <Description>{description}</Description>
            </div>
            <div>
                <BookImg src={img} alt="Imagem do livro" />
                <Button>
                    Saiba mais
                </Button>
            </div>
        </Card>

    )
}

export default RecommendCard;