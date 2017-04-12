/**
 * @author Gaurav Kumar
 * created on 10.04.2017
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.productTOI')
      .factory("ProductComapreService",['$http','$q','$state','$timeout','$log','URL',
                                        function($http,$q,$state,$timeout,$log,URL) {

    /*
    * This service fetches the complete list of product type from the server according to the matched product name.
    */
    var productTypeByName = function(productTypeName) {
        console.log(URL.BASE_URL+URL.searchProductTypeByName+productTypeName);
        var deferred = $q.defer();

        $timeout(function(){

            deferred.notify("Data is coming");

            $http.get(URL.BASE_URL+URL.searchProductTypeByName+productTypeName)
                .then(function(response){

                var productType = response.data;

                deferred.resolve({
                    "productType" : productType
                });

            },function(error){
                deferred.reject(error);

            });
        },2000);

        return deferred.promise;
    }//end of productTypeByName(-)

    /*
    * This service fetches the complete list of product details from the server according to the matched product type id.
    */
    var productDetailsByProductTypeId = function(productTypeId) {

        var deferred = $q.defer();

        $timeout(function(){

            deferred.notify("Data is coming");

            $http.get(URL.BASE_URL+URL.searchProductDetailsByProductTypeId+productTypeId)
                .then(function(response){

                var productDetails = response.data;

                deferred.resolve({
                    "productDetail" : productDetails
                });

            },function(error){

                deferred.reject(error);

                });

        },2000);

        return deferred.promise;

    }//end of productDetailsByProductTypeId(-)

    /*
    * This service fetches the complete list of product types from the server.
    */
    var productTypeList = function() {

        var deferred = $q.defer();

        $timeout(function(){

            deferred.notify("Data is coming");

            $http.get(URL.BASE_URL+URL.productTypeList)
                .then(function(response){

                var productType = response.data;

                deferred.resolve({
                    "productType" : productType
                });

            },function(error){

                deferred.reject(error);
            });

        },2000);

        return deferred.promise;

    }//end of productTypeList()

    /*
    * This service fetches the complete list of product attributes from the server.
    */
    var productAttributeList = function() {
        var deferred = $q.defer();

        $timeout(function(){
            deferred.notify("Data is coming");
            $http.get(URL.BASE_URL+URL.productAttributeList)
                .then(function(response){
                var productAttr = response.data;

                deferred.resolve({
                    "productAttr" : productAttr
                });

            },function(error){
                deferred.reject(error);
            });
        },2000);

        return deferred.promise;
    }//end of productAttributeList()

      return {

          "productTypeList" : productTypeList,

          "productAttributeList" : productAttributeList,

          "searchProductTypeByName" : productTypeByName,

          "getProductDetailsByProductTypeId" : productDetailsByProductTypeId

      }//return

  }]);//factory(-,[])

})();
