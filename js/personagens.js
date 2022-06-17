// =====Objeto contendo os elementos do personagem

window.perso = {
    imagemPerso: document.querySelector(".imagem-personagem"),
    descricaoPerso: document.querySelector(".descricao-personagem"),
    persoList: document.querySelector(".lista-personagens"),
    persoItem: document.getElementsByClassName("item-lista"),
    filesPerso: files,
    ctgPerso: 0,
    persoStart() {
        perso.imagemPerso.src = perso.filesPerso[perso.ctgPerso].imagem
        perso.imagemPerso.alt = perso.filesPerso[perso.ctgPerso].rel
        perso.descricaoPerso.innerText = perso.filesPerso[perso.ctgPerso].descricao
    }
}

perso.persoStart()

// ====Evento atribuído aos botões para mudar a imagem e a descrição dos personagens
for (let i = 0; perso.filesPerso.length > i; i++) {
    perso.persoItem[i].addEventListener("click", function () {
        perso.ctgPerso = i

        perso.imagemPerso.setAttribute('src', perso.filesPerso[perso.ctgPerso].imagem)
        perso.imagemPerso.setAttribute('alt', perso.filesPerso[perso.ctgPerso].rel)
        perso.descricaoPerso.innerHTML = `<p>${perso.filesPerso[perso.ctgPerso].descricao}</p>`
    })
}

