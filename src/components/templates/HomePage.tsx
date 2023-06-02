import { Element } from 'react-scroll'

import { HeadMenuComp } from "../organisms/FixedMenu";
import { TopImageComp } from "../molecules/HomeTopImage";
import { ProfileComp } from "../molecules/Introduction";
import { SkillComp } from "../organisms/SkillCards";
import { FooterComp } from "../organisms/Footer";

export const HomePageTemp = () => {
  return (
    <>
      <HeadMenuComp />
      <TopImageComp />
      <Element name="profile">
        <ProfileComp />
      </Element>
      <Element name="skill">
        <SkillComp />
      </Element>
      <FooterComp />
    </>
  );
};
