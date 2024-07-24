import styles from "../../styles/rota.module.css";
import Image from "next/image";
import Link from "next/link";

export default async function Filme({params}) {

    const response = await fetch("http://localhost:3000/api/" + params.id);
    const data = await response.json();
    
    return (
      <main className={styles.main}>
  <div className={styles.perfil}>
    <div className={styles.heroSection}>
      <Image
        src={data.linkImg}
        layout="fill"
        objectFit="cover"
        className={styles.perfil}
      />
      <div className={styles.heroOverlay}></div>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>{data.titulo}</h1>
        <p className={styles.heroSynopsis}>{data.categoria}</p>
        <p className={styles.heroSynopsis}>{data.anoLancamento}</p>
        <p className={styles.heroSynopsis}>{data.duracao}</p>
        <p className={styles.heroSynopsis}>{data.generos}</p>
        <div className={styles.heroButtons}>
        <Link className={styles.heroButton} href="/">
              Assistir
            </Link>
        </div>
      </div>
    </div>
  </div>
</main>
    );
  }