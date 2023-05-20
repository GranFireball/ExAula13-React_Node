export function editPiloto(id, nome, numero, posicao, categoria){
    fetch('http://127.0.0.1:3001/pilotos',
    {
        method: "PUT",
        body: JSON.stringify({ "_id": id, "nome": nome, "numero": numero, "posicao": posicao, "categoria": categoria}),
        headers: {
            "Content-Type": "application/json",
        },
    })
    .then((data) => data.json())
    .then((json) => {
        alert(json);
    });
}