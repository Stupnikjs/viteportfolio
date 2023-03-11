import React, { useState } from 'react';

interface Props {
    NodeStyle: React.CSSProperties,
    Text: string, 
    setDisplay?: Function 
}


const Node = ({NodeStyle, Text, setDisplay}:Props) => {
    const [hovered, setHovered] = useState(false)
    const [style, SetStyle] = useState(NodeStyle)

    return (
        <div className='node' style={style} 
        onMouseOver={e => {setHovered(true); SetStyle({...NodeStyle, boxShadow: ".2rem .2rem 0.05em grey, -.2rem -.2rem 0.05em grey "}); Text==="Competences" && setDisplay ? setDisplay(true):"" }}
        onMouseOut={e => {setHovered(false), SetStyle({...NodeStyle}) ; setDisplay ? setDisplay(false): ""}}>
            { hovered ? Text : ""}
        </div>
    );
};

export default Node;