//depois fazer uma geolocalização para pegar o estado da pessoa - if('geolocation' in navigator)
fetch("https://dadosabertos.camara.leg.br/api/v2/deputados?siglaUf=BA&itens=8&ordem=ASC&ordenarPor=nome")
.then(res => res.json())
.then(json => createCard(json.dados))
.catch(error => console.log(error))

const divCardCongressperson = document.querySelector("#divCardCongressperson")

async function createCard(jsonData){

    for(let i = 0; i <= jsonData.length; i++){
        const person = await dataCongressperson(jsonData[i].id)
        const newDivCard = document.createElement("div")
        newDivCard.classList.add("card-congressperson")
        newDivCard.innerHTML = `
        <img src="${person.ultimoStatus.urlFoto}" alt="Foto candidato">
        <div class="div-card-info-congressperson">
            <h3>${person.nomeCivil} (${person.ultimoStatus.siglaPartido}-${person.ultimoStatus.siglaUf})</h3>
            <p>Detalhes:</p>
            <ul>
                <li>Legislaturas em que exerceu mandato: <b>${56}ª</b></li>
                <li>Partidos pelos quais já foi deputado: <b>${"PL, PHS"}</b></li>
            </ul>
        </div>
        <div class="div-card-icons-congressperson">
            <img src="./assets/logoFacebook.png" alt="logo facebook">
            <img src="./assets/logoTwitter.png" alt="logo twitter">
            <img src="./assets/logoInstagram.png" alt="logo instagram">
        </div>
        `
        divCardCongressperson.appendChild(newDivCard)
    }
}

function dataCongressperson(id){
    return fetch(`https://dadosabertos.camara.leg.br/api/v2/deputados/${id}`)
    .then(res => res.json())
    .then(json =>{
        return json.dados
    })
    .catch(error => console.log(error))
}

const headerSection = document.getElementById("sectionHeader")
