let data = new Date();
let ora = data.getHours();
let minuti = data.getMinutes();

if (ora > 5 && ora < 12) {
    document.getElementById("tempo").innerHTML = `<span>Buongiorno, sono le ${ora}:${minuti}.</span>`;
}
else if (ora > 12 && ora < 18) {
    document.getElementById("tempo").innerHTML = `<span>Buon pomeriggio, sono le ${ora}:${minuti}.</span>`;
}
else {
    document.getElementById("tempo").innerHTML = `<span>Buonasera, sono le ${ora}:${minuti}.</span>`;
}