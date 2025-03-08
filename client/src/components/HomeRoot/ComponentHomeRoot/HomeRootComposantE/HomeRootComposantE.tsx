import style from "./HomeRootComposantE.module.css";
import AnneSAUNIER from "../../../../assets/Images/AnneSAUNIER/AnneSAUNIER.jpg"

function HomeRooteComposantE() {
  return (
    <section className={style.profilecard}>
        <header className={style.ContainerTitle}>
            <h2 className={style.Title}>
                Un peu plus sur moi ?
            </h2>
        </header>
      <img src={AnneSAUNIER} alt="Photo de la cliente" className={style.profileimage} />
      <p className={style.profiletext}>
        l
      </p>
    </section>
  );
};

export default HomeRooteComposantE;
