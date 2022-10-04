fetch("https://dadosabertos.camara.leg.br/api/v2/partidos?pagina=6&itens=4")
.then(res => res.json())
.then(json => createCardParty(json.dados))
.catch(error => console.log(error))

const divCardParty = document.getElementById("divCardParty")

async function createCardParty(jsonData){

    for(let i = 0; i <= jsonData.length; i++){
        const party = await dataParty(jsonData[i].id)
        const newDivCard = document.createElement("div")
        newDivCard.classList.add("card-party")
        newDivCard.innerHTML = `
        <img src="${party.urlLogo}" alt="Foto do partido">
        <div class="div-card-info-party">
            <p>${party.nome}</p>
        </div>
        <div class="div-card-icons-party">
            <img src="./assets/logoFacebook.png" alt="logo facebook">
            <img src="./assets/logoTwitter.png" alt="logo twitter">
            <img src="./assets/logoInstagram.png" alt="logo instagram">
        </div>
        `
        divCardParty.appendChild(newDivCard)
    }
}

function dataParty(id){
    console.log()
    return fetch(`https://dadosabertos.camara.leg.br/api/v2/partidos/${id}`)
    .then(res => res.json())
    .then(json =>{
        return json.dados
    })
    .catch(error => console.log(error))
}