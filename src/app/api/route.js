import { NextResponse } from "next/server";

export const listaDeFilmes = [
    {
        id: 1,
        titulo: "A Bela e a Fera",
        duracao: "2h 09min",
        anoLancamento: 2017,
        generos: "Fantasia, Comédia Musical, Romance",
        linkImg: "https://cinemacomrapadura.com.br/imagens/2017/01/20170108-a-bela-e-a-fera-615x879.jpg"
    },
    {
        id: 2,
        titulo: "Enrolados",
        duracao: "1h 41min",
        anoLancamento: 2010,
        generos: "Animação, Família",
        linkImg: "https://static.wikia.nocookie.net/dublagem/images/5/5c/Enrolados.jpeg/revision/latest?cb=20230719135756&path-prefix=pt-br"
    },
    {
        id: 3,
        titulo: "Divertida Mente 2",
        duracao: "1h 36min",
        anoLancamento: 2024,
        generos: "Aventura, Animação, Comédia, Família",
        linkImg: "https://ingresso-a.akamaihd.net/prd/img/movie/divertida-mente-2/61ac248d-e3e6-4e33-9515-8ce0621a32fa.webp"
    },
    {
        id: 4,
        titulo: "Como Treinar o seu Dragão",
        duracao: "1h 33min",
        anoLancamento: 2010,
        generos: "Aventura, Animação, Família",
        linkImg: "https://m.media-amazon.com/images/I/91W6Z2eBKWL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        id: 5,
        titulo: "Kung Fu Panda 3",
        duracao: "1h 35min",
        anoLancamento: 2016,
        generos: "Aventura, Animação, Família, Artes Marciais",
        linkImg: "https://br.web.img3.acsta.net/pictures/16/02/14/13/01/233818.jpg"
    }
];

export async function GET() {
    try {
        return NextResponse.json(listaDeFilmes)
    } catch (error) {
        return NextResponse.error('Erro interno do servidor', { status: 500 });
    }
};