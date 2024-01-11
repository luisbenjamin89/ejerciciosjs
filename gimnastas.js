const puntuacionEspaña=[97, 112,101]
const puntuacionfrancia = [109, 95 ,123]

function calculaMedia(datos){

    let totalpuntualcion =0

    for (let i = 0; i < datos.length; i++) {
        totalpuntualcion += datos[i]
    }
    return totalpuntualcion / datos.length

}

function mostrarGanador(){

    const mediaEspaña = calculaMedia(puntuacionEspaña)
    const mediafrancia = calculaMedia(puntuacionfrancia)

    if(mediaEspaña < mediafrancia&&mediafrancia>100)
    {
        console.log('GANA Francia')
    } 
    else if (mediafrancia > mediaEspaña && mediaEspaña > 100) {
        console.log('GANA España')
    } else {
        console.log('Empate')
    }
}

mostrarGanador()
module.exports ={calculaMedia,mostrarGanador}

/*
Datos: España: 96, 108 y 89. Francia 88, 91 y 110.
España 97, 112 y 101.  Francia 109, 95 y 123
*/