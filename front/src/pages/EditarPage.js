import { useRef } from "react";
import { useParams } from "react-router-dom";
import { editPiloto } from "../Functions/editPiloto";

export default function EditarPage(){
    const nome = useRef(null);
    const numero = useRef(null);
    const posicao = useRef(null);
    const categoria = useRef(null);
    const {id} = useParams();


    return(
        <>
        <h1>Piloto {id}</h1>
        <span>nome</span>
        <input type='text' ref={nome} placeholder="Nome"/>
        <span>numero</span>
        <input type='text' ref={numero} placeholder="Número"/>
        <span>posicao</span>
        <input type='text' ref={posicao} placeholder="Posicao"/>
        <span>categoria</span>
        <input type='text' ref={categoria} placeholder="Categoria"/>
        <button onClick={() => editPiloto(id, nome.current.value, numero.current.value, posicao.current.value, categoria.current.value)}>Editar</button>
        </>
    );
}