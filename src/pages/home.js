import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import "./style.scss";
import logoGame from "./assets/logo.png"
import logoGhibli from "./assets/logoGhibli.png"
import aboutImgOne from "./assets/about-img-one.jpg"
import aboutImgTwo from "./assets/about-img-two.jpg"
import aboutImgThree from "./assets/about-img-three.jpg"
import aboutImgFour from "./assets/about-img-four.jpg"

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
            <div className="details-circle-right"></div>
            <div className="datails-circle-left"></div>
            <div className="about">
                <div className="about-text">
                    <h1>SOBRE O JOGO</h1>
                    <p className="description"> Em "Howl's Moving Castle", Sophie, uma jovem transformada em uma velha por uma bruxa, embarca em 
                        uma jornada com o feiticeiro Howl para desfazer o feitiço, enfrentando desafios e descobrindo a 
                        magia da autoaceitação ao longo do caminho. </p>
                    <p className="atention-text">
                        ** Howl's Moving Castle trata-se de um anime produzido pelo Studio Ghibli, este jogo RPG não existe,
                        é apenas um projeto ilustrativo. 
                    </p>
                </div>
                <img className="about-img" src={aboutImgOne} />
                
            </div>
        </section>
      </>
    )
  }
  
  export default Home;
  