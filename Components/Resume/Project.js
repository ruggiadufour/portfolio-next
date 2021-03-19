import styles from "../../styles/Resume.module.css";

export default function Project({ title, long_desc, site }) {
  return (
    <div className={`${styles.p_info} ${styles.flex_col}`}>
      <h3>{title}</h3>
      <p>
        {long_desc}
        {site !== "" && (
          <a className="color-text" href={site} target="_blank">
            See more.
          </a>
        )}
      </p>
    </div>
  );
}
