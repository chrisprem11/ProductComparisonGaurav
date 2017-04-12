/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.ticket')
      .factory("LoginService",LoginService);

  /** @ngInject */
  function LoginService($http,$q,$state,$timeout) {
      
      var authorize = false;
      
      var authentication = function(loginCredential) {
          
           var deferred = $q.defer();
               $timeout(function() {
                   $http.get('app/pages/ticket/userDetails.json')
                 .then(function(response){
                       var userData = response.data;
                       var userRole;
                       var userStatus;
                       var userRoleStatus;
                        console.log(response.data);
                        
                       for(var i in userData){
                           
                           if(loginCredential.email === userData[i].email && loginCredential.password === userData[i].password){
                               
                               userRole = userData[i].user_role;  
                               userStatus = userData[i].user_status;
                               userRoleStatus = userData[i].role_status;
                               
                           }
                       }
                       
                       deferred.resolve({
                                "userRole":userRole,
                                "userStatus":userStatus,
                                "userRoleStatus":userRoleStatus
                        });
                       
                   },function(error){
                       console.log('cannot login, Invalid Credentials');
                   });                   
               
               },2000);
               
               return deferred.promise;
     
                
      }//end of authentication(-)
  
      
      return {
          
           "isAuthenticated" : authentication,
          
           "isAuthorized" : function(){
               return authorize;
            },
          
           "setAuthorized" : function(newAuthorize) {
               authorize = newAuthorize;
           }
          
      }//return
      
  }//loginService(-,-,-,-)
    
}) ();