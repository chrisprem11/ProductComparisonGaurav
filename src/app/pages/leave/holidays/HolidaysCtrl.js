/**
 * @author a.demeshko
 * created on 21.01.2016
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.leave')
    .controller('HolidaysCtrl', HolidaysCtrl);

  /** @ngInject */
  function HolidaysCtrl($scope) {
   	
      
     $scope.date = new Date();
       $scope.open = open;
        $scope.opened = false;
        $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
        $scope.format = $scope.formats[0];
       
        $scope.options = {
            showWeeks: false
        };
      
      $scope.data = [
        {
            name : "New Year Day",
            date : "Sunday, 1st January",
            repeat : true,
            type : "official",
            location : "Pune, India"
            
        },
        {
            name : "Labour Day",
            date : "Monday, 1st May",
            repeat : true,
            type : "official",
            location : "Pune, India"
            
        },
        {
            name : "Independence Day",
            date : "Tuesday, 15st August",
            repeat : true,
            type : "national",
            location : "Pune, India"
            
        }
    ];
    
    $scope.saveList = function(holiday) {
        console.log(holiday);
        $scope.data.push(holiday);
        
    }
    
    $scope.deleteHoliday = function(id) {
        $scope.data.splice(id,1);
    }
    
  }

})();