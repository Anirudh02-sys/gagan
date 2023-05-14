var myApp = angular.module('myApp',['ngRoute'])

myApp.config(['$routeProvider',function($routeProvider){

    $routeProvider
        .when('/home',{
            templateUrl: 'view/home.html'
        })
        .when('/directory',{
            templateUrl: 'view/directory.html',
            controller: 'NinjaController'
        })
        .otherwise({
            redirectTo:'/home'
        });

}]);


myApp.controller('NinjaController',['$scope',function($scope){
    

    $scope.removeNinja = function(ninja){
        var removeNinja = $scope.ninjas.indexOf(ninja);
        $scope.ninjas.splice(removeNinja,1);

    }

    $scope.addNinja = function(){
        $scope.ninjas.push({
            name: $scope.newninja.name,
            belt: $scope.newninja.belt,
            rate: parseInt($scope.newninja.rate),
            available: true,
        });

        $scope.newninja.name ="";
        $scope.newninja.belt ="";
        $scope.newninja.rate ="";
    };

    $scope.ninjas = [
        {
            name:"Yoshi",
            belt:"green",
            rate: 50,
            available: true,
            thumb:"https://randomuser.me/api/portraits/thumb/men/75.jpg"

        },
        {
            name:"Mogu",
            belt:"Yellow",
            rate: 30,
            available: false,
            thumb:"https://randomuser.me/api/portraits/thumb/men/75.jpg"
        },
        {
            name:"Ryu",
            belt:"black",
            rate: 10,
            available: true,
            thumb:"https://randomuser.me/api/portraits/thumb/men/75.jpg"
        },
        {
            name:"Shaun",
            belt:"orange",
            rate: 1000,
            available: true,
            thumb:"https://randomuser.me/api/portraits/thumb/men/75.jpg"
        }

    ]

    console.log(angular.toJson($scope.ninjas));
}]);

/*
myApp.config(function(){

});

myApp.run(function(){

});*/


