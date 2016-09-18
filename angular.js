var myApp = angular.module("myApp", []);

myApp.directive("anTag", function(){
   return {
       restrict: 'E',
       templateUrl: 'anTag.html'
   } 
});

myApp.directive("anAd", function(){
   return {
       restrict: 'E',
       templateUrl: 'anAd.html'
   } 
});


myApp.controller('myCtrl', function($scope) {
    $scope.placementid = "PLACEMENT_ID";
    $scope.ctacolor = "rgb(108, 135, 216)";
    $scope.fontfamily = "Arial, Helvetica, sans-serif";
    $scope.subFontWeight = "800";
    $scope.titFontWeight = "700";
    $scope.ctaFontWeight = "700";
    });

