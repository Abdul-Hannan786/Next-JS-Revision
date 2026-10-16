import styles from "./home.module.css";
const page = () => {
  console.log(styles)
  return (
    <>
      <h1 className={styles.title}>Home Page</h1>
    </>
  );
};

export default page;
