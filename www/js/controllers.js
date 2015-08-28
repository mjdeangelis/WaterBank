/* Controllers */

var waterControllers = angular.module('waterControllers', []);

waterControllers.controller('waterBankCtrl', ['$scope', '$localStorage', function($scope, $localStorage) {

	if ($localStorage.waterObj) {                   //if localStorage exists, assign it to $scope
		$scope.waterObj = $localStorage.waterObj; 
	} else {                   						//if localStorage is empty, create new water object and assign it to $scope
		console.log("No localStorage");
		var waterObj = {
			calories: 0,
			dollars: 0,
			calAvg: 150,
			dollAvg: 2
		}
		$scope.waterObj = waterObj;
	}

	$scope.drankWater = function() {
		// $scope.waterObj.calories += 150;
		// $scope.waterObj.dollars += 2;

		$scope.waterObj.calories += $scope.waterObj.calAvg;
		$scope.waterObj.dollars += $scope.waterObj.dollAvg;
		console.log("calAvg is "+$scope.waterObj.calAvg);
		console.log("dollAvg is "+$scope.waterObj.dollAvg)

		$localStorage.waterObj = $scope.waterObj;
	}

	$scope.clearTotals = function() {
		$scope.waterObj.calories = 0;
		$scope.waterObj.dollars = 0;

		$localStorage.waterObj = $scope.waterObj;
	}

	$scope.openSettingsModal = function() {
        $('.settings-modal').addClass("visible");
        $('.settings-modal').removeClass("is-hidden");
    }

    $scope.closeSettingsModal = function() {
        $('.settings-modal').addClass("is-hidden");
        $('.settings-modal').removeClass("visible");
    }

}]); 
