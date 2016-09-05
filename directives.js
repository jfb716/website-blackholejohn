var app = angular.module("adTagApp", []);
app.directive('adTagDfp', function(){
    
        return {
        restrict: 'E',
        templateUrl: 'dfp_banner.html'
        };
});


app.directive('adTagAdx', function(){
    
        return {
        restrict: 'E',
        templateUrl: 'adx_banner.html'
        };
});




