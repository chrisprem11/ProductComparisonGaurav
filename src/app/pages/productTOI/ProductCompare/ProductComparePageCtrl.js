/**
 * @author Gaurav Kumar
 * created on 10.04.2017
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.productTOI')
      .controller('ProductComparePageCtrl',
                  ['$scope','ProductComapreService',function ProductComparePageCtrl($scope,ProductComapreService) {

    /*
    * This service called a method to get the complete list of product attributes from the server.
    */
    ProductComapreService.productAttributeList()
        .then(function(response){
          $scope.productAttributeName = [];

          //To Avoid repeatation of the same mobile feature names. This is used to Display only 6 mobile features
          for(var i = 0; i < 6; i++ ) {
              $scope.productAttributeName.push(response.productAttr[i].attribute.attributeDisplayName);
          }

      });//productAttributeList()


   /* $scope.getProductName = function() {

        ProductComapreService.productTypeList()
            .then(function(response){

            var names = [];

            for(var i in response.productType){
                names.push(response.productType[i].productTypeDisplayName);
            }

            return response.productType;

        });

    }*/

    /*
    * This service called a method to get the complete list of product type from the server.
    */
    ProductComapreService.productTypeList()
        .then(function(response){

          $scope.productTypeName = [];

          for(var i in response.productType) {

              $scope.productTypeName.push(response.productType[i].productDisplayName);
          }

      });//productTypeList()

    $scope.isLoading = true;

    /*
    * This method is called to search the product type via product type name from first search box.
    * @param productTypeName
    */
    $scope.searchProduct = function(productTypeName){

        /*
        * This service called a method to search the product type via product type name from the server.
        * @param productTypeName
        */
        console.log(productTypeName);
        ProductComapreService.searchProductTypeByName(productTypeName)
            .then(function(response){

            var index = 0;
            $scope.productType = response.productType[index].productDisplayName;
            $scope.productPrice = response.productType[index].productPrice;
            $scope.isLoading = false;

            var productTypeId = response.productType[index].productTypeId;

            /*
            * This service called a method to search the product details via product type id from the server.
            * @param productTypeId
            */
            ProductComapreService.getProductDetailsByProductTypeId(productTypeId)
                .then(function(response){
                $scope.productAttribute = response.productDetail;
            },function(error){

                console.log(error);

            },function(notify){

                console.log(notify);

            });//getProductDetailsByProductTypeId(-)

        },function(error){

            console.log(error);

        },function(notify){

            console.log(notify);

        });//searchProductTypeByName(-)

    }//searchProduct()

    /*
    * This method is called to clear all the detail displayed on the page, searched by first search box
    */
    $scope.clearFirstSearchProduct = function() {
        $scope.isLoading = true;
        $scope.productAttribute = {};
        $scope.mobName = '';
    } //clearFirstSearchProduct()

    $scope.isLoading1 = true;

    /*
    * This method called to search the product type via product type name from second search box.
    * @param productTypeName
    */
    $scope.searchProduct1 = function(productTypeName){

        /*
        * This service called a method to search the product type via product type name from the server.
        * @param productTypeName
        */
        ProductComapreService.searchProductTypeByName(productTypeName)
            .then(function(response){

            var index = 0;

            $scope.productType1 = response.productType[index].productDisplayName;
            $scope.productPrice1 = response.productType[index].productPrice;
            $scope.isLoading1 = false;

            var productTypeId = response.productType[index].productTypeId;

            /*
            * This service called a method to search the product details via product type id from the server.
            * @param productTypeId
            */
            ProductComapreService.getProductDetailsByProductTypeId(productTypeId)
                .then(function(response){

            $scope.productAttribute1 = response.productDetail;
            console.log($scope.productAttribute1);

        },function(error){

                console.log(error);

            },function(notify){

                console.log(notify);

            });//getProductDetailsByProductTypeId(-)

        },function(error){

            console.log(error);

        },function(notify){

            console.log(notify);

        });//searchProductTypeByName(-)

    }//searchProduct1()

    /*
    * This method is called to clear all the detail displayed on the page, searched by second search box
    */
    $scope.clearSecondSearchProduct = function() {
        $scope.isLoading1 = true;
        $scope.productAttribute1 = {};
        $scope.mobName1 = '';
    }//clearSecondSearchProduct()

    $scope.isLoading2 = true;

    /*
    * This method called to search the product type via product type name from third search box.
    * @param productTypeName
    */
    $scope.searchProduct2 = function(productTypeName){

        /*
        * This service called a method to search the product type via product type name from the server.
        * @param productTypeName
        */
        ProductComapreService.searchProductTypeByName(productTypeName)
            .then(function(response){

            var index = 0;

            $scope.productType2 = response.productType[index].productDisplayName;
            $scope.productPrice2 =  response.productType[index].productPrice;
            $scope.isLoading2 = false;

            var productTypeId = response.productType[index].productTypeId;

            /*
            * This service called a method to search the product details via product type id from the server.
            * @param productTypeId
            */
            ProductComapreService.getProductDetailsByProductTypeId(productTypeId)
                .then(function(response){

            $scope.productAttribute2 = response.productDetail;

            },function(error){

                console.log(error);

            },function(notify){

                console.log(notify);

            });//getProductDetailsByProductTypeId(-)

        },function(error){

            console.log(error);

        },function(notify){

            console.log(notify);

        });//searchProductTypeByName(-)

    }//searchProduct2()

    /*
    * This method is called to clear all the detail displayed on the page, searched by third search box
    */
    $scope.clearThirdSearchProduct = function() {
        $scope.isLoading2 = true;
        $scope.productAttribute2 = {};
        $scope.mobName2 = '';
    }//clearThirdSearchProduct()

    $scope.isLoading3 = true;

    /*
    * This method called to search the product type via product type name from fourth search box.
    * @param productTypeName
    */
    $scope.searchProduct3 = function(productTypeName){

        /*
        * This service called a method to search the product type via product type name from the server.
        * @param productTypeName
        */
        ProductComapreService.searchProductTypeByName(productTypeName)
            .then(function(response){

            var index = 0;

            $scope.productType3 = response.productType[index].productDisplayName;
            $scope.productPrice3 = response.productType[index].productPrice;
            $scope.isLoading3 = false;

            var productTypeId = response.productType[index].productTypeId;

            /*
            * This service called a method to search the product details via product type id from the server.
            * @param productTypeId
            */
            ProductComapreService.getProductDetailsByProductTypeId(productTypeId)
                .then(function(response){

            $scope.productAttribute3 = response.productDetail;

        },function(error){

                console.log(error);

            },function(notify){

                console.log(notify);

            });//getProductDetailsByProductTypeId(-)

        },function(error){

            console.log(error);

        },function(notify){

                console.log(notify);
        });//searchProductTypeByName(-)

    }//searchProduct3()

    /*
    * This method is called to clear all the detail displayed on the page, searched by fourth search box
    */
    $scope.clearFourthSearchProduct = function() {
        $scope.isLoading3 = true;
        $scope.productAttribute3 = {};
        $scope.mobName3 = '';
    }//clearFourthSearchProduct()

  }]);

})();
