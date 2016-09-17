var myApp = angular.module("myApp", []);

myApp.directive("anTag", function(){
   return {
       restrict: 'E',
       templateUrl: 'anTag.html'
   } 
});