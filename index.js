let mes = prompt("digite o mês de seu nascimento(ex: jan):");
// alert(`mês escolhido ${mes}`);
let dia = prompt("digite o dia de seu nascimento(ex: 1-31):");
let nomeDaBanda = "";


switch(mes){
    case "jan":
    nomeDaBanda = "Capirotos";
    break;
    case "fev":
    nomeDaBanda = "Lendários";
    break;    
    case "marc":
    nomeDaBanda = "Soldados";
    break;
    case "abr":
    nomeDaBanda = "Faroestes";
    break;
    case "mai":
    nomeDaBanda = "Fodões";
    break;
    case "jun":
    nomeDaBanda = "Monstros";
    break;
    case "jul":
    nomeDaBanda = "Fanfarrões";
    break;
    case "ago":
    nomeDaBanda = "Baderneiros";
    break;
    case "set":
    nomeDaBanda = "Pertubados";
    break;
    case "out":
    nomeDaBanda = "Aliens";
    break;
    case "nov":
    nomeDaBanda = "Revoltados";
    break;
    case "dez":
    nomeDaBanda = "Gigantes";
    break;
}
switch(mes) {
    case "dia 1":
        nomeDaBanda = "do Espaco";
        break;
    case "dia 2":
        nomeDaBanda = "do Inferno";
        break;
    case "dia 3":
        nomeDaBanda = "da Galaxia";
        break;
    case "dia 4":
        nomeDaBanda = "da Fazenda";
        break;
    case "dia 5":
        nomeDaBanda = "do Diabo";
        break;
    case "dia 6":
        nomeDaBanda = "do Japão";
        break;
    case "dia 7":
        nomeDaBanda = "das Trevosas";
        break;    
    case "dia 8":
        nomeDaBanda = "do Fundão";
        break;  
    case "dia 9":
        nomeDaBanda = "dos Illuminatis";
        break;
    case "dia 10":
        nomeDaBanda = "de Cobacana";
        break; 
    case "dia 11":
        nomeDaBanda = "das Trevas";
        break; 
    case "dia 12":
        nomeDaBanda = "Cablocos";
        break;   
    case "dia 13":
        nomeDaBanda = "Da Muralha";
        break;
    case "dia 14":
        nomeDaBanda = "Voadores";
        break; 
    case "dia 15":
        nomeDaBanda = "do tempo";
        break;      
}
console.log("Nome da Banda")
alert(`mês escolhido ${mes} dia ${dia}`);
alert(`o nome da sua banda é ${nomeDaBanda}`);

