(function () {
  'use strict';

  angular.module('BlurAdmin.pages.form')
      .controller('subWizrdCtrl', SubWizardCtrl);

  /** @ngInject */
  function SubWizardCtrl($scope) {
   var swc = this;

    swc.sectionOne = {};
    /*swc.productInfo = {};
    swc.shipment = {};
*/
    swc.areSectionOnePasswordsEqual = function () {
      return swc.sectionOne.confirmPassword && swc.sectionOne.password == swc.sectionOne.confirmPassword;
    };
  }

})();

