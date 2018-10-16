"use strict";
var product_list = [];

var Product = function(product){
    this.image = product.image;
    this.title = product.title;
    this.price = product.price;
    this.description = product.description;
    this.brand = product.brand;
    this.categories = product.categories;
    this.product_id = product.title_id;
    this.console=product.console;
};
Product.prototype.toHtml = function(){
    var source = $('#product-template').text();
    var template = Handlebars.compile(source);
    return template(this);
};

products.forEach(function(product){
    product_list.push(new Product(product));
});

product_list.forEach(function(product){
    $('#product-listings').append(product.toHtml());
});
