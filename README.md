
# Shopping App Schema Design

## User Story

- As a shop customer, I want to be able to view the products available for sale, place an order, and track my order. 
- As an admin for the shop, I want to be able to perform all functions that a customer can in addition to, viewing all customers and all others.

## Requirements Analysis

### Entities:

-   Products Menu: A menu has a list of products, each with a unique identifier, name, description, price, category, stock status and available discount.
-   Customers: A customer has a unique identifier, name, email, and password.
-   Orders: An order has a unique identifier, the unique identifier of the customer who placed it, a list of products, the total amount, the order delivery status, the order date, the delivery address, and the feedback on te delivery if it has been completed

### Relationships:

-   A customer can view the product menu and place an order.
-   An order can contain multiple products.
-   A customer can place multiple orders.


## NoSQL Schema Design

Based on the requirements analysis, the following schema can be designed:

### Products Collection:

```
{
    _id: ObjectId,
    name: String,
    description: String,
    price: Number,
    amountInStock: Number,
    category: [String],
    discount: Number
}

```

### Customers Collection:

```
{
   _id: ObjectId,
    name: String,
    email: String,
    phone: String,
    password: String
}

```

### Orders Collection:

```
{
   _id: ObjectId,
    customerId: ObjectId,
    products: [
        {
           productId: ObjectId,
           quantity: Number
        }
      ],
    totalAmount: Number,
    delivered: Boolean,
    orderDate: Date,
    deliveryAddress: String,
    feedback: String
}

```
## API Endpoints
The Endpoints could vary depending on the user sending the requests. The users in this case will be categorized into Customer and Admin.

### Endpoints for a customer

```
- Customers
POST /customers - Create a new customer
PUT /customers/:customerId - Update details for a customer
DELETE /customers/:customerId - Delete a customer
GET /customers/:customerId - Get details of a specific customer.
GET /customers/:customerId/orders - Get the list of orders placed by a customer.


-   Orders 
POST /orders - Create a new order
PUT /orders/:orderId - Update details for a order
DELETE /orders/:orderId - Delete a order
GET /orders/:orderId - Get the details of a specific order.


-   Products
GET /products - Get all products
GET /products/:productId - Get details of a specific product.

```

### Endpoints for an admin
The admin will have access to all the endpoints that the customer has access too, plus the following.
```
- Customers
GET /customers - Get all customers


-   Orders 
GET /orders - Get all orders


-   Products
POST /products - Create a new product
PUT /products/:productId - Update details for a product
DELETE /products/:productId - Delete a product

```