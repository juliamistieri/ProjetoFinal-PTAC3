'use client'
import Image from "next/image";
import "./styles.css";
import Link from "next/link";
import { listaDeFilmes } from "./api/route";
import { useState, useEffect } from "react"
import styles from "./styles/main.module.css";

export default function Home() {

  const [listaFilmes, setListaFilmes] = useState([]);
  const [listaCompleta, setListaCompleta] = useState([]);

  useEffect(() => {
    const getFilmes = () => {
      setListaFilmes(listaDeFilmes);
      setListaCompleta(listaDeFilmes);
    }
    getFilmes();
  }, []);

  return (
    <main className={styles.main}>
      {listaFilmes.map((filme) => (
        <div className={styles.card} key={filme.id}>
          {/* <div className={styles.titulo}>{filme.titulo.slice(0, 40)}...</div> */}

          <Image className={styles.img} width={300} height={400} src={filme.linkImg} />

          {/* <div className={styles.propriedades}>{filme.categoria}</div>

          <div className={styles.propriedades}>{filme.anoLancamento}</div>

          <div className={styles.propriedades}>{filme.duracao}</div>

          <div className={styles.ultimaProp}>{filme.generos.slice(0, 40)}...</div> */}

          <Link href={'/api/' + filme.id}>
            <button>Ver Mais</button>
          </Link>
        </div>
      ))}
    </main>
  );
}
