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

// var a = 'IDN'
// const b = 'Boarding'

// function satu() {
//     let c = 'School'
//     console.log(a)
//     if (true) {
//         console.log(b)
//     }
//     console.log(c)
    
// }
// satu()

//!closure
/**
 * closure adalah cara mengakses variable dari parent scope di dalam child scope parent
 */

// function hello(sapa) {
//     var text = 'assalamualaikum' + sapa
//     return function() {
//         console.log(text)
//     }
// }
// var nama = hello(" Genta")

// nama()

// function Hallo(nama,kelas) {
//     var test = 'nama =' + nama +'\nkelas =' + kelas
//     return function() {
//         console.log(test)
//     }
    
// }
// var nama = Hallo(' Genta Halilintar', ' 10 RPl A'  )
// nama()

//!Tipe data pada js
/**
 * tipe data adalah karakteristik dari nilai sebuah data di js terdapat
 * 7
 * null,undifined,boolean,number,bigInt,String,symbol(es6)
 * dan tipe data kompleks object.
 * loosely typed yaitu variable tidak menentukan sebuah tipe data,melainkan nilai yang menentukan tipe data tersebut
 */
//!contoh 
// var a = 'genta'
// var b = 1
// var c = true

// var d
// console.log(typeof d)

//!Tipe data undifined
/**
 * tipe data yang nilainya kosong atau tidak di definisikan
 */
// let a 
// function genta(params) {
//     a = 'ini function genta'
//     console.log(a)
// }

// function lintar(params) {
//     a = 'ini function lintar'
//     console.log(a)
// }
// lintar()
// genta()
//!Tipe data null
/**
 * tipe data primitif yang nilainya kosong atau null
 */
// let a = {}
// console.log(typeof a)

//!Number
/**
 * Rentang nilai yang bisa di tampung oleh tipe data number yakni antara (2^53 1)
 * dan 2^53 1 atau 9007199254740991 sampai 9007199254740991 jika sebuah number
 * memiliki nilai lebioh dari rentang ini,maka sebaiknya menggunakan tipe data BigInt
 */

//!NaN atau Not a Number
// let a = 17
// if (a >= 17){
//     a = 'Anda belum cukup umur'
//     console.log(a/2)
// }else{
//     a = 'sudah cukup'
//     console.log(a)
// }

//!String
/**
 * String merupakan tipe data yang menampung karakter.symbol '',"",``
 */
//menghitung jumlah
// let a = 'genta'
// console.log(a.length)

//!loop
// let kata = 'helloworld'
// for (let i = 0; i < kata.length; i++){
//     console.log(kata[i])
// }
/**
 * boolean
 */

// let belajar = false
// if(belajar){
//     console.log('Kelas ini sedang belajar')
// }

//!Object
/**
 * object ini merupakan tipe data komplek yang berisi props
 */

// let identitas = {
//     firstName : 'Genta',
//     lastName : 'Halilintar',
//     email : 'genta@gmail.com',
//     instagram : 'genta',
//     linkedin : 'lintar',
//     phone : 'Iphone',
//     address : {//nest
//         city : 'bekasi',
//         number : 8,
//         street : 'jalan sini'
//     }
// }
//cara memanggil  object

// console.log('Nama saya : '+ identitas.firstName)
// console.log('Rumah saya di :' + identitas.bekasi.street)

//menggunakan array
// console.log(identitas['firstName'])
// console.log(identitas['address']['number'])

// console.table(identitas)

// let koleksi = {
//     kendaraan : {
//         mobil : 'peugeot',
//         motor : 'v-xion',
//         sepeda : 'untided'
//     },
//     jalan : 'jalan berkah',
//     kota : 'bekasi',
//     platNomor : 'jabodetabek',
//     kereta : {
//         namaKa : 'Argo bromo anggrek',
//         tujuan : 'senen pasar turi',
//     }
// }
// console.table(koleksi)

//!template literal
// const mobil = 'peugot'
// const motor = 'panigale'

// console.log(`mobil saya adalah ${mobil} dan motor saya ${motor}`)//harus ada kode backtis

// let a = 1,b = 2,c = 3

// let[a,b,c] = [3,4,5]
// console.log(a) //!loosely typed

//!ternarary operator
// let a = 10
 // if(a<10){
//     console.log('Nilai A kurang dari 10')
// }else{
//     console.log('Nilai A lebih dari 10')
// }

// a<10 //ini menggunakan ternarary operator
// ? console.log('nila A kurang dari 10')
// : console.log('nilai A lebih dari 10')

//!Function
/**Merupakan sebuah blok kode untuk membungkus sebuah proses penulisan kode agar tidak diulang */

//!Ini fun biasa
// function name(params,acs) {
//     console.log(params,acs)
// }
// name("Ini Genta", "In genta")
// //!Anonymous fun

// const anon = function(genta) {
//     console.log(genta)
// }

// anon("Kita Belaja Js")

//!Arrow fun

// let robot = () => { //parameternya boleh di isi ato engga
//     console.log('Dias Adalah Robot')
// }

// robot()

// const satu = (param) => {
//     let a = param
//     console.log(a)
// }
// satu("Ini Fun")

// const dua = function(params1, params2) {
//     let a = params1, b =params2
//     console.log(a+b)
// }
// dua(1,1)

//!High Order function
/**
 * fungsi yang menerima argumen berupa fungsi lain serta return bisa berupa fungsi juga
 */
//!normal fun

// function genap(number) {
//     return number %2 == 0
// }

// function print(number) {
//     let isTrue = genap(number)
//     if (isTrue) {
//         console.log(`${number} adalah bilangan genap`)
//     }else[
//         console.log(`${number} adalah bilangan ganjil`)

//     ]
// }

// print(10)

//!High Order Fun

// function ganjil(nomor) {
//     return nomor %2 == 0
// }

// function print(nomor,nomor1) {
//     let isTrue = nomor1(nomor)
//     if (isTrue) {
//         console.log(`${nomor} adalah Domba tersesat`)
//     }else[
//         console.log(`${nomor} adalah Domba lurus`)
//     ]
// }

// print(2,ganjil)

// function genta(nilai) {
//     return nilai  >= 100
// }

// function abdi(nilai) {
//     return nilai == 'kuning'
// }

// function gue(satu,dua) {
//     const isTrue = dua(satu)
//     if (isTrue) {
//         console.log(`${satu} adalah genta`)
//     }else[
//         console.log(`${satu} bukan genta`)
//     ]
// }

// gue(abdi,genta)

function tahun(motor) {
    return motor <= 2001
}

function cc(motor) {
    return motor >= 500
}

function kendaraan(motor,dua) {
    const a = motor(dua)
    if (a) {
        console.log(`${motor} gaperlu bayar pajak`)
    }else[
        console.log(`${motor} harus bayar pajak`)
    ]
}

kendaraan(120,cc)