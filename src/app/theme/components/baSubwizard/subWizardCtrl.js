(function() {
  'use strict';

  angular.module('BlurAdmin.theme.components')
    .controller('subWizardCtrl', subWizardCtrl);

  /** @ngInject */
  function subWizardCtrl($scope) {
    var swc = this;
    swc.tabs = [];

    swc.tabNum = 0;
    swc.progress = 0;

    swc.addTab = function(tab) {
      tab.setPrev(swc.tabs[swc.tabs.length - 1]);
      swc.tabs.push(tab);
      swc.selectTab(0);
    };

    $scope.$watch(angular.bind(swc, function () {return swc.tabNum;}), calcProgress);

    swc.selectTab = function (tabNum) {
      swc.tabs[swc.tabNum].submit();
      if (swc.tabs[tabNum].isAvailiable()) {
        swc.tabNum = tabNum;
        swc.tabs.forEach(function (t, tIndex) {
          tIndex == swc.tabNum ? t.select(true) : t.select(false);
        });
      }
    };

    swc.isFirstTab = function () {
      return swc.tabNum == 0;
    };

    swc.isLastTab = function () {
      return swc.tabNum == swc.tabs.length - 1 ;
    };

    swc.nextTab = function () {
      swc.selectTab(swc.tabNum + 1)
    };

    swc.previousTab = function () {
      swc.selectTab(swc.tabNum - 1)
    };

    function calcProgress() {
      swc.progress = ((swc.tabNum + 1) / swc.tabs.length) * 100;
    }
  }
})();

