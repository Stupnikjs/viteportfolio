import React, { useEffect, useState } from 'react';
import Footer from '../layout/Footer';
import CustomLink from '../components/CustomLink';
import { CSSProperties } from 'react';
import Graph from '../components/Graph';

// lien github linkedin
// representer un graph qui se construit  


interface Css {
    [key:string]: string
}

interface CustomLinkProps {
    href: string, 
    onMouseOver: Function, 
    style: CSSProperties

}


const Home = () => {

    const graphProp1 = {
        
    }
    const graphProp2 = {
        top: "30%",
        left: "20%",
        rotate: "140deg"
    }
    const graphProp3 = {
        top: "50%",
        left: "40%",
        rotate: "40deg"
    }

    const getRandomGraphProp = (n:number) => {
        let random = Math.round(Math.random())*20
        return {
            top: `${(n*10).toString()}%`,
            left: `${(10+Math.pow(2, n)-random).toString()}%`,
            rotate: `${(random+n).toString()}deg`
        }
    }


    useEffect(() =>{
        

    },[])
        
        
    
     

    return (
        <div className='home-page'>
                <Graph {...getRandomGraphProp(2)}></Graph>
                <Graph {...getRandomGraphProp(4)}></Graph>
                <Graph {...getRandomGraphProp(5)}></Graph>
                <Graph {...getRandomGraphProp(6)}></Graph>
                <Graph {...getRandomGraphProp(1)}></Graph>
                <Graph {...getRandomGraphProp(5)}></Graph>
                <Graph {...getRandomGraphProp(6)}></Graph>
                <Graph {...getRandomGraphProp(1)}></Graph>
                <div className="container"> 
                    <div className="title">
                                Mon Portfolio de Developpeur Javascript / Data Scientist
                    </div>
                </div>
        <Footer></Footer>
        </div>
    );
};

export default Home;