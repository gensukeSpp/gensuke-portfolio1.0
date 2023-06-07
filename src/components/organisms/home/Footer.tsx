import { footer } from '../../TopPage.css';

export const FooterComp = () => {
  return (
    <>
      <section className={footer.contactWrap}>
        <h4 className={footer.h4contact}>CONTACT</h4>
        相原 学 <a href="mailto:win_mint.7v903@outlook.jp">こちらへ</a>
      </section>
      <div className={footer.beltWrap}>
        <p className={footer.copyright}>copyright © 2023 All Right Reserved.</p>
      </div>
    </>
  );
};
