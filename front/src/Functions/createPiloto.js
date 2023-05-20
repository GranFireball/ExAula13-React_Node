export function createPiloto(nome, numero, posicao, categoria){
    fetch('http://127.0.0.1:3001/pilotos',
    {
        method: "POST",
        body: JSON.stringify({ "nome": nome, "numero": numero, "posicao": posicao, "categoria": categoria }),
        headers: {
            "Content-Type": "application/json",
        },
    })
    .then((data) => data.json())
    .then((json) => {
        alert(json);
    });
}