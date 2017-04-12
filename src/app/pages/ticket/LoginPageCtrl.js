/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.ticket')
    .controller('LoginPageCtrl', LoginPageCtrl);

  /** @ngInject */
  function LoginPageCtrl($scope,$state,$rootScope,LoginService) {
    
      
      //check login
      $scope.login = function(loginCredential){
          
         if(loginCredential == null) {
              $scope.msg = " * please enter the credentials";
          }
          else {
              
             LoginService.isAuthenticated(loginCredential).then(
                 function(response){
                     if (response.userRole === "admin"){
                         
                         /*
                              localStorageService.set('currentUser',loginCredential.email);
                              localStorageService.set('userRole',response.userRole);
                              localStorageService.set('userStatus',response.userStatus);
                              localStorageService.set('userRoleStatus',response.userRoleStatus);
                         */

                         $rootScope.globals = {
                             currentUser : loginCredential.email,
                             userRole : response.userRole,
                             userStatus : response.userStatus,
                             userRoleStatus : response.userRoleStatus
                         };
                         LoginService.setAuthorized(true);
                         $state.go('ticket.admin');
                 }
                 else if(response.userRole === "agent") {
                     
                     $rootScope.globals = {
                         currentUser : loginCredential.email,
                         userRole : response.userRole,
                         userStatus : response.userStatus,
                         userRoleStatus : response.userRoleStatus
                     };
                     LoginService.setAuthorized(true);
                     $state.go('ticket.agent');
                 }
                 else if(response.userRole === "user") {
                     
                     $rootScope.globals = {
                         currentUser : loginCredential.email,
                         userRole : response.userRole,
                         userStatus : response.userStatus,
                         userRoleStatus : response.userRoleStatus
                     };
                     LoginService.setAuthorized(true);
                     $state.go('ticket.user');
                 }
                 
                     
             },function(error){
                 console.log(error);
                 $rootScope.globals = {
                     currentUser :'undefined',
                     userRole : 'undefined',
                     userStatus : 'undefined',
                     userRoleStatus : 'undefined'
                 };
                 LoginService.setAuthorized(false);
                 $state.go('ticket.login');
             }
             );//check the user be authenticate to its page or not
             
          }
        
      }//login(-)
      
 //logout function
   /*   $scope.logout = function() {
          $rootScope.globals = {
              currentUser :'undefined',
              userRole : 'undefined',
              userStatus : 'undefined',
              userRoleStatus : 'undefined'
          };
          $state.go('ticket.login');
          
      }//logout()*/
      
  }//LoginPageCtrl(-,-,-)
  

})();
