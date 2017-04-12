/**
 * @author Gaurav Kumar
 * created on 10.04.2017
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.productTOI',[])
      .config(['$stateProvider',function($stateProvider) {
    $stateProvider
        .state('productTOI', {
            url: '/product',
            template : '<ui-view  autoscroll="true" autoscroll-body-top></ui-view>',
            abstract: true,
            title: 'Product TOI',
            sidebarMeta: {
                icon: 'ion-document-text',
                order: 0
            }
        })
    .state('productTOI.productDetails', {
            url: '/productDetails',
            templateUrl : 'app/pages/productTOI/ProductCategory/ProductDetail.html',
            title: 'Product Detail',
            sidebarMeta: {
                order: 0
            }

        })
   .state('productTOI.productCompare', {
            url: '/productCompare',
            templateUrl : 'app/pages/productTOI/ProductCompare/ProductCompare.html',
            controller : 'ProductComparePageCtrl',
            title: 'Product Compare',
            sidebarMeta: {
                order: 0
            }

        });
  }])
        .constant('URL',{
                    "BASE_URL" : "http://localhost:8080/productTOI/",
                    "searchProductTypeByName" : "searchProductType/",
                    "searchProductDetailsByProductTypeId" : "getProductDetails/",
                    "productTypeList" : "getAllProductType",
                    "productAttributeList" : "getAllProductDetails"
            });


})();
