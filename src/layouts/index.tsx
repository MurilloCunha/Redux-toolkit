import { NavLink, Outlet } from "react-router-dom";
import styles from './BaseLayout.module.css';

function BaseLayout(){

  return ( 
    <main className={styles.wrapper}>
      <header className={styles.header}>
        <menu>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/Episode'>Episodes</NavLink>
          </li>
          <li>
            <NavLink to='/Location'>Location</NavLink>
          </li>
          <li>
            <NavLink to='/Character'>Characters</NavLink>
          </li>
        </menu>
      </header>

      <section className={styles.mainContent}>
        <Outlet />
      </section>

    </main>
  )
}

export default BaseLayout;