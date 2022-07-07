import Button from "./Components/Button";
import style from "./style/Head.module.css";
import buttonStyle from "./style/Buttons.module.css";

export default function Head() {
  return (
    <header className={style.header}>
      <a href="/" className={style.logo}>
        skilled
      </a>
      <Button className={buttonStyle.buttonHead}>Get Started</Button>
    </header>
  );
}
