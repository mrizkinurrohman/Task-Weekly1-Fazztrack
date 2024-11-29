function diskonBelanja(total) {
  if (total >= 1000000) {
    console.log(
      " Hasil : Rp. ",
      total - total * 0.1,
      "(anda mendapat diskon 10%)"
    );
  } else if (total >= 500000 && total < 1000000) {
    console.log(
      " Hasil : Rp. ",
      total - total * 0.05,
      " (anda mendapat diskon 5%)"
    );
  } else if (total < 500000) {
    console.log(" Hasil : Rp. ", total, " (tidak mendapatkan diskon)");
  }
}

diskonBelanja(8000000);
diskonBelanja(800000);
diskonBelanja(400000);
