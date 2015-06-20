app.controller('indexCtrl', function($scope, $http, $location) {
    $scope.message = "Index";
    $scope.currentConditions = {};
    $http.jsonp('http://marsweather.ingenology.com/v1/latest/?format=jsonp' + '&callback=JSON_CALLBACK').then(function(data) {
        $scope.currentConditions = data.data.report;
    });
    $scope.mars = function(){
        $location.path('/mars');
    }
});

app.controller('spaceDataCtrl', function($scope) {
    $scope.message = "space DATA";
});
