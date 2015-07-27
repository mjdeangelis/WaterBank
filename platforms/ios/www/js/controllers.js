/* Controllers */

var waterControllers = angular.module('waterControllers', []);

waterControllers.controller('waterBankCtrl', ['$scope', '$localStorage', function($scope, $localStorage) {

	if ($localStorage.waterObj) {                   //if localStorage exists, assign it to $scope
		$scope.waterObj = $localStorage.waterObj; 
	} else {                   						//if localStorage is empty, create new water object and assign it to $scope
		console.log("waterObj was created");
		var waterObj = {
			calories: 0,
			dollars: 0
		}
		$scope.waterObj = waterObj;
	}

	$scope.drankWater = function() {
		$scope.waterObj.calories += 150;
		$scope.waterObj.dollars += 2;

		$localStorage.waterObj = $scope.waterObj;
	}

}]); 
