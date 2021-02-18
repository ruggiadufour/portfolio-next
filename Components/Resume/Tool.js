import styles from "../../styles/Resume.module.css";
import Image from 'next/image'
export default function Tool({src, alt, text}){
    return(
        <div className={styles.p_info}>
            <Image
                src={src}
                width={45}
                height={45}
                layout="intrinsic"
                alt={alt}
            />
            <p>{text}</p>
        </div>
    )
}