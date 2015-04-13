var app = angular.module("friendsList");

app.controller('mainCtrl', function($scope){
	$scope.friends = ['Chlo E Kim Holt', 'Kyle Holt', 'ASal'];
	// If you have more time, I want you to create a function in your controller called 'addFriend' that takes in a name of another friend and pushes it to your friends array. In your index.html you'll need an input box that will be the name of your friend, and a button that will run $scope.addFriend every time it is clicked. 
	$scope.addFriend = function(){
		if(!$scope.friendToAdd) {	// If there is no value in the input field, do nothing
			return;
		}
		for (var i = 0; i < $scope.friends.length; i++) {
			console.log($scope.friends[i]);
			if ($scope.friendToAdd === $scope.friends[i]) {
				$scope.errorMessage = console.log($scope.friendToAdd + " already exists in your list!");	// errorMessage doesn't work in HTML
				return false;
			}
		}
		$scope.friends.push($scope.friendToAdd);
		$scope.friendToAdd = '';	// Resets the input field to blank once button is clicked

	}
});



