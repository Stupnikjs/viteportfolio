import React, {useEffect, useState} from 'react';
import Node from './Node';

interface Obj {
    title: string, 
    style : React.CSSProperties
}

interface Props {
    Array: Obj[] , 
    setDisplayCompetences?:Function, 
}

const Graph = ({Array, setDisplayCompetences}:Props) => {

  

    return (
        <div className='graph'  >
                   {
                    Array.map((el:Obj) => {
                        return <Node Text={el.title} setDisplay={setDisplayCompetences} NodeStyle={el.style}></Node>
                    })
                   } 
                    
                  
        </div>
    );
};

export default Graph;