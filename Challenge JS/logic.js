// const age = 20;
// if (age >= 18) {
//     console.log("Boleh Ikut Pemilu");
// } else  {
//     console.log("Tidak Boleh Ikut Pemilu");
// }
// const nilai = 62;

// if (nilai > 80) {
//     console.log("A");
// } else if (nilai > 60) {
//     console.log("B");
// } else {
//     console.log("C");
// }

// const day = 6;
// switch (day) {
//     case 1:
//         console.log("Senin");
//         break;
//     case 2:
//         console.log("Selasa");
//         break;
//     case 3:
//         console.log("Rabu");
//         break;
//     case 4:
//         console.log("Kamis");
//         break;
//     case 5:
//         console.log("Jumat");
//         break;
//     case 6:
//         console.log("Sabtu");
//         break;
//     case 7:
//         console.log("Minggu");
//     default:
//         console.log("Hari Salah");
//         break;
// }
//const age = 17;
// if (age >= 16) {
//     console.log("you can drive");
// } else {
//     console.log("you canoot drive")
// }

// const age = 18;

// let message;

// message = (age >= 16) ? "you can drive" : 'you cannot drive';

// console.log(message);

//ambil data dr user
// let users = [];

// users= []; //array/object kosong dianggap true oleh javascript

// if (users.length > 0) {
//     console.log("user ada");
// } else {
//     console.log("user tiak ada");
// }

// for (let step = 0; step < 5; step++) {
//     //console.log('sekarang langkah ke ' + step + '.');
//     console.log(`sekarang langkah ke ${step}`); //template literal
// }

// let fruits = ["apple", "orange", "melon", "mango"];

//  for (let i = 0; i < fruits.length; i++) {
//      console.log(`My fruit is ${fruits[i]}`); 
//  }
// let hasil = [
//     {
//       "id": 1,
//       "namaDepan": "Edyth",
//       "namaBelakang": "Roberts",
//       "jenisKelamin": "M"
//     },
//     {
//       "id": 2,
//       "namaDepan": "Duncan",
//       "namaBelakang": "White",
//       "jenisKelamin": "M"
//     }
// ]
let hasil = [
    {
      id: 1,
      namaDepan: "Edyth",
      namaBelakang: "Roberts",
      jenisKelamin: "M"
    },
    {
      id: 2,
      namaDepan: "Duncan",
      namaBelakang: "White",
      jenisKelamin: "M"
    }
]

for (let i = 0; i < hasil.length; i++) {
    console.log(`My hasil is ${hasil[i].namaDepan} ${hasil[i].namaBelakang}`); 
}

// for (const fruit of fruits) {
//     console.log(`My fruit is ${fruit}`);
// }

// let money = 100;

// while (money >= 30) {
//     console.log('i want to buy snack');
//     money -= 30;
// }

// let money = 100;

// while (true) {
//     console.log("i want to buy snack");
//     money -= 30;

//     if (money < 30) {
//         break;
//     }
// }

//  for (let i = 1; i <= 100; i++) {
//      if (i % 3 == 0 && i % 5 == 0) {
//          console.log('FizzBuzz')
//      } else if ( i % 5 == 0) {
//          console.log('Buzz')
//      } else if (i % 3 == 0) {
//          console.log("Fizz")
//      } else {
//          console.log(i);
//      }
// }



