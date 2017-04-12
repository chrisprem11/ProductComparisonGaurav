/**
 * @author a.demeshko
 * created on 21.01.2016
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.leave')
  .factory('leaveService',leaveService);
    
      /** @ngInject */
    function leaveService() { 
      
      var leave = [];
      console.log(leave);
      return {         
       
          "setLeave" : function(leaveHoliday) {
              
              leave.push(leaveHoliday);
          },
          
          "getLeave" : function() {
              return leave;
          }
      }
    }
    
  })();