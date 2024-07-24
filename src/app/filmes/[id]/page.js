import styles from "../../styles/rota.module.css";
import Image from "next/image";
import Link from "next/link";

export default async function Filme({params}) {

    const response = await fetch("http://localhost:3000/api/" + params.id);
    const data = await response.json();
    
    return (
        <main className={styles.main}>
            <div className={styles.perfil}>
                <div className={styles.section}>
                    <Image
                        src={data.linkImg}
                        layout="fill"
                        objectFit="cover"
                        className={styles.perfil}
                    />
                    <div className={styles.overlay}></div>
                    <div className={styles.content}>
                        <h1 className={styles.title}>{data.titulo}</h1>
                        <p className={styles.synopsis}>{data.categoria}</p>
                        <p className={styles.synopsis}>{data.anoLancamento}</p>
                        <p className={styles.synopsis}>{data.duracao}</p>
                        <p className={styles.synopsis}>{data.generos}</p>
                        <div className={styles.buttons}>
                            <Link className={styles.button} href="/">
                                Assistir
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
