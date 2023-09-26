import { useState } from "react"

function Home(){
    return <div>
        <h1>Home</h1>
        <Contador />
        </div>
}

function Contador(){
    const [contador,setContador] = useState(1);
    
    function adicionarContador(){
        setContador(contador+1);
    }
    function subtrairContador(){
        setContador(contador-1);
    }
    
    return(
        <div>
        <div>{contador}</div>
        <button onClick={adicionarContador}>+</button>
        <button onClick={subtrairContador}>-</button>
        </div>
    )
}


export default Home