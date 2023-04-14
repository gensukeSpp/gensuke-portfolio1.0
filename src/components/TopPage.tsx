import { styles } from './TopPage.css';
import { HomePage } from '~/components/HomePage';

export const TopPage = () => {
  return (
    <>
      <div className={styles.root}>Top Page</div>
      {/* <ul className={styles.links}>
        <li>
          <Link route={topLevelRoutes._.parallax}>Parallax Test</Link>
        </li>
        <li>
          <Link route={topLevelRoutes._['framer-motion']}>Framer Motion</Link>
        </li>
        <li>
          <Link route={topLevelRoutes._.linaria}>Linaria</Link>
        </li>
      </ul> */}
      <HomePage />
    </>
  );
};
