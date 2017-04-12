/**
 * @author a.demeshko
 * created on 21.01.2016
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.leave')
    .controller('ManageLeavePoliciesCtrl', ManageLeavePoliciesCtrl);

  /** @ngInject */
  function ManageLeavePoliciesCtrl($scope,$state,leaveService) { 
  
      var leavePolicy = leaveService.getLeave();// get the Leave Policy details
      
      console.log(leavePolicy);
      
      var mleave = [];
      
      var typeLeave = [
        {value : 'Casual Leave',inc :  '6 per annum'},
        {value : 'Sick Leave',inc :  '12 per annum'},
        {value : 'Maternity Leave',inc :  '8 per annum'},
        {value : 'Causual Without Pay Leave',inc :  '10 per annum'},
        {value : 'Paternity Leave',inc :  '9 per annum'}
      ];
      
   for(var m in leavePolicy) {  
       
        for(var i in typeLeave) {
        
            if(leavePolicy[m].name == typeLeave[i].value) {
               mleave.push({value:typeLeave[i].value, inc : typeLeave[i].inc})
            }
            
        }
  }
      
      $scope.manageLeave = mleave;
      
      console.log($scope.manageLeave);
      
        $scope.edit = function(){
            
            $state.go('createLeavePolicy');/*, { 'name': typeLeave[id].value, 'anotherKey': 'edit' });*/
        }
        
        $scope.delete = function(id) {
            $scope.manageLeave.splice(id,1);
        }
  
  }

})();
   