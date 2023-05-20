import { useRef } from "react";
import { createPiloto} from '../Functions/createPiloto';

export default function CriarPage(){
    const nome = useRef(null);
    const numero = useRef(null);
    const posicao = useRef(null);
    const categoria = useRef(null);



    return(
        <>
        <h1>Novo Piloto</h1>
        <span>nome</span>
        <input type='text' ref={nome} placeholder="Nome"/>
        <span>numero</span>
        <input type='text' ref={numero} placeholder="Número"/>
        <span>posicao</span>
        <input type='text' ref={posicao} placeholder="Posicao"/>
        <span>categoria</span>
        <input type='text' ref={categoria} placeholder="Categoria"/>
        <button onClick={() => createPiloto(nome.current.value, numero.current.value, posicao.current.value, categoria.current.value)}>Criar</button>
        </>
    );
}