import styled from "styled-components";
import InputDefault from "../InputDefault";
import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
import { getBooks } from "../../services/book.js";
import Loader from "../Loader/index.jsx";

const SearchContainer = styled.form`
    font-family: 'Poppins', sans-serif;
    display: flex;
    flex-direction: column;
    padding: 3rem 0;
    width: 100%;
    text-align: center;
`;

const Title = styled.h2`
    font-size: 2.25rem;
    width: 100%;
    color: var(--highlight-color)
`;

const Subtitle = styled.h3`
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 2.5rem;
`;

const SearchIconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--highlight-color);
    height: 50px;
    width: 100%;
    max-width: 80px;
    border-radius: 0 50px 50px 0;
`;

const ButtonSearch = styled.button`
    background-color: transparent;
    border: none;
    color: var(--white); 
    cursor: pointer;
    width: 100%;
    height:100%;
    border-radius: 0 50px 50px 0;
    transition: all .2s;

    &:hover {
        background-color: var(--base-color);
    }
`;

const ResultContainer = styled.div`
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
    margin-bottom: 5rem;
    font-family: var(--primary-font);
    font-weight: 500;
`;

const BookTitle = styled.p`
    font-size: 1rem;
    width: 12.5rem;
    margin: 0 auto;
    white-space: pre-line;
`;

const Search = () => {
    const [searchedBooks, setSearchedBooks] = useState("");
    const [filteredBooks, setFilteredBooks] = useState([]);
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetchBooks();
    }, []);

    const fetchBooks = async () => {
        try {
            const booksInAPI = await getBooks();
            setBooks(booksInAPI);
        } catch (error) {
            console.error(error);
        } 
    }

    const onSearchBook = (e) => {
        e.preventDefault();

        setFilteredBooks(
            books.filter((book) => {
                return book.title.includes(searchedBooks);
            })
        )
    }

    return (
        <>
            <SearchContainer onSubmit={onSearchBook}>
                <Title>Está pronto para começar?</Title>
                <Subtitle>Explore a nossa estante e encontre o livro perfeito para você</Subtitle>
                <InputDefault
                    placeholder="Encontre sua próxima leitura"
                    value={searchedBooks}
                    onChange={(e) => setSearchedBooks(e.target.value)}
                >
                    <SearchIconContainer>
                        <ButtonSearch>
                            <FaSearch
                                size={25}
                            />
                        </ButtonSearch>
                    </SearchIconContainer>

                </InputDefault>
            </SearchContainer>
            <ResultContainer>
                <Loader />
                {filteredBooks.map((book => {
                    return (
                        <div key={book.id}>
                            <div>
                                <img
                                    src={book.src}
                                    alt={book.title}
                                    style={{ width: '250px', margin: '0 auto' }}

                                />
                            </div>
                            <div>
                                <BookTitle>{book.title}</BookTitle>
                            </div>
                        </div>
                    )
                }))}

            </ResultContainer>
        </>
    )
}

export default Search;