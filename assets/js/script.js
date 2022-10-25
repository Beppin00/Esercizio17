let day = new Date ();

const mesi = [
  "Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio",
  "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"
];

let n = day.getMonth();


document.getElementById("dataMese").innerHTML = `${day.getDate()} / ${mesi[n]} / ${day.getFullYear()}`;


document.getElementById("data").innerHTML += day;


document.getElementById("giorno").innerHTML+=day.getDate();


document.getElementById("mese").innerHTML += mesi[n];


document.getElementById("dataMeseGiorno").innerHTML = `${day.getDate()} / ${day.getMonth()+1} / ${day.getFullYear()}`;



setInterval(mytimer, 1000);

function mytimer(){
  const orologio = new Date();

  if (day.getHours()>=5 && day.getHours()<=11){
    document.getElementById("tempo").innerHTML = orologio.toLocaleTimeString()+" Buongiorno";
  }
  else if (day.getHours() >= 12 && day.getHours() <= 17){
    document.getElementById("tempo").innerHTML = orologio.toLocaleTimeString()+" Buon pomeriggio";
  }
  
  else if (day.getHours() >= 18 && day.getHours() <= 22){
    document.getElementById("tempo").innerHTML = orologio.toLocaleTimeString()+" Buonasera";
  }
  
  else if (day.getHours() >= 23 && day.getHours() <= 2) {
    document.getElementById("tempo").innerHTML = orologio.toLocaleTimeString()+" Buonanotte";
  }
  
  else {
    document.getElementById("tempo").innerHTML = orologio.toLocaleTimeString()+" Buon riposo";
  }

}











