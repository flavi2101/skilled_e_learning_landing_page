import Button from "./Button";
import style from "../style/Content.module.css";
import buttonStyle from "../style/Buttons.module.css";
export default function Content({ children }) {
  return (
    <section className={style.container}>
      <hgroup className={style.titles}>{children}</hgroup>
      <Button className={buttonStyle.buttonContent}>Get Started</Button>
    </section>
  );
}
