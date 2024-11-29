const product = {
  name: "kemeja",
  rating: 5,
  price: 100000,
  isActive: true,
  image: ["kemeja1.jpg", "kemeja2.jpg", "kemeja3.jpg"],
  description:
    "kemeja pria untuk cocok untuk anak muda, bahannya terbuat dari katun sehingga nyaman dipakai dan model yang modern",
  variant: {
    color: ["red", "blue", "black"],
    size: ["S", "M", "L"],
  },
  storeName: "Toko Kemeja",
};

console.log(product);
console.log(`${product.variant.color[0]}`);
