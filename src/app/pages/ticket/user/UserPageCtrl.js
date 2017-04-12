/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.ticket')
    .controller('UserPageCtrl', UserPageCtrl);

  /** @ngInject */
  function UserPageCtrl($scope,$state,$rootScope,LoginService) {
     
      $scope.user = $rootScope.globals.currentUser;

      if($rootScope.globals.userRole != 'user'){
               $rootScope.globals = {
                     currentUser :'undefined',
                     userRole : 'undefined',
                     userStatus : 'undefined',
                     userRoleStatus : 'undefined'
                 };
          $state.go('ticket.login');

      }
        
      $scope.profile = function() {
          $state.go('ticket.userProfile');
      }//profile()
      
      $scope.home = function() {
          $state.go('ticket.user');
      }//home()
     //logout function
      $scope.logout = function() {
                 $rootScope.globals = {
                     currentUser :'undefined',
                     userRole : 'undefined',
                     userStatus : 'undefined',
                     userRoleStatus : 'undefined'
                 };
          LoginService.setAuthorized(false);
          $state.go('ticket.login');
          
      }//logout()
      
   }//UserPageCtrl(-,-,-)
  

})();
