`use strict`

class Artikal {
    constructor(jedinstveniBroj, naziv, cena, dostupnost) {
        this.jedinstveniBroj = jedinstveniBroj
        this.naziv = naziv
        this.cena = cena
        this.dostupnost = dostupnost
    }
}

const prviArtikal = new Artikal(1, "Monitor", 165, true)
const drugiArtikal = new Artikal(2, "TV", 650, false)
const treciArtikal = new Artikal(3, "Mis", 20, true)

const artikli = [prviArtikal, drugiArtikal, treciArtikal]

const table = document.querySelector("#artikli")
table.style.border = "1px solid black"
table.setAttribute("width", "60%")
table.setAttribute("height", "200")

table.style.borderCollapse = "collapse"
let prviRed = table.querySelectorAll("th")
prviRed.forEach(red => {
    red.style.border = "1px solid black"
})

let ths = document.querySelectorAll('th')
ths[0].textContent = "Br"
ths[2].textContent = "Cena($)"
ths[3].textContent = "Dostupan"


for (let artikal of artikli) {
    let tr = document.createElement("tr")
    let jedinstveniBroj = document.createElement("td")
    let naziv = document.createElement("td")
    let cena = document.createElement("td")
    let dostupnost = document.createElement("td")

    jedinstveniBroj.style.border = "1px solid black"
    naziv.style.border = "1px solid black"
    cena.style.border = "1px solid black"
    dostupnost.style.border = "1px solid black"

    jedinstveniBroj.textContent = artikal.jedinstveniBroj
    naziv.textContent = artikal.naziv
    cena.textContent = artikal.cena
    if (artikal.dostupnost) {
        dostupnost.textContent = "DA"
    } else {
        dostupnost.textContent = "NE"
    }

    tr.appendChild(jedinstveniBroj)
    tr.appendChild(naziv)
    tr.appendChild(cena)
    tr.appendChild(dostupnost)

    if (!artikal.dostupnost) {
        tr.style.backgroundColor = "red"
    }

    table.appendChild(tr)

    let tabela = document.querySelectorAll("#artikli th, #artikli td")
    tabela.forEach(text => {
        text.style.textAlign = "center"
        text.style.verticalAlign = "middle"
    })

}
