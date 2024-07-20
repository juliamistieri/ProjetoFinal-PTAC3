import Image from "next/image";
import styles from "./roleta.module.css";

export default function Roleta() {
    return (
        <div className={styles.centralizar}>
            <Image width={100} height={100} alt="" src={"/wind-toy.svg"}/>
        </div>
    )
};