import { useEffect, useState } from "react";
import { getFavorites } from "../../services/favorites";
import styled from "styled-components";
import bookImg from "../../assets/book.png";
import { toast } from 'react-toastify';
import { deleteFavorite } from "../../services/favorites";

const Title = styled.h2`
    color: var(--highlight-color);
    font-family: var(--secundary-font);
    font-weight: 600;
    font-size: 2.25rem;
    text-align: center;
    width: 100%;
    padding-top: 2rem;
`;

const FavoriteContainer = styled.div`
    background-color: var(--white);
    width: 60%;
    padding: 2rem 10rem;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    margin: 2rem auto;
    border-radius: 10px;
    overflow-y: auto; 
    overflow-x: hidden; 
    max-height: 500px; 
`;

const FavoriteItem = styled.div`
    display: flex;
    align-items: center;    
    margin: 0 0 2rem 0;
    cursor: pointer;
    text-align: center;
    transition: .2s all;

    p {
        font-size: 1.5rem;
        color: var(--accent-color);
        text-align: center;
        font-family: var(--secundary-font);
        font-weight: 600;
    }

    img {
        width: 250px;
    }

    h3 {
        font-family: var(--primary-font);
        font-weight: 700;
        font-size: 1.2rem;
        margin-bottom: 0.5rem;
        text-align: start;
    }

    &:hover {
        padding: 1rem 0;
        box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 12px;
        border-radius: 10px;
    }
`;

const Favorites = () => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        fetchFavorites();
    }, [])

    const fetchFavorites = async () => {
        const favoriteInApi = await getFavorites();
        setFavorites(favoriteInApi);
    }

    const removeInFavorite = async (id) => {
        await deleteFavorite(id);
        fetchFavorites();
        toast.success("Favorito deletado com sucesso");
    }

    return (
        <>
            <Title>Aqui estão seus livros favoritos:</Title>
            <FavoriteContainer>
                {favorites.length !== 0 ? favorites.map(favorite =>
                    <FavoriteItem 
                      key={favorite.id}
                      onClick={() => removeInFavorite(favorite.id)}
                    >
                        <img 
                          src={bookImg} 
                          alt={favorite.title} 
                        />
                        <div>
                            <h3>Título:</h3>
                            <p>{favorite.title}</p>
                        </div>
                    </FavoriteItem>
                ) : null}
            </FavoriteContainer>
        </>
    )
}

export default Favorites;