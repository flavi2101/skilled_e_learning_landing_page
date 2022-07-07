import Card from "./Components/Card";
import style from "./style/Courses.module.css";
import animation from "./assets/icon-animation.svg";
import desing from "./assets/icon-design.svg";
import photography from "./assets/icon-photography.svg";
import crypto from "./assets/icon-crypto.svg";
import business from "./assets/icon-business.svg";
import styleTextCard from "./style/Card.module.css";

export default function Courses() {
  return (
    <section className={style.container}>
      <h1 className={style.title}>Check out our most pupular courses!</h1>
      <Card icon={animation} title="Animation" altText="icon-animation">
        <p className={styleTextCard.info}>
          Learn the latest animation techniques to create stunning motion design
          and captivate your audience.
        </p>
      </Card>
      <Card icon={desing} title="Design " altText="icon-desing">
        <p className={styleTextCard.info}>
          Create beautiful, usable interfaces to help shape the future of how
          the web looks.
        </p>
      </Card>
      <Card icon={photography} title="Photography " altText="icon-Photography ">
        <p className={styleTextCard.info}>
          Explore critical fundamentals like lighting, composition, and focus to
          capture exceptional photos.
        </p>
      </Card>
      <Card icon={crypto} title="Crypto " altText="icon-Crypto ">
        <p className={styleTextCard.info}>
          All you need to know to get started investing in crypto. Go from
          beginner to advanced with this 54 hour course.
        </p>
      </Card>
      <Card
        icon={business}
        title="Business "
        altText="icon-business"
        styles={{ backgroundColor: "blue" }}
      >
        <p className={styleTextCard.info}>
          All you need to know to get started investing in crypto. Go from
          beginner to advanced with this 54 hour course.
        </p>
      </Card>
    </section>
  );
}
