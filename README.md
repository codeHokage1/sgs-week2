
# Shopping App Schema Design

## User Story

As a shop customer, I want to be able to view the products available for sale, place an order, and track my order.

## Requirements Analysis

### Entities:

-   Menu: A menu has a list of items, each with a name, description, price, and category.
-   Customers: A customer has a unique identifier, name, email, and password.
-   Orders: An order has a unique identifier, the customer who placed it, a list of items, and the total amount.

### Relationships:

-   A customer can view the menu and place an order.
-   An order can contain multiple items.

## NoSQL Schema Design

Based on the requirements analysis, the following schema can be designed:

### Items Collection:

```
{
   _id: ObjectId,
   name: string,
   description: string,
   price: number,
   categories: [string]
}

```

### Customers Collection:

```
{
   _id: ObjectId,
   name: string,
   email: string,
   password: string
}

```

### Orders Collection:

```
{
   _id: ObjectId,
   customerId: ObjectId,
   items: [
     {
        itemId: ObjectId,
        quantity: number
     }
   ],
   totalAmount: number,
   status: string,
   orderDate: date,
   deliveryAddress: string
}

```
## API Endpoints

```
-   GET /items - Get a list of all menu items.
-   GET /items/:{itemId} - Get details of a specific item.
-   POST /items/:{itemId}/order - Place an order for the items selected by the customer.
-   GET /custormer/:{customerId}/orders - Get the list of orders placed by a customer.
-   GET /orders/{orderId} - Get the details of a specific order.
```
Restaurant Schema Design
Displaying Restaurant Schema Design.