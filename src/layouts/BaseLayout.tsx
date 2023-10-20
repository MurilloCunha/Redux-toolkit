import { Outlet } from "react-router-dom";
import styles from './BaseLayout.module.css';
import ReloadPrompt from "../components/ReloadPrompt";

function BaseLayout(){
  return ( 
    <main className={styles.wrapper}>
      <header className={styles.header}>
        <p>Cabeçalho de todo mundo</p>
      </header>

      <section className={styles.mainContent}>
        <Outlet />
      </section>
      <ReloadPrompt />
    </main>
  )
}

export default BaseLayout;