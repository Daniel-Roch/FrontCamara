fetch("https://dadosabertos.camara.leg.br/api/v2/votacoes?dataInicio=2022-09-01&dataFim=2022-10-01&itens=5")
.then(res => res.json())
.then(json => createCardVote(json.dados))
.catch(error => console.log(error))

const tbodyVote = document.getElementById("tbodyVote")

async function createCardVote(jsonData){

    for(let i = 0; i <= jsonData.length; i++){
        const vote = await dataVote(jsonData[i].id)
        const newDivCard = document.createElement("tr")
        newDivCard.classList.add("tr-vote")
        newDivCard.innerHTML = `
            <td><b>${vote.objetosPossiveis[0].codTipo}/${vote.objetosPossiveis[0].ano}</b></td>
            <td colspan="2">${vote.descUltimaAberturaVotacao}</td>
            <td>Em tramitação</td>
        `
        tbodyVote.appendChild(newDivCard)
    }
}

function dataVote(id){
    return fetch(`https://dadosabertos.camara.leg.br/api/v2/votacoes/${id}`)
    .then(res => res.json())
    .then(json =>{
        return json.dados
    })
    .catch(error => console.log(error))
}