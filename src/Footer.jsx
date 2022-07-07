import Button from "./Components/Button";
import style from "./style/Footer.module.css";
import buttonStyle from "./style/Buttons.module.css";

export default function Footer() {
  return (
    <footer className={style.container}>
      <a href="/" className={style.logo}>
        skilled
      </a>
      <Button className={buttonStyle.buttonFotter}>Get Started</Button>
    </footer>
  );
}
