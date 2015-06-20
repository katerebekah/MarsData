
app.controller('marsCtrl', function($scope, $http) {
    $scope.message = "mars";
    $scope.MarsData = [];

    $scope.getData = function() {
        for (var i = 2; i < 52; i++) {
            $http.jsonp('http://marsweather.ingenology.com/v1/archive/?page=' + i + '&format=jsonp' + '&callback=JSON_CALLBACK')
                .then(function(data) {
                    for (var i = 0; i < data.data.results.length; i++) {
                        $scope.MarsData.push(data.data.results[i]);
                    }
                    $scope.MarsData.sort(function(a, b) {
                        return a.sol - b.sol
                    });
                });
        };
    };
    $scope.getData();

});
