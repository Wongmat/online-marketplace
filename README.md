# online-marketplace
A web api for an online shop built on the Sails.js framework.


## If you are not familiar with Sails
### Folders of interest:
- /api: Where most of the code relating to the api will be found
- /api/controllers: Where the controllers for the two models (product, cart) are found
- /api/models: Where the files for the models can be found
- /config/routes: Routing settings
  


## To start

1. Download and run __npm install__

2. Run app with __sails lift__

## Endpoints

1. Products: __/product/__

2. Carts: __/cart/__

## Functions

### Products:
- __Get Product:__ GET request to /product/{id}, id being the id of the product

- __Get All Products:__ GET request to /product. Add ?instock=true to show only instock products

- __Create Product:__ POST request to /product. The body of the request must contain values for __title__, __inventory_count__, and __price__. __Successful response__ will yield a __201__ status with the url of the created product in the Location field of the header


### Carts:
- __Get Cart:__ GET request to /cart/{id}, id being the id of the cart

- __Create Product:__ POST request to /product. __Successful response__ will yield a __201__ status with the url of the created product in the Location field of the header



<!--
Note:  Generators are usually run using the globally-installed `sails` CLI (command-line interface).  This CLI version is _environment-specific_ rather than app-specific, thus over time, as a project's dependencies are upgraded or the project is worked on by different developers on different computers using different versions of Node.js, the Sails dependency in its package.json file may differ from the globally-installed Sails CLI release it was originally generated with.  (Be sure to always check out the relevant [upgrading guides](https://sailsjs.com/upgrading) before upgrading the version of Sails used by your app.  If you're stuck, [get help here](https://sailsjs.com/support).)
-->

# online-marketplace
