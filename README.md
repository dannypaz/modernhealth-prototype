# Utility Prototype
### An app to catalog artists within your recording studio

## Getting Started

Please refer to the init method in config/database.js. You will need to create a database called UtilityApp (default) or your own and change connection configuration.

DB Schema is located inside of the 'mysql' file in the root project directory

To use bcrypt locally:

    npm install node-gyp -g
    npm install

To run the application

    mysql.server start
    npm start

## About the application

Using nodemon with express (auto refresh when making changes). Mysql w/ node-mysql for db. I did not include models/ORM for simplicity. Using gulp for lint.

## Routes

    # Initalize the application with mock data
    GET /init

    # Index
    GET /
    
    # Catalog (Admin)
    GET /admin/catalog
    POST /admin/catalog
    DELETE /admin/catalog

    # Resident (Admin)
    GET /admin/resident

    # Catalog
    GET /catalog
