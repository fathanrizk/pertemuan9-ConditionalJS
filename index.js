function pengurangan (nilai1,nilai2){
    const hasil = nilai1-nilai2
    return `Hasil pengurangan ${nilai1} - ${nilai2} adalah ${hasil}`
}

const pengurangan1 = pengurangan(10,2)
const pengurangan2 = pengurangan(11,3)
const pengurangan3 = pengurangan(3,10)
const pengurangan4 = pengurangan(3,5)

console.log(pengurangan3);


//Menghitung panjang String
function countString(param1){
    const lengthText = param1.length
    return lengthText
}

const text = countString("Saya Tampan")
console.log(text);

// Menghitung nilai rata-rata 10 murid
//function rata_rata(...param) = res parameter
function rata_rata(a,b,c,d,e,f,g,h,i,j){
    const hitungRerata = (a+b+c+d+e+f+g+h+i+j)/arguments.length
    // console.log(arguments.length);
    //Arguments.length adalah untuk mengetahui panjang/banyak parameter yg digunakan
    return hitungRerata
}

const nilai = rata_rata(4,5,1,6,7,8,5,9,5,9)
console.log(nilai);

//Mengetahui tipe data variabel
function dataType(param1){
    const type=typeof param1
    return type
}

const data = dataType(true)
console.log(data);

//Operator percabangan
//==, ===, >, >=, <, <=, !=, !, !!


//Contoh percabangan IF
const nilaiUTS = 50

if(nilaiUTS > 70){
    console.log("lulus");
}else if(nilaiUTS > 50 && nilaiUTS <=70){
    console.log("remedi");
}else{
    console.log("Belum Belajar ya");
}

//Percabangan Pintar cantik Seiman

const smart = false
const beuty = true
const sameReligion = true

if(smart === true && sameReligion === true){
    console.log("Menikah");
}else if(smart === true && !sameReligion === false){
    console.log("Gagal menikah 1");
}else if(beuty === true && sameReligion === true){
    console.log("Gagal Menikah 2");
}else{
    console.log("Gagal menikah 3");
}

//Percabangan dijajah dan merdeka
const tahun = 1945

if(tahun < 1945 ){
    console.log("Belum merdeka");
}else if(tahun >=1945){
    console.log("Merdeka");
}else{
    console.log("Gatau");
}

//percabangan
// jika > 80 Excellent
// >= 60 <= 80 good job
// >=50 < 60 kamu ngulang
// else tidak naik kelas
const rapot = 59

if( rapot > 80){
    console.log("Excellent");
} else if (rapot >= 60 && rapot <= 80){
    console.log("Good Job");
} else if (rapot >=50 && rapot < 60){
    console.log("Mengulang");
} else{
    console.log("Tidak naik kelas");
}

//Contoh soal FizzBuzz

function fizzbuzz(param){
    let result

    if(param % 3 === 0 && param % 5 === 0){
        result = "FizzBuzz"
    }else if(param % 5 === 0){
        result = "Buzz"
    }else if(param % 3 === 0){
        result =  "Fizz"
    }else{
        result =  "Semangat"
    }
    return result
}

const hitung_fizz = fizzbuzz(4)
console.log(hitung_fizz);

//anagram, palindrome, binary tree, valid{}, sorting
