import React from 'react';
import { useNavigate } from 'react-router-dom';
import { deletePiloto } from '../Functions/deletePiloto'

function Piloto({ id, nome, numero, posicao, categoria }) {
    const navigate = useNavigate();
    return (
        <div className="headerList">
        <div className="piloto">
            <span>{nome}</span>
            <span>{numero}</span>
            <span>{posicao}</span>
            <span>{categoria}</span>
            
        </div>
        <button onClick={() => navigate('/editar/'+id)}>Editar</button>
        <button onClick={() => deletePiloto(nome)}>Remover</button>
        </div>
    );
}

export default Piloto;
