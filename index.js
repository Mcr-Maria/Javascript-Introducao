// let mes = prompt("Digite o mês do seu nascimento(ex: jan):");
// let dia = prompt("Pegue o dia que você nasceu(ex: 1 - 31):");
// let escolhaMes = "";
// let escolhaDia = "";


// switch(mes){
//     case "jan":
//     nomeDaBanda = "Capirotos";
//     break;
//     case "fev":
//     nomeDaBanda = "Lendários";
//     break;    
//     case "marc":
//     nomeDaBanda = "Soldados";
//     break;
//     case "abr":
//     nomeDaBanda = "Faroestes";
//     break;
//     case "mai":
//     nomeDaBanda = "Fodões";
//     break;
//     case "jun":
//     nomeDaBanda = "Monstros";
//     break;
//     case "jul":
//     nomeDaBanda = "Fanfarrões";
//     break;
//     case "ago":
//     nomeDaBanda = "Baderneiros";
//     break;
//     case "set":
//     nomeDaBanda = "Pertubados";
//     break;
//     case "out":
//     nomeDaBanda = "Aliens";
//     break;
//     case "nov":
//     nomeDaBanda = "Revoltados";
//     break;
//     case "dez":
//     nomeDaBanda = "Gigantes";
//     break;
// }
// switch(mes) {
//     case "dia 1":
//         nomeDaBanda = "do Espaco";
//         break;
//     case "dia 2":
//         nomeDaBanda = "do Inferno";
//         break;
//     case "dia 3":
//         nomeDaBanda = "da Galaxia";
//         break;
//     case "dia 4":
//         nomeDaBanda = "da Fazenda";
//         break;
//     case "dia 5":
//         nomeDaBanda = "do Diabo";
//         break;
//     case "dia 6":
//         nomeDaBanda = "do Japão";
//         break;
//     case "dia 7":
//         nomeDaBanda = "das Trevosas";
//         break;    
//     case "dia 8":
//         nomeDaBanda = "do Fundão";
//         break;  
//     case "dia 9":
//         nomeDaBanda = "dos Illuminatis";
//         break;
//     case "dia 10":
//         nomeDaBanda = "de Cobacana";
//         break; 
//     case "dia 11":
//         nomeDaBanda = "das Trevas";
//         break; 
//     case "dia 12":
//         nomeDaBanda = "Cablocos";
//         break;   
//     case "dia 13":
//         nomeDaBanda = "Da Muralha";
//         break;
//     case "dia 14":
//         nomeDaBanda = "Voadores";
//         break; 
//     case "dia 15":
//         nomeDaBanda = "do tempo";
//         break;      
// }
// console.log("-Nome de roqueiro!")


// console.log("Nome da Banda")
// alert(`Mês ecolhido ${mes}, dia escolhido ${dia}`);
// console.log(`Seu nome de roqueiro é: ${escolhaMes} ${escolhaDia}`)


function descobrirNome(){
    let diaEscolhido = document.querySelector("#dia").value;
    let mesEscolhido = document.querySelector("#mes").value;

let escolhaMes = "";
let escolhaDia = "";


switch (mesEscolhido) {
    case "1":
        escolhaMes = "Capirotos";
        break;
    case "2":
        escolhaMes = "chupacabras";
        break;
    case "3":
        escolhaMes = "eliotarios";
        break;
    case "4":
        escolhaMes = "pingas";
        break;
    case "5":
        escolhaMes = "jumentinos";
        break;
    case "6":
        escolhaMes = "pipoqueiros";
        break;
    case "7":
        escolhaMes = "sartuninos";
        break;
    case "8":
        escolhaMes = "salamaleicos";
        break;
    case "9":
        escolhaMes = "soweto";
        break;

    case "10":
        escolhaMes = "abutres";
        break;
    case "11":
        escolhaMes = "taxistas";
        break;
    case "12":
        escolhaMes = "artpopular"
        break;

}

switch (diaEscolhido) {
    case "1":
        escolhaDia = "do papa";
        break;
    case "2":
        escolhaDia = "Do caca";
        break;
    case "3":
        escolhaDia = "Da guia";
        break;
    case "4":
        escolhaDia = "Do papoco";
        break;
    case "5":
        escolhaDia = "Do faro ";
        break;
    case "6":
        escolhaDia = "Do papai";
        break;
    case "7":
        escolhaDia = "Das chagas";
        break;
    case "8":
        escolhaDia = "Do bau";
        break;
    case "9":
        escolhaDia = "Dos faustos";
        break;
    case "10":
        escolhaDia = "De piupiu";
        break;
    case "11":
        escolhaDia = "Das almas";
        break;
    case "12":
        escolhaDia = "podres";
        break;
    case "13":
        escolhaDia = "da silva";
        break;
    case "14":
        escolhaDia = "tchutchuca";
        break;
    case "15":
        escolhaDia = "Do tempo";
        break;
    case "16":
        escolhaDia = "Do grilo";
        break;
    case "17":
        escolhaDia = "alexandre de morais";
        break;
    case "18":
        escolhaDia = "limões";
        break;
    case "19":
        escolhaDia = "nescal";
        break;
    case "20":
        escolhaDia = "Maloqueiros";
        break;
    case "21":
        escolhaDia = "pimpao";
        break;
    case "22":
        escolhaDia = "machupichu";
        break;
    case "23":
        escolhaDia = "samurai";
        break;
    case "24":
        escolhaDia = "fulos";
        break;
    case "25":
        escolhaDia = "mascara";
        break;
    case "26":
        escolhaDia = "zuados";
        break;
    case "27":
        escolhaDia = "Da ilha do dicaprio";
        break;
    case "28":
        escolhaDia = "Da praia";
        break;
    case "29":
        escolhaDia = "Rebel laion";
        break;
    case "30":
        escolhaDia = "psicodelicos";
        break;
    case "31":
        escolhaDia = "Do snaif";
        break;

    }


alert(`O nome da sua banda é ${escolhaMes} ${escolhaDia}`);

}