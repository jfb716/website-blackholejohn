angular.module('components', [])
    .directive('adTagSelection', function(){
    
        return {
        restrict: 'E',
        templateUrl: 'dfp_banner.html'
        }
   
})

angular.module('adTagApp', ['components'])


