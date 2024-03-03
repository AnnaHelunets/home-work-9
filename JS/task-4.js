const product = {
  id: 1,
  name: "Ноутбук Lenovo IdeaPad 3",
  price: 15000,
  description: "15.6 дюймовий, AMD Ryzen 5, 8 ГБ ОЗУ, 512 ГБ SSD",
  images: ["image1.jpg", "image2.jpg", "image3.jpg"],
  category: "Ноутбуки",
  available: true,
};
function printProductInfo({
  id,
  name,
  price,
  description,
  images,
  category,
  available,
}) {
  if (available === true) available = "Так";
  else available = "Ні";
  return `Назва ${name}, Категорія ${category}, Достуупність ${available}, Ціна ${price}`;
}
console.log(printProductInfo(product));
