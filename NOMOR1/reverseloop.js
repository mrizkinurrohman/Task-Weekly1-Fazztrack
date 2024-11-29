const words = "saya belajar javascript";
const result = words.split(" ");
let r = "";

for (let i = result.length-1; i >= 0; i--) {
    r += result[i];
    if (i !== 0) {
        r += " "; // Tambahkan spasi antara kata
    }
}

console.log(result.length);
console.log(r);
