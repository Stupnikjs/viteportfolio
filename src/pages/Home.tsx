import React, { useEffect, useState } from 'react';
import Footer from '../layout/Footer';
import { CSSProperties } from 'react';
import Graph from '../components/Graph';
import { faGithub, faLinkedin, faGoogle, faDocker, faReact, faJsSquare, faGolang } from '@fortawesome/free-brands-svg-icons';
import Icon from '../components/Icon';

// lien github linkedin
// representer un graph qui se construit  



const Home = () => {
    const [display, setDisplay] = useState(false)
     
    const Array1 = 
        [
            { title: "Competences", style : { backgroundColor: "", margin: "0% 0"}}, 
            { title: "Projets", style : { backgroundColor: ""}}, 
            { title: "A propos", style : { backgroundColor: ""}}, 
    
        ] 
       
    const Array2 = 
        [
            { title: "Competences", style : { backgroundColor: "", margin: "0% 0"}}, 
            { title: "Competences", style : { backgroundColor: ""}}, 
            { title: "Competences", style : { backgroundColor: ""}}, 
    
        ] 
       

    return (
        <div className='home-page'>
                    <div className='competences' style={{opacity: display? "1": "0"}}> 
                        <Icon size="3rem" icon={faDocker}></Icon>
                        <Icon size="3rem" icon={faReact}></Icon>
                        <Icon size="3rem" icon={faJsSquare}></Icon>
                        <Icon size="3rem" icon={faGolang}></Icon>
                    </div>
                    
                    <div className="container">
                        <Graph Array={Array1} setDisplayCompetences={setDisplay}></Graph>
                        <div className='title-container'>
                            <div className="font-div" style={{ display: "flex", justifyContent:"center", gap: "2%"}}>
                                <Icon size="1.5rem" icon={faGithub}></Icon>
                                <Icon  size="1.5rem" icon={faLinkedin}></Icon>
                                <Icon size="1.5rem" icon={faGoogle}></Icon>
                            </div>
                            <div className="title">
                                        
                                    <h1>Mon Portfolio de Developpeur Javascript/GoogleCloud</h1> 
                            </div>
                        </div>
                        
                        <Graph Array={Array2}></Graph>
                    </div>
                    
        <Footer></Footer>
        </div>
    );
};

export default Home; 