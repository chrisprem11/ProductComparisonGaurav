(function() {
  'use strict';

  angular.module('BlurAdmin.theme.components')
    .directive('subWizard', subWizard);

  /** @ngInject */
  function subWizard() {
    return {
      restrict: 'E',
      transclude: true,
      templateUrl: 'app/theme/components/baSubwizard/subWizard.html',
      controllerAs: '$subWizardController',
      controller: 'subWizardCtrl'
    }
  }
})();
