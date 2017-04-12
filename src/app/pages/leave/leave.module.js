/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.leave', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('leave', {
            url: '/leave',
            template : '<ui-view  autoscroll="true" autoscroll-body-top></ui-view>',
            /*templateUrl : 'app/pages/leave/leave.html',*/
            abstract: true,
            title: 'Leave',
            sidebarMeta: {
                icon: 'ion-clipboard',
                order: 0,
            },
        })
        .state('leave.createLeavePolicy', {
            url: '/createLeavePolicy',
            templateUrl: 'app/pages/leave/createLeavePolicy/createLeavePolicy.html',
            controller: 'CreateLeavePolicyCtrl',
            /*params : ['name','anotherkey'],*/
            title: 'Create Leave Policy',
            sidebarMeta: {
                order: 0,
            },
        })
        .state('leave.manageLeavePolicies', {
          url: '/manageLeavePolicies',
          templateUrl: 'app/pages/leave/manageLeavePolicies/manageLeavePolicies.html',
          controller: 'ManageLeavePoliciesCtrl',
          title: 'Manage Leave Policies',
          sidebarMeta: {
            order: 0,
          }
        })
        .state('leave.unpaidLeaves', {
          url: '/unpaidLeaves',
          templateUrl: 'app/pages/leave/unpaidLeaves/unpaidLeaves.html',
          controller: 'UnpaidLeavesCtrl',
          title: 'Unpaid Leaves',
          sidebarMeta: {
            order: 0,
          }
        })
        .state('leave.holidays', {
          url: '/holidays',
          templateUrl: 'app/pages/leave/holidays/holidays.html',
          controller : 'HolidaysCtrl',
          controllerAs : 'holidaysCtrl',
          title: 'Holidays',
          sidebarMeta: {
            order: 0,
          }
        })
        .state('leave.leaveSettings', {
          url: '/leaveSettings',
          templateUrl: 'app/pages/leave/leaveSettings/leaveSettings.html',
          controller: 'LeaveSettingsCtrl',
          title: 'Leave Settings',
          sidebarMeta: {
            order: 0,
          },
        })
        .state('leave.compensatoryOff', {
          url: '/compensatoryOff',
          templateUrl: 'app/pages/leave/compensatoryOff/compensatoryOff.html',
          controller:'CompensatoryOffCtrl',
          title: 'Compensatory Off',
          sidebarMeta: {
            order: 0,
          },
        })
        .state('leave.collapseForm', {
          url: '/collapseForm',
          templateUrl: 'app/pages/leave/collapseForm/collapseForm.html',
          title: 'Collapse Form',
          sidebarMeta: {
            order: 0,
          },
        });
  }

})();
