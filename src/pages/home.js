import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import "./style.scss";
import logoGame from "./assets/logoGame.png"

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
            <a className="selected">Home</a>
            <a onClick={navigateToMissions}>Missões</a>
            <a onClick={navigateToCharacters}>Personagens</a>
            <div className="shadowNavBar"></div>
        </div>
      <div className="banner">
        <img src={logoGame} alt="Ilustração" />
        <div className="shadowHome"></div>
      </div>
      </>
    )
  }
  
  export default Home;
  