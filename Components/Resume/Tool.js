import styles from "../../styles/Resume.module.css";

export default function Tool({src, alt, text}){
    return(
        <div className={styles.p_info}>
            <img
                src={src}
                width="45px"
                height="45px"
                alt={alt}
            />
            <p>{text}</p>
        </div>
    )
}