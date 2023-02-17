import React from 'react';
import Edge from '../components/Edge';
import Graph from '../components/Graph';
import CustomLink from '../components/CustomLink';

const params = {
    top: "20%",
    left: "40%", 
    rotate: "20deg"
}



const Test = () => {
    const mouseOverHandler = (e:any) => {
        e.preventDefault()

    }

    const arrProps: CustomLinkProps[] = [{
        href: "/experience", 
        onMouseOver: mouseOverHandler, 
        style: {top: "-20%", left: "0%", opacity: true ? "1": "0"}
    }, {
        href: "/competences", 
        onMouseOver: mouseOverHandler, 
        style: {bottom: "0%", left: "calc(-50px + 0.5vw)", writingMode: "vertical-lr", opacity: true ? "1": "0"}
    }
    , {
        href: "/certifications", 
        onMouseOver: mouseOverHandler, 
        style: {top: "0%", right: "calc(-50px + 0.5vw)" , writingMode: "vertical-lr", opacity: true ? "1": "0"}
}, {
    href: "/contact", 
    onMouseOver: mouseOverHandler, 
    style : {right: "0%", bottom: "-20%", opacity: true ? "1": "0"}
    
}

    ]


    const nav = () => {return([
<CustomLink {...arrProps[0]}></CustomLink>, 
<CustomLink {...arrProps[1]}></CustomLink> ,
<CustomLink {...arrProps[2]}></CustomLink>,  
<CustomLink {...arrProps[3]}></CustomLink> 

    ])}
       


    return (
        <div className='test-page'>
            <Graph {...params}></Graph>
            <div className='center-div' style={{position: "relative"}} >
                        <nav>{ ...nav() }</nav>
                        <div className="title">
                            Mon Portfolio de Developpeur Javascript / Data Scientist
                        </div>
            </div>
        </div>
    );
};

export default Test;