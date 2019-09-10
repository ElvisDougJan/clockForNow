function calculaHoras(dataInicial, dataAtual) {
  let diferenca = (new Date(dataAtual.getTime()) - new Date(dataInicial).getTime()) / 1000
  diferenca /= (60 * 60)
  let horas = parseInt(diferenca)
  horas = horas < 10 ? String("0" + horas) : String(horas)
  return horas
}

function calculaMinutos(dataInicial, dataAtual) {
  let diferenca = (new Date(dataAtual).getTime() - new Date(dataInicial).getTime()) / 1000
  diferenca /= 60
  let minutos = parseInt(diferenca)
  minutos -= (60 * calculaHoras(dataInicial, dataAtual))
  minutos = minutos < 10 ? String("0" + minutos) : String(minutos)
  return minutos
}

function calculaSegundos() {
  let sec = new Date().getSeconds()
  sec = sec < 10 ? String("0" + sec) : String(sec)
  return sec
}

function cronometro(dataInicial) {
    let dataAtual = new Date().toISOString()
    let hora = calculaHoras(dataInicial, new Date(dataAtual))
    let minutos = calculaMinutos(dataInicial, new Date(dataAtual))
    let sec = calculaSegundos()
    return `${hora}:${minutos}:${sec}`
}

module.exports = cronometro
