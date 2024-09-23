// MongoDB Queries for Product Data

// 1. Find all the information about each product
db.products.find({});

// 2. Find the product prices which are between 400 to 800
db.products.find({ product_price: { $gte: 400, $lte: 800 } });

// 3. Find the product prices which are not between 400 to 600
db.products.find({
  $or: [
    { product_price: { $lt: 400 } },
    { product_price: { $gt: 600 } }
  ]
});

// 4. List the four products which are greater than 500 in price
db.products.find({ product_price: { $gt: 500 } }).limit(4);

// 5. Find the product name and product material of each product
db.products.find({}, { product_name: 1, product_material: 1 });

// 6. Find the product with a row id of 10
db.products.find({ id: "10" });

// 7. Find only the product name and product material
db.products.find({}, { product_name: 1, product_material: 1 });

// 8. Find all products which contain the value of "soft" in product material
db.products.find({ product_material: /soft/i });

// 9. Find products which contain product color "indigo" and product price 492.00
db.products.find({ product_color: "indigo", product_price: 492.00 });

// 10. Delete the products which have a product price value of 28
db.products.deleteMany({ product_price: 28 });
