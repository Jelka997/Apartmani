class Artikal {
    constructor(jedinstveniBroj, naziv, cena, dostupnost) {
        this.jedinstveniBroj = jedinstveniBroj
        this.naziv = naziv
        this.cena = cena
        this.dostupnost = dostupnost
    }
}

const prviArtikal= new Artikli(1, "Monitor", 165, true)
const drugiArtikal = new Artikli(2, "TV", 650, false)
const treciArtikal = new Artikli(3, "Mis", 20, true)

const artikli = [prviArtikal, drugiArtikal, treciArtikal]

