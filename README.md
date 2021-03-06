# online-marketplace
A web api for an online shop built on the Sails.js framework.


## If you are not familiar with Sails
### Folders of interest:
- /api: Where most of the code relating to the api will be found
- /api/controllers: Where the controllers for the two models (product, cart) are found
- /api/models: Where the files for the models can be found
- /config/routes: Routing settings
  


## To start

1. Download and run __npm install__ in terminal

2. Run app with __sails lift__ in terminal

## Objects & Endpoints

1. Products: __localhost:1337/product__
   All products have three attributes: __title__, __price__, __inventory_count__. For convenience, two product objects have      already been preloaded into the app.

2. Carts: __localhost:1337/cart__
   All carts have one attribute: __total__ (Subtotal of cart in dollars). Items in cart are recorded using the __hasProduct__    association

## Functions

### Products:
- __Create Product:__ POST request to /product. The body of the request must contain values for __title__, __inventory_count__, and __price__. __Successful response__ will yield a __201__ status with the url of the created product in the __Location field__ of the header

- __Get Product:__ GET request to /product/{id}, {id} being the id of the product

- __Get All Products:__ GET request to /product. Add the __instock=true__ parameter to show only instock products (localhost:1337/product?instock=true)


### Carts:
- __Create Cart:__ POST request to /cart. __Successful response__ will yield a __201__ status with the url of the created cart in the Location field of the header

- __Get Cart:__ GET request to /cart/{id}, {id} being the id of the cart

- __Add Product to Cart:__ PUT request to /cart/{id}. {id} is the ID of the desired cart. Body of request must contain __id__ of product

- __Checkout:__ POST request to /cart/{id}/checkout. {id} is the ID of the desired cart. Successful requests will return a __200__ status response
