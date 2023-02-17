import React, {useEffect, useState} from 'react';
import Edge from './Edge';


interface Edgeprops {
    [key:string] : string
}


const Graph = ({top, left, rotate}:Edgeprops) => {
    const [bold, setBold] = useState(false)
    const mouseHandler = (e) => {
        e.preventDefault()
        setBold(true)
    }
    useEffect(() => {
    let interval = setInterval(()=> {
        setBold(!bold)
     }, 1000) 
     return () => {
        clearInterval(interval)
     }
    }, [bold])

    return (
        <div className='graph' onMouseOver={mouseHandler} style={{
            top: top, 
            left: left, 
            transform: `rotate(${rotate})`
            
        }}>
            <Edge></Edge>
                <div className='node' style={{
                    outline: bold? ".5px solid grey": "none"
                }}></div>
            <Edge></Edge>
        </div>
    );
};

export default Graph;