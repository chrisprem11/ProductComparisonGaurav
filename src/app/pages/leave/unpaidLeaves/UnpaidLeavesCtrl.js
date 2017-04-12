/**
 * @author a.demeshko
 * created on 21.01.2016
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.leave')
    .controller('UnpaidLeavesCtrl', UnpaidLeavesCtrl);

  /** @ngInject */
  function UnpaidLeavesCtrl($scope,$state) { 
  
      
  $scope.save = function(unPaidLeaves){
      $state.go('^.try');
      console.log(unPaidLeaves);
  }
  

  }

})();
   