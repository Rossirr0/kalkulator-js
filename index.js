const readline =require("readline-sync")

const angkaPertama = parseFloat(readline.question("Masukkan Angka Pertama :"));
const operator = readline.question("Masukkan Operator (+,-,*,/) :");
const angkaKedua =  parseFloat(readline.question("Masukkan Angka Kedua :"));

if (isNaN(angkaPertama) || isNaN(angkaKedua)){
    return console.log("Inputan tidak sesuai !!!");
} else {


const hasil = execute(angkaPertama,operator,angkaKedua);
console.log(`Hasilnya adalah ${hasil}`);

}

function execute(angkaPertama,operator,angkaKedua){
    switch (operator) {
        case "+":
            return angkaPertama + angkaKedua;
        case "-":
            return angkaPertama - angkaKedua;
        case "*":
            return angkaPertama * angkaKedua;
        case "/":
            if (angkaKedua === 0){
                return console.log("Error: Tidak bisa dibagi dengan nol")
            }

            return angkaPertama / angkaKedua
        case "%":
                
        default:
        console.log("operator tidak valid");


    }
}