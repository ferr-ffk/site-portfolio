import styles from "./ParallaxBackground.module.css";

interface Props {
  frontUrl: string;
  backUrl: string;
  children?: React.ReactNode | React.ReactNode[];
}

const ParallaxBackground = ({ frontUrl, backUrl, children }: Props) => {
  return (
    <div className={styles.parallax}>
      <img src={backUrl} alt="" className={styles.parallax__back} />
      <img src={frontUrl} alt="" className={styles.parallax__front} />
      <div className={styles.parallax__hero}>
        {children}
      </div>
    </div>
  );
};

export default ParallaxBackground;
