import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import "./style.scss";
import logoGame from "./assets/logo.png"
import logoGhibli from "./assets/logoGhibli.png"
import decorationImg from "./assets/decoration-img.jpg"
import decorationImg2 from "./assets/decoration-img2.jpg"

const Home = () => {

    const navigate = useNavigate();
    function navigateToMissions(){
        navigate("/missions");
      }
    function navigateToCharacters(){

    }

    return(
      <>
       <div className="navbar">
            <img src={logoGhibli} />
            <div className="navigation">
                <a className="selected">Home</a>
                <a onClick={navigateToMissions}>Missões</a>
                <a onClick={navigateToCharacters}>Personagens</a>
            </div>
        </div>

        <section className="banner">
            <div className="banner-img">
                <div className="shadow-home"></div>
            </div>
            <div className="title-banner">
                <img src={logoGame} alt="logo"/>
                <p>Não são nossas habilidades que mostram quem realmente somos, mas sim nossas escolhas.</p>
            </div>
        </section>
        <div className="test"></div>

        <section className="about-game">
            <div className="about-text">
                <h1>SOBRE O JOGO</h1>
                <p></p>
            </div>

            <div className="decoration-image">
                <img src={decorationImg} />
                <img src={decorationImg2} />
            </div>
        </section>
      </>
    )
  }
  
  export default Home;
  