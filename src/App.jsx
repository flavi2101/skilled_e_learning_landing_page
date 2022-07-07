import React from "react";
import Head from "./Head";
import Content from "./Components/Content";
import contentStyle from "./style/Content.module.css";
import hero from "../src/assets/image-hero-mobile.webp";
import hero2 from "../src/assets/image-hero-tablet.webp";
import hero3 from "../src/assets/image-hero-desktop.webp";
import Courses from "./Courses";
import Footer from "./Footer";

function App() {
  return (
    <React.Fragment>
      <Head></Head>
      <Content>
        <h1 className={contentStyle.title} role="heading" aria-level={1}>
          Maximize skill, minimize budget{" "}
        </h1>
        <h2 className={contentStyle.subtitle} role="heading" aria-level={2}>
          Our modern courses across a range of in-demand skills will give you
          the knowledge you need to live the life you want
        </h2>
      </Content>
      <picture className={contentStyle.herocontainer}>
        <source
          media="(min-width: 769px)"
          type="image/webp"
          srcSet={hero3}
        />
        <source
          media="(min-width: 376px) and (max-width: 769px)"
          type="image/webp"
          srcSet={hero2}
        />
        <img className={contentStyle.hero} src={hero} role="img" alt="hero" />
      </picture>
      <Courses></Courses>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default App;
