import * as React from 'react'
import logoGhibli from "../assets/logoGhibli.png"
import "./style.scss"


const Header = (props) => {
    return(
      <>
       <div className='navbar'>
            <img src={logoGhibli} alt="logo ghibli"/>
            <div className='navigation'>
                <a href='/' className={props.home}>Home</a>
                <a href='missions' className={props.missions}>Missões</a>
                <a href='character' className={props.character}>Personagens</a>
            </div>
        </div>
      </>
    )
  };
  
export default Header;
  