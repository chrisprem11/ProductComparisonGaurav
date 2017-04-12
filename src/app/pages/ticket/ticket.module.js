/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.ticket', [])
      .config(routeConfig)
      .run(checkState);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('ticket', {
            url: '/ticket',
            template : '<ui-view  autoscroll="true" autoscroll-body-top></ui-view>',
            abstract: true,
            title: 'Ticket',
            sidebarMeta: {
                icon: 'ion-document-text',
                order: 0
            }
        })
        .state('ticket.login', {
            url: '/login',
            templateUrl: 'app/pages/ticket/login.html',
            controller: 'LoginPageCtrl',
            title: 'Login Page',
            sidebarMeta: {
                order: 0
            }
        })
        .state('ticket.admin', {
            url: '/admin',
            templateUrl: 'app/pages/ticket/admin/admin.html',
            controller: 'AdminPageCtrl',
            authenticate : true,
            sidebarMeta: {
                order: 0
            }
        })
        .state('ticket.agent', {
            url: '/agent',
            templateUrl: 'app/pages/ticket/agent/agent.html',
            controller: 'AgentPageCtrl',
            /*title: 'Agent Page',*/
            authenticate : true,
            sidebarMeta: {
                order: 0
            }
        })
        .state('ticket.user', {
            url: '/user',
            templateUrl: 'app/pages/ticket/user/user.html',
            controller: 'UserPageCtrl',
            /*title: 'User Page',*/
            authenticate : true,
            sidebarMeta: {
                order: 0
            }
        })    
        .state('ticket.adminProfile', {
            url: '/admin',
            templateUrl: 'app/pages/ticket/admin/adminProfile.html',
            controller: 'AdminPageCtrl',
            authenticate:true
        })
        .state('ticket.agentProfile', {
            url: '/agent',
            templateUrl: 'app/pages/ticket/agent/agentProfile.html',
            controller: 'AgentPageCtrl',
            authenticate:true
        })
        .state('ticket.userProfile', {
            url: '/user',
            templateUrl: 'app/pages/ticket/user/userProfile.html',
            controller: 'UserPageCtrl',
            authenticate:true
        });
    
  }
  
     function checkState($rootScope, $state, LoginService) {
        $rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams){
            
           
            
            if(toState.authenticate && !LoginService.isAuthorized() ) {
                $rootScope.globals = {
                     currentUser :'undefined',
                     userRole : 'undefined',
                     userStatus : 'undefined',
                     userRoleStatus : 'undefined'
                 };
                $state.transitionTo("ticket.login");
                
                event.preventDefault(); 
            }
        });
  }
    
    
})();