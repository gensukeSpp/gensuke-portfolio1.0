import { Element } from 'react-scroll';

import { HeadMenuComp } from '../organisms/home/FixedMenu';
import { TopImageComp } from '../molecules/home/HomeTopImage';
import { ProfileComp } from '../molecules/home/Introduction';
import { SkillComp } from '../organisms/home/SkillCards';
import { FooterComp } from '../organisms/home/Footer';

import { rootWrap } from '../TopPage.css';

export const HomePageTemp = () => {
  return (
    <>
      <HeadMenuComp />
      <div className={rootWrap}>
        <TopImageComp />
        <Element name="profile">
          <ProfileComp />
        </Element>
        <Element name="skill">
          <SkillComp />
        </Element>
      </div>
      <FooterComp />
    </>
  );
};
