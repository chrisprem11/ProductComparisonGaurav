/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.ticket')
    .controller('AgentPageCtrl', AgentPageCtrl);

  /** @ngInject */
  function AgentPageCtrl($scope,$state,$rootScope,LoginService) {

     $scope.user = $rootScope.globals.currentUser;
      
      if($rootScope.globals.userRole != 'agent'){
               $rootScope.globals = {
                     currentUser :'undefined',
                     userRole : 'undefined',
                     userStatus : 'undefined',
                     userRoleStatus : 'undefined'
                 };
          $state.go('ticket.login');

      }

      $scope.profile = function() {
          $state.go('ticket.agentProfile');
      }//profile()
      
      $scope.home = function() {
          $state.go('ticket.agent');
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
  
  }//AgentPageCtrl(-,-,-)
  

})();
