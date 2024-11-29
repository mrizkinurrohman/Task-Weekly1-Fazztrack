function persegi(n, y) {
  if (typeof n === "string" || y === "string") {
    console.log("Yang anda masukan bukan angka!");
  } else {
    let pola = "";
    for (let i = 1; i <= n || y; i++) {
      for (let j = 1; j <= n || y; j++) {
        pola += " " + j; // Tambahkan angka ke baris
      }
      pola += "\n"; // Ganti baris setelah setiap baris selesai
    }
    return pola;
  }
}

const n = 5;
// const y = 3;
const y = "tiga";
console.log(persegi(n));
console.log(persegi(y));

