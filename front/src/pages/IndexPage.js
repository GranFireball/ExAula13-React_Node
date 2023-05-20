import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Piloto from "../components/Piloto";


export default function IndexPage() {
    const [pilotos, setPilotos] = useState();
    const navigate = useNavigate();

    function getPilotos() {
        fetch('http://127.0.0.1:3001/pilotos',
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then((data) => data.json())
            .then((json) => {
                setPilotos(json);
            });
    }
    

    return (
        <>
            <h1>Pilotos</h1>
            <button onClick={() => navigate('/criar')}>Novo Piloto</button>
            <button onClick={getPilotos}>Listar Pilotos</button>
            <div className="headerList">
                <span>nome</span>
                <span>numero</span>
                <span>posicao</span>
                <span>categoria</span>
            </div>
            {pilotos &&   
            
            pilotos.map((piloto) => {
                return <Piloto key={piloto._id} id={piloto._id} nome={piloto.nome} numero={piloto.numero} posicao={piloto.posicao} categoria={piloto.categoria}/>
           
            })
            }
        </>
    );
}