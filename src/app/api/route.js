import { NextResponse } from "next/server";

export const listaDeFilmes = [
    {
        id: 1,
        titulo: "A Bela e a Fera",
        autor: "Jeanne-Marie Leprince",
        anoPublicacao: 2017,
        genero: "Romance",
        img_url: ""
    },
    {
        id: 2,
        titulo: "Enrolados",
        autor: "Walt Disney",
        anoPublicacao: 2010,
        genero: "Aventura",
        img_url: ""
    },
    {
        id: 2,
        titulo: "Enrolados",
        autor: "Walt Disney",
        anoPublicacao: 2010,
        genero: "Aventura",
        img_url: ""
    },
    {
        id: 2,
        titulo: "Enrolados",
        autor: "Walt Disney",
        anoPublicacao: 2010,
        genero: "Aventura",
        img_url: ""
    }
];

export async function GET() {
    try {
    return NextResponse.json(listaDeFilmes)
    } catch (error) {
      return NextResponse.error('Erro interno do servidor', { status: 500 });
    }
  };