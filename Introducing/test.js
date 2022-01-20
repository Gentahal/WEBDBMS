//!indetifier

/**
 * inditider adalah penamaan variable, fungsi ataupun perameter
 * karakter pertamanya hanya a-z ,atau A-Z dan simbol underscore atau dollar
 * tidak bolleh menggunakan angka di depan
 * tidak boleh menggunakan bahasa yang sudah ada default di js
 */

//!statement
/**
 * statement = suatu pernyataan js yang paling dasar dan memiliki tugas tertentu
 */

// let name = "Hallo Genta" //statement dasar
// console.log(name)

//!expression
/**
 * expression merupakan ekspresi js yang berfungsi untuk menghasilkan nilai tertentu
 */
// let first = 1
// let second = 2
// let result = first + second 
// // console.log(result)

// if(result>1){
//     console.log('Maka dia akan ambil '+ result)
// }

//!scope
/**
 * cakupan kode agar bisa mengakses atau membatasi
 */

//!global scope
/**
 * global sccope merupakan cakupan di seluruh file
 */

// var a = 'Hallo rekan rekan'

// function first() {
//     console.log(b)
//     if(true){
//          const a = 'ini ada di yang paling dalam'
//          console.log(a)
//     }
// }

// var b = 'Selamat Siang'

// function second() {
//     console.log(b)
// }
// first()
// second()

// const a = 'mobil'
// function kendaraan(params) {
//     console.log(a)
//     if(true){
//         const b = 'motor'
//         console.log(b)
//     }
// }
// kendaraan()

// var a = 'pajero'
// const z = ' becak'
// function kendaraan() {
//     const b = 'bus'
//     if (true){
//         var x = 'baju'
//     }
//     console.log(x)
// }
// kendaraan()

var a = 'IDN'
const b = 'Boarding'

function satu() {
    let c = 'School'
    console.log(a)
    if (true) {
        console.log(b)
    }
    console.log(c)
    
}
satu()