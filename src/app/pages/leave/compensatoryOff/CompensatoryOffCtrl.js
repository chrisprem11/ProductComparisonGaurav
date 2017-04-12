/**
 * @author a.demeshko
 * created on 21.01.2016
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.leave')
    .controller('CompensatoryOffCtrl', CompensatoryOffCtrl);

  /** @ngInject */
  function CompensatoryOffCtrl($scope,$state) { 
  
      $scope.save = function(nm) {
  
          console.log(nm);
          $state.go('leave.newState');
          
      }

  }

})();
   