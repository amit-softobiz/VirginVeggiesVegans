#! /usr/bin/env node

require('dotenv').config({})
console.log(`This script populates some test books, authors, genres and bookinstances to your database. Specified database as argument - e.g.: populatedb mongodb+srv://amit-softobiz:${process.env.dbPass}@cluster0.n3ujexq.mongodb.net/veggiesAppDB?retryWrites=true&w=majority`);

// Get arguments passed on command line
var userArgs = process.argv.slice(2);
/*
if (!userArgs[0].startsWith('mongodb')) {
    console.log('ERROR: You need to specify a valid mongodb URL as the first argument');
    return
}
*/
var async = require('async')
let Category = require('./models/categoryServices')
var  Item= require('./models/inventoryServices')



var mongoose = require('mongoose');
var mongoDB = userArgs[0];
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var items = []
var categories = []

function itemCreate(itemName,description,Category,price,noInStock, cb) {
    itemdetail = { itemName:itemName,description:description,Category:Category,price:price,noInStock:noInStock}
  
    var item = new Item(itemdetail);
         
    item.save(function (err) {
      if (err) {
        cb(err, null)
        return
      }
      console.log('New item: ' + item);
      items.push(item)
      cb(null, item)
    }  );
  }

function categoryCreate(name,description, cb) {
  categorydetail = {name:name , description: description }

  
  let category = new Category(categorydetail);
       
  category.save(function (err) {
    if (err) {
      cb(err, null)
      return
    }
    console.log('New category: ' + category);
    categories.push(category)
    cb(null, category)
  }  );
}    




function createCategory(cb) {
    async.series([
        function(callback) {
            categoryCreate('vegetables',"green things", callback);
        },
        function(callback) {
            categoryCreate('fruits', "sweet ", callback);
        },
        function(callback) {
            categoryCreate('pulses', "protein", callback);
        },
        
        ],
        // optional callback
        cb);
}
//itemName,description,Category,price,noInStock

function createItem(cb) {
    async.parallel([
        function(callback) {
            itemCreate('apple','helthy',categories[1],120,100, callback);
        },
        function(callback) {
            itemCreate('patato','helthy',categories[0],120,100, callback);
        },
        function(callback) {
            itemCreate('dal','helthy',categories[2],120,100, callback);
        },
        function(callback) {
            itemCreate('papaya','helthy',categories[1],120,100, callback);
        },
        function(callback) {
            itemCreate('tomato','helthy',categories[0],120,100, callback);
        },
        
        ],
        // optional callback
        cb);
}






async.series([
    
    createCategory,
    createItem
],
// Optional callback
function(err, results) {
    if (err) {
        console.log('FINAL ERR: '+err);
    }
    else {
        console.log('items array: '+items);
        
    }
    // All done, disconnect from database
    mongoose.connection.close();
});



