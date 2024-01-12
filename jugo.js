/* progrando con funciones felchas */

const piezasManzanas = (numManzana) => 4 * numManzana
const piezasPera = (numPeras) => 3 * numPeras

const hacerZUmo = (numManzana, numPeras) => {
    const numeropiezasManzana = piezasManzanas(numManzana)
    const numeropiezasPera = piezasPera(numPeras)
    const totaldepiezas = numeropiezasManzana + numeropiezasPera
    return totaldepiezas
}



console.log(`haz utilizado ${hacerZUmo(3, 4)}`)la es