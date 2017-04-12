/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.productTOI')
      .factory("ProductCategoryService",ProductCategoryService);

  /** @ngInject */
  function ProductCategoryService($http,$q,$state,$timeout,$log) {
      
    var products;
      
    var ProductCategoryDetails = function() {
          
           var deferred = $q.defer();
               $timeout(function() {
                  
                   $http.get('http://localhost:8085/ProductTOI/productCategoryList')
                       .then(function(response){
                      console.log(response.data);  
                       var productDetails = response.data;
                       
                       deferred.resolve({
                            "productDetails" : productDetails
                        });
                       
                console.log(response.data);
                       
                   },function(error){
                       console.log('cannot get data');
                   });                   
               
               },2000);
               
               return deferred.promise;
     
                
      }//end of ProductCategoryDetails()
  
  /*  var RemoveProductById = function(product_category_id) {
          
           var deferred = $q.defer();
               $timeout(function() {
                  
                   $http.delete('http://localhost:8085/ProductTOI/deleteProductCategory-'+product_category_id)
                       .then(function(response){
                      console.log(response.data);                        
                       
                       deferred.resolve(response.data);
                       
                console.log(response.data);
                       
                   },function(error){
                       console.log('cannot delete data');
                   });                   
               
               },2000);
               
               return deferred.promise;
     
                
      }//end of RemoveProductById()*/
  
  /*   var AddNewProductCategory = function(newProductCategory) {
         
                    var deferred = $q.defer();
               $timeout(function() {
                  
                   $http.post('http://localhost:8085/ProductTOI/addNewProductCategory'+newProductCategory)
                       .then(function(response){
                      console.log(response.data);                        
                       
                       deferred.resolve(response.data);
                       
                console.log(response.data);
                       
                   },function(error){
                       console.log('cannot save data');
                   });                   
               
               },2000);
               
               return deferred.promise;
     
         
     }// end of AddNewProductCategory*/
     
      return {
          
          "getProductCategoryDetails" : ProductCategoryDetails,
          
          "addNewProductCategory" : AddNewProductCategory,
          
          "removeProductById" : RemoveProductById,
          
          "setProductsLocal" : function(product){
              products = product;
          },
          
          "getLocalProducts" : function() {
              return products;
          }         
          
      }//return
      
  }//ProductCategoryService(-,-,-,-)
    
}) ();