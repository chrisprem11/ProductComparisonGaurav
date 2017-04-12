(function () {
  'use strict';

  angular.module('BlurAdmin.pages.form')
      .controller('WizardCtrl', WizardCtrl)
       .directive('subWiz',[function(){
        return{         
            restrict: 'EA',
            transclude:true,
            templateUrl : 'app/pages/form/wizard/subwizard/subWizrd.html',
            controller : 'subWizrdCtrl',
            controllerAs: 'swc',
            title: 'Sub Form Wizard'
        }
    }]);

  /* angular.directive('subWiz',subWiz);
    
    function subWiz(){
    
        return{
         
            restrict: 'EA',
            templateUrl : 'wizard/subwizard/subWizrd.html',
            controller : 'SubWizardCtrl'
            
        }
    }*/
    
  /** @ngInject */
  function WizardCtrl($scope) {
   var vm = this;

    vm.personalInfo = {};
    vm.productInfo = {};
    vm.shipment = {};

    
   /* vm.arePersonalInfoPasswordsEqual = function () {
      return vm.personalInfo.confirmPassword && vm.personalInfo.password == vm.personalInfo.confirmPassword;
    };*/
  }

})();

