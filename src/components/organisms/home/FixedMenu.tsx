import { Link } from 'rocon/react';
import { Link as ScrollLink } from 'react-scroll';

import { productPageBuilder } from '../../Routes';

import { menuItem } from '../../TopPage.css';

export const HeadMenuComp = () => {
  return (
    <div className={menuItem.wrap}>
      <ScrollLink to="profile" smooth={true} duration={500} className={menuItem.link}>
        Profile
      </ScrollLink>
      <ScrollLink to="skill" smooth={true} duration={500} className={menuItem.link}>
        Skill
      </ScrollLink>
      <details style={{ cursor: 'pointer' }}>
        <summary style={{ listStyleType: 'none' }}>Works</summary>
        <ul>
          <li>
            <Link route={productPageBuilder.route} match={{ page: '0' }} className={menuItem.link}>
              作品１
            </Link>
          </li>
          <li>
            <Link route={productPageBuilder.route} match={{ page: '1' }} className={menuItem.link}>
              作品２
            </Link>
          </li>
          <li>
            <Link route={productPageBuilder.route} match={{ page: '2' }} className={menuItem.link}>
              作品３
            </Link>
          </li>
        </ul>
      </details>
    </div>
  );
};
