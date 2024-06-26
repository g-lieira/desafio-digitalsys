import logoGame from "../../assets/logo.png"
import aboutImgOne from "../../assets/about-img-one.jpg"
import Header from "../../components/header";
import "./style.scss"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Home = () => {

    return(
      <>
        <Header home='selected'/>

        <section className="banner">
            <div className="banner-img">
                <div className="shadow-home"></div>
            </div>
            <div className="title-banner">
                <img src={logoGame} alt="logo game"/>
                <p>Não são nossas habilidades que mostram quem realmente somos, mas sim nossas escolhas.</p>
            </div>
            <div className="arrow-down">
                <KeyboardArrowDownIcon style={{color: 'white', fontSize: '3rem', transition: 'transform 0.3s'}}/>
            </div>
        </section>
        <div className="shadow"></div>

        <section id="aboutGame" className="about-game">
            <div className="details-circle-right"></div>
            <div className="datails-circle-left"></div>
            <div className="about">
                <div className="about-text">
                    <h1>SOBRE O JOGO</h1>
                    <p className="description"> Em "Howl's Moving Castle", Sophie, uma jovem transformada em uma velha por uma bruxa, embarca em 
                        uma jornada com o feiticeiro Howl, Calcifer e Markl para enfrentar desafios e salvar o mundo de ameaças sombrias. </p>
                    <p className="atention-text">
                        ** Howl's Moving Castle trata-se de um anime produzido pelo Studio Ghibli, este jogo RPG não existe,
                        é apenas um projeto ilustrativo. 
                    </p>
                </div>
                <img className="about-img" src={aboutImgOne} alt="" />
                
            </div>
        </section>
      </>
    )
  }
  
  export default Home;
  