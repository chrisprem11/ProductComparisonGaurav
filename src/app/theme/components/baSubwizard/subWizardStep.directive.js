(function() {
  'use strict';

  angular.module('BlurAdmin.theme.components')
    .directive('subWizardStep', subWizardStep);

  /** @ngInject */
  function subWizardStep() {
    return {
      restrict: 'E',
      transclude: true,
      require: '^subWizard',
      scope: {
        form: '='
      },
      templateUrl:  'app/theme/components/baSubwizard/subWizardStep.html',
      link: function($scope, $element, $attrs, wizard) {
        $scope.selected = true;

        var tab = {
          title: $attrs.title,
          select: select,
          submit: submit,
          isComplete: isComplete,
          isAvailiable: isAvailiable,
          prevTab: undefined,
          setPrev: setPrev
        };

        wizard.addTab(tab);

        function select(isSelected) {
          if (isSelected) {
            $scope.selected = true;
          } else {
            $scope.selected = false;
          }
        }

        function submit() {
          $scope.form && $scope.form.$setSubmitted(true);
        }

        function isComplete() {
          return $scope.form ? $scope.form.$valid : true;
        }

        function isAvailiable() {
          return tab.prevTab ? tab.prevTab.isComplete() : true;
        }

        function setPrev(pTab) {
          tab.prevTab = pTab;
        }
      }
    };
  }
})();