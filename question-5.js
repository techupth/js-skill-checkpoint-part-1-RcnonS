// Question #5
const products = [
  {
    name: "เสื้อยืด",
    price: 10,
    quantity: 2,
  },
  {
    name: "กางเกงยีนส์",
    price: 5,
    quantity: 3,
  },
  {
    name: "เสื้อเชิ้ต",
    price: 10,
    quantity: 5,
  },
];

const promotionCode = "";
// เริ่มเขียนโค้ดตรงนี้

function calculateTotalPrice(item, discountCode) {
  let totalPrice = 0;
  for (let i = 0; i < item.length; i++) {
    let result = item[i].price * item[i].quantity;
    totalPrice += result;
  }
  if (discountCode === "SALE20") {
    return totalPrice * 0.8;
  } else if (discountCode === "SALE50") {
    return totalPrice * 0.5;
  } else {
    return totalPrice;
  }
}

console.log(calculateTotalPrice(products, promotionCode));
