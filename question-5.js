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

const promotionCode = "SALE50";
// เริ่มเขียนโค้ดตรงนี้

function calculateTotalPrice(item, discountCode) {
  const totalPrice = item.reduce((acc, cur) => {
    return (acc += cur.price * cur.quantity);
  }, 0);

  if (discountCode === "SALE20") {
    return totalPrice * 0.8;
  } else if (discountCode === "SALE50") {
    return totalPrice * 0.5;
  } else {
    return totalPrice;
  }
}

console.log(calculateTotalPrice(products, promotionCode));
