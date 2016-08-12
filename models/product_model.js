var db = require('../config');

function ProductModel(){};

ProductModel.prototype = {

  saveProduct: function(p, result){
    db.none('INSERT INTO product(name, description, price, picture)' +
     'VALUES($1, $2, $3, $4);', [p.name, p.description, parseInt(p.price), p.picture])
     .then(function(data){
       result(null);
     })
     .catch(function(err){
       console.log(err);
     });
  },

  updateProduct: function(productId, p, result){
    db.none('UPDATE product SET name = $1, description = $2, price = $3, picture = $4 WHERE id = $5;', [p.name, p.description, p.price, p.picture, p.id])
    .then(function(data){
      console.log(data);
      result(null);
    })
    .catch(function(err){
      console.log(err);
    });
  },

  deleteProduct: function(productId, callback){
    db.result('DELETE FROM product WHERE id = $1;', productId)
    .then(function(result){
      console.log('Delete product');
      callback(null);
    })
    .catch(function(err){
      console.log(err);
    });
  },

  findAllProduct: function(result){
    db.query('SELECT * FROM product;')
    .then(function(data){
      result(data);
    })
    .catch(function(err){
      console.log(err);
    });
  },

  findOne: function(productId, result){
    db.one('SELECT * FROM product WHERE id = $1;', productId)
    .then(function(data){
      result(data);
    })
    .catch(function(err){
      console.log(err);
    });
  },

  findByName: function(productName, result){
    db.query("SELECT * FROM product WHERE UPPER(name) LIKE $1", productName)
    .then(function(data){
      result(data);
    })
    .catch(function(err){
      console.log(err);
    });
  }
};

module.exports = ProductModel;
