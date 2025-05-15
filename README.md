# 🛒 eCommerce App – MongoDB + Mongoose
This project outlines the schema design and API development for a simple eCommerce application using MongoDB with Mongoose in Node.js. It includes collections for Users, Products, Orders, and Carts, along with a bonus API to fetch all products from a specific vendor.

## 📚 Technologies Used
MongoDB (NoSQL Database)

Mongoose (ODM for MongoDB)

Node.js

Express.js

##  📁 Collections and Schemas (In repository check  models)
1. 🧑‍💼 User Collection
Stores user details including name, email, role, password hash, and associated cart.
```
{
  name: String,
  email: { type: String, unique: true, index: true },
  password: String,
  role: ['customer', 'admin', 'vendor'],
  cart: ObjectId (ref: 'Cart')
}
```
2. 📦 Product Collection
Each product includes details like price, category, stock, and the vendor who created it.
```
{
  name: String,
  price: Number,
  stock: Number,
  category: String,
  vendorId: ObjectId (ref: 'User')
}
```
3. 📑 Order Collection
Represents user orders containing multiple product references and their status.
```
{
  userId: ObjectId (ref: 'User'),
  productIds: [ObjectId] (ref: 'Product'),
  status: ['placed', 'shipped', 'delivered']
}
```
4. 🛒 Cart Collection
Each user has a unique cart with products, quantities, and a total amount.
```
{
  userId: ObjectId (ref: 'User'),
  products: [
    {
      productId: ObjectId (ref: 'Product'),
      quantity: Number
    }
  ],
  total: Number
}

```

## 🌐 API Routes (In repository check server.js)
✅ Bonus: Get All Products of a Vendor
Endpoint:
```
GET /vendor/:vendorId/products
```
Description:
Returns all products created by a specific vendor.

Example:
```
GET /vendor/64f23a1234e7c3b8c8f6a9dd/products
```
Sample Response:

```
[
  {
    "_id": "64f23a1234e7c3b8c8f6a9de",
    "name": "Laptop",
    "price": 599.99,
    "stock": 10,
    "category": "Electronics",
    "vendorId": "64f23a1234e7c3b8c8f6a9dd"
  }
]

```


