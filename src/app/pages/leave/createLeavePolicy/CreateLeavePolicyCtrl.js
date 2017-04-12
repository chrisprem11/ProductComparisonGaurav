/**
 * @author a.demeshko
 * created on 21.01.2016
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.leave')
    .controller('CreateLeavePolicyCtrl', CreateLeavePolicyCtrl);

  /** @ngInject */
  function CreateLeavePolicyCtrl($scope,$state,leaveService) { 
      
      $scope.typeLeave = [
          'Casual Leave',
          'Sick Leave',
          'Maternity Leave',
          'Casual Without Pay Leave',
          'Paternity Leave'
      ];
      
      $scope.genderSpecificLeave = [
      'All',
      'Male',
      'Female'
        ];
      
  $scope.save = function(leavePolicy) {
      
      leaveService.setLeave(leavePolicy);//set the leave policy detail
      
      console.log(leavePolicy);
     
     // $state.go('leave.manageLeavePolicies');
  }
 
    $scope.next = function(createLeavePolicy) {
           
      $state.go('leave.manageLeavePolicies');
  }
  

  }

})();
   