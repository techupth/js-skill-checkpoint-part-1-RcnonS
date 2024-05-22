// Question #4
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 60 },
];
// เริ่มเขียนโค้ดตรงนี้
let lowestQuantity = Infinity;
let result;

for (item of inventory) {
  if (item.quantity < lowestQuantity) {
    result = `สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ ${item.name} ซึ่งมี ${item.quantity} ชิ้น`;
    lowestQuantity = item.quantity;
  }
}

console.log(result);
