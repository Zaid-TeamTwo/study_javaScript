
//var, let sama const
//var >> variable, const >> constanta
//untuk sekarang simple penggunaan var dihindari
//sekarang hanya gunakan let atau const
// untuk sesuatu yang nilainya boleh diubah gunakanlah let
// untuk sesuatu yang nialinya tetap/ tidak berubah gunakan const

//variable naming
//gunakan naming yang merepresent
//kalau tidak akan membingungkan di masa depan

// convention naming case JS adalah camel Case

//data type number
//let number = 1;

//data type string
let string = "test"

const PRIMARY_COLOR = '#000000';
const SECONDARY_COLOR = '#555555';
let headerColor = PRIMARY_COLOR;
let borderColor = SECONDARY_COLOR;

let number = 20
//naming merepresent apa nilai dari yang sedang dilakukan
let isEven = number % 2 === 0;

let height = 180;
let isTall = height > 80; 
// console.log(isTall);
//true or false disebut dengan boolean

// let brand = "Iphone";
// let name = "17 Pro Max";
// let feature =  "Telescopic Zoom";
// let releaseYears = 2025;

//Lebih baik pakai object

let phone = {
    brand: "Iphone",
    name: "17 Pro Max",
    releaseYears: 2025,
    isHaveCamera: true,
};
console.log("phone", phone);

// phone >> ambil semua data 
//brand aja >> phone.name

//apa perbedaan antara arrya dan object?
let array = ["Iphone", 2025, "17 Pro MAx", true];
console.log("ini phone array", array);

//function

function add(num1, num2, num3){
    //return adalah bill penutup, invoice tertagih
    num1= num1*10
    return num1 * num2 + num3;
}

console.log(add(1,3,5));

//NaN, Not A Number
console.log("1" + 1);
console.log(typeof ("1" + 1));
