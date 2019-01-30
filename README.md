# A Nodejs, Mongodb, and bodyparser Crud REST API Server

## Project setup
```
npm install
```

### start mongodb service
```
sudo service mongod start
```

### create mongodb database
```
mongo 
#open the mongodb console
```
```
use productstutorial 
#create a productstutorial db or switch to it if it exists 
```

### run on development
```
node app.js
```
### The test router and controler (Get)

go to ```http://localhost:1234/products/test``` on your browser


### Test (GET, PUT, DELETE) on Postman (download postman with the link below)
[Get Postman here ](https://www.getpostman.com/).

##### test controller

```
localhost:1234/products/test
```

##### create controller

```
localhost:1234/products/create

# choose x-www-form-urlencoded in the Body tab 
# and Put the following values in the Key and Value tabs respectively

# 	KEY		VALUE
#	1. name		name1
#	2. price	100

```

##### Read controller 

```
localhost:1234/products/PRODUCT_ID

# Use mongo cli to get the ID'S from the db 
# run the following

mongo

use productstutorial

show collections

db.products.find().limit(10);
```


### Screenshots:

## start mongo db service
![Alt text](screenshots/Screenshot_1_start_mongodb.png?raw=true "start mongo db")

## open mongo db console
![Alt text](screenshots/Screenshot_2_mongodb_console.png?raw=true "open mongo db console")

## create productstutorial database
![Alt text](screenshots/Screenshot_3_create_db.png?raw=true "create productstutorial database")


## start the app
![Alt text](screenshots/Screenshot_4_start_app.png?raw=true "start the app")

#### N/B: This is based on this tutorial on medium: [Writing a CRUD app with Node.js and MongoDB](https://codeburst.io/writing-a-crud-app-with-node-js-and-mongodb-e0827cbbdafb)

