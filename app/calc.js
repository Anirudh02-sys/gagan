var app = angular.module('calculatorApp', []);

app.controller('CalcCtrl', function($scope) {
    $scope.number1 = '';
    $scope.number2 = '';
    $scope.result = 0;
  
    $scope.add = function() {
      $scope.result = parseFloat($scope.number1) + parseFloat($scope.number2);
    };
  
    $scope.subtract = function() {
      $scope.result = parseFloat($scope.number1) - parseFloat($scope.number2);
    };
  
    $scope.multiply = function() {
      $scope.result = parseFloat($scope.number1) * parseFloat($scope.number2);
    };
  
    $scope.divide = function() {
      $scope.result = parseFloat($scope.number1) / parseFloat($scope.number2);
    };
  });
  

app.component('calculator', {
    templateUrl: 'calculator.html',
    controller: 'CalcCtrl'
  });
  
