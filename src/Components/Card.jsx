import React from "react";
import style from "../style/Card.module.css"

export default function Card({ title, altText, icon, children }) {
    return (
      <section className={style.card} >
        <img className={style.icon} src={icon} alt={altText} role='presentation'/>
        <h2 className={style.title}>{title}</h2>
        {children}
        <a className={style.link} role='link' href="/">Get Started</a>
      </section>
    );
  }