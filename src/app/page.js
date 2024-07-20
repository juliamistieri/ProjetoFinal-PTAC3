'use client'
import Image from "next/image";
import "./styles.css";
import { listaDeFilmes } from "./api/route";
import { useState, useEffect } from "react"
import styles from "./styles/main.module.css";
import Roleta from "./Roleta";

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

  if (listaCompleta[0] == false) {
    return <div className={styles.main}><div className={styles.loader}></div></div>;
  }

  if( listaFilmes[0] == null){
    return <Roleta/>
   }

  return (
    <main className={styles.main}>
      {listaFilmes.map((filme) => (
        <div className={styles.card} key={filme.id}>
          {<div className={styles.titulo}>{filme.titulo.slice(0, 40)}...</div>}

          <Image className={styles.img} width={300} height={400} src={filme.linkImg} />

          {<div className={styles.propriedades}>{filme.categoria}</div>}

          {<div className={styles.propriedades}><strong>Ano de Lançamento:</strong> {filme.anoLancamento}</div>}

          {<div className={styles.propriedades}><strong>Duração:</strong> {filme.duracao}</div>}

          {<div className={styles.ultimaProp}><strong>Gêneros:</strong> {filme.generos.slice(0, 40)}...</div>}

        </div>
      ))}
    </main>
  );
}
