
function Product(productModel){
  this.productModel = productModel;
}

Product.prototype = {
  apiSaveProduct: function(req, res){
    var self = this;
    var p = req.body;
    self.productModel.saveProduct(p, function(err){
      if(err){
        throw(err);
      }

      res.status(200)
      .json({
        status: 'success',
        message: 'product saved'
      });

    });
  },

  apiUpdateProduct: function(req, res){
    var self = this;
    var p = req.body;
    self.productModel.updateProduct(p.id, p, function(err){
      if(err){
        throw(err);
      }
      res.status(200)
      .json({
        status: 'success',
        message: 'product saved'
      });
    });
  },

  apiDeleteProduct: function(req, res){
    var self = this;
    var id = req.params.id;
    self.productModel.deleteProduct(id, function(err){
      if(err){
        throw(err);
      }
      res.status(200)
      .json({
        status: 'success',
        message: 'product deleted'
      });
    });
  },

  apiFindAllProduct: function(req, res){
    var self = this;
    self.productModel.findAllProduct(function(data){
      res.status(200)
      .json({
        status: 'success',
        data: data,
        message: 'find all product'
      });
    });
  },

  apiFindOneProduct: function(req, res){
    var self = this;
    var id = req.params.id;
    self.productModel.findOne(id, function(data){
      res.status(200)
      .json({
        status: 'success',
        data: data,
        message: 'find one product'
      });
    });
  },

  apiFIndByName: function(req, res){
    var self = this;
    var productName = '%'+req.params.productname.toUpperCase()+'%';
    self.productModel.findByName(productName, function(data){
      res.status(200)
      .json({
        status: 'success',
        data: data,
        message: 'find by name'
      });
    });
  }

};

module.exports = Product;
