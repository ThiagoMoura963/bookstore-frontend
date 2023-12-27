import book from "../../assets/book.png";
import bookRecommend from "../../assets/book.png"

const books = [
    { id: 1, name: "Aprendendo React", src: book },
    { id: 2, name: "Estilizando Websites com CSS", src: book },
    { id: 3, name: "Como desenvolver uma aplicação FullStack", src: book },
    { id: 4, name: "Aprendendo VueJS", src: book }
];

const recommendBooks = [
    { id: 1, nome: 'Liderança em Design', src: bookRecommend },
    { id: 3, nome: 'Cangaceiro JavaScript: Uma aventura no sertão da programação', src: bookRecommend },
    { id: 4, nome: 'Apache Kafka e Spring Boot', src: bookRecommend }
 ];

 export { books, recommendBooks };
